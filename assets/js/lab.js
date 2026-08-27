/* Shared helpers for all simulation pages */

// Gaussian noise (Box-Muller)
function randNormal(mean, sd) {
  let u = 1 - Math.random();
  let v = Math.random();
  let z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  return mean + z * sd;
}

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

function round(v, d = 1) {
  const f = Math.pow(10, d);
  return Math.round(v * f) / f;
}

function mean(arr) { return arr.reduce((a, b) => a + b, 0) / arr.length; }

function sd(arr) {
  if (arr.length < 2) return 0;
  const m = mean(arr);
  return Math.sqrt(arr.reduce((a, b) => a + (b - m) ** 2, 0) / (arr.length - 1));
}

// Simple trial log manager: appends rows to a <tbody>, tracks values per group
class TrialLog {
  constructor(tbodyEl, columns) {
    this.tbody = tbodyEl;
    this.columns = columns;
    this.rows = [];
  }
  add(row) {
    this.rows.push(row);
    const tr = document.createElement('tr');
    tr.innerHTML = this.columns.map(c => `<td>${row[c.key]}</td>`).join('');
    this.tbody.appendChild(tr);
  }
  reset() {
    this.rows = [];
    this.tbody.innerHTML = '';
  }
  valuesFor(key, filterFn) {
    return this.rows.filter(filterFn || (() => true)).map(r => r[key]);
  }
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}
