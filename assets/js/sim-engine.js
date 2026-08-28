/* Generic simulation engine.
   Requires lab.js to be loaded first (randNormal, clamp, round, mean, TrialLog, setText).

   Expects standard markup IDs on the page:
     #drug        <select>
     #runBtn      <button>
     #resetBtn    <button>
     #logBody     <tbody>
     #primaryVal  element showing the headline number/result
     #primaryNote element showing a short note under it
     #ctrlMean, #grpMean, #pctChange (or #interp), #nTrials

   Two entry points: SimEngine.numeric(config) and SimEngine.binary(config)
*/
const SimEngine = {

  numeric(cfg) {
    // cfg: { drugLabels, controlKey, baselineMean, baselineSD, multipliers,
    //        noiseSD, clampMin, clampMax, cutoff, decimals, unitSuffix,
    //        logValueLabel, pctMode: 'signed'|'inhibition', interpretFn (optional) }
    const decimals = cfg.decimals ?? 1;
    const controlKey = cfg.controlKey || 'saline';
    const controlLabel = cfg.drugLabels[controlKey];

    function computeVal(drugKey){
      const base = randNormal(cfg.baselineMean, cfg.baselineSD);
      const factor = cfg.multipliers[drugKey] ?? 1;
      let v = base * factor + randNormal(0, cfg.noiseSD ?? cfg.baselineSD * 0.15);
      v = clamp(v, cfg.clampMin, cfg.clampMax);
      return round(v, decimals);
    }

    const log = new TrialLog(document.getElementById('logBody'), [{key:'n'},{key:'drug'},{key:'val'}]);
    let n = 0;

    document.getElementById('runBtn').onclick = () => {
      n++;
      const drugKey = document.getElementById('drug').value;
      const val = computeVal(drugKey);
      const cutoffHit = cfg.cutoff !== undefined && val >= cfg.cutoff;

      setText('primaryVal', val);
      if (document.getElementById('primaryNote')) {
        setText('primaryNote', cutoffHit ? 'Cut-off reached' : (cfg.noteText || ''));
      }

      log.add({n, drug: cfg.drugLabels[drugKey], val: val + (cutoffHit ? ' (cutoff)' : '') + (cfg.unitSuffix || '')});

      const ctrlVals = log.valuesFor('val', r => r.drug === controlLabel).map(v => parseFloat(v));
      const grpVals = log.valuesFor('val', r => r.drug === cfg.drugLabels[drugKey]).map(v => parseFloat(v));
      const ctrlM = ctrlVals.length ? round(mean(ctrlVals), decimals) : null;
      const grpM = round(mean(grpVals), decimals);

      setText('ctrlMean', ctrlM !== null ? ctrlM + (cfg.unitSuffix || '') : '—');
      setText('grpMean', grpM + (cfg.unitSuffix || ''));

      if (document.getElementById('pctChange')) {
        let pct = '—';
        if (ctrlM) {
          const raw = cfg.pctMode === 'inhibition' ? ((ctrlM - grpM) / ctrlM) * 100 : ((grpM - ctrlM) / ctrlM) * 100;
          pct = round(raw, 0) + '%';
        }
        setText('pctChange', pct);
      }
      if (document.getElementById('interp') && cfg.interpretFn) {
        setText('interp', ctrlM !== null ? cfg.interpretFn(grpM, ctrlM) : '—');
      }
      setText('nTrials', n);
    };

    document.getElementById('resetBtn').onclick = () => {
      log.reset(); n = 0;
      setText('primaryVal', '—');
      if (document.getElementById('primaryNote')) setText('primaryNote', '');
      setText('ctrlMean', '—'); setText('grpMean', '—'); setText('nTrials', 0);
      if (document.getElementById('pctChange')) setText('pctChange', '—');
      if (document.getElementById('interp')) setText('interp', '—');
    };
  },

  binary(cfg) {
    // cfg: { drugLabels, controlKey, protectProb, posLabel, negLabel }
    const controlKey = cfg.controlKey || 'saline';
    const controlLabel = cfg.drugLabels[controlKey];
    const log = new TrialLog(document.getElementById('logBody'), [{key:'n'},{key:'drug'},{key:'outcome'}]);
    let n = 0;

    document.getElementById('runBtn').onclick = () => {
      n++;
      const drugKey = document.getElementById('drug').value;
      const ok = Math.random() < (cfg.protectProb[drugKey] ?? 0);

      setText('primaryVal', ok ? (cfg.posLabel || 'PROTECTED') : (cfg.negLabel || 'NOT PROTECTED'));
      const pv = document.getElementById('primaryVal');
      if (pv) pv.style.color = ok ? 'var(--ok)' : 'var(--carmine)';
      if (document.getElementById('primaryNote')) {
        setText('primaryNote', ok ? (cfg.posNote || 'Protected from induced response') : (cfg.negNote || 'Induced response present'));
      }

      log.add({n, drug: cfg.drugLabels[drugKey], outcome: ok ? 'Protected' : 'Not protected'});

      const ctrlRows = log.rows.filter(r => r.drug === controlLabel);
      const grpRows = log.rows.filter(r => r.drug === cfg.drugLabels[drugKey]);
      const ctrlRate = ctrlRows.length ? round(100 * ctrlRows.filter(r => r.outcome === 'Protected').length / ctrlRows.length, 0) : null;
      const grpProtected = grpRows.filter(r => r.outcome === 'Protected').length;
      const grpRate = round(100 * grpProtected / grpRows.length, 0);

      setText('ctrlMean', ctrlRate !== null ? ctrlRate + '%' : '—');
      setText('grpMean', grpRate + '%');
      if (document.getElementById('ratio')) setText('ratio', grpProtected + ' / ' + grpRows.length);
      setText('nTrials', n);
    };

    document.getElementById('resetBtn').onclick = () => {
      log.reset(); n = 0;
      setText('primaryVal', '—');
      if (document.getElementById('primaryNote')) setText('primaryNote', '');
      setText('ctrlMean', '—'); setText('grpMean', '—'); setText('nTrials', 0);
      if (document.getElementById('ratio')) setText('ratio', '—');
    };
  }
};
