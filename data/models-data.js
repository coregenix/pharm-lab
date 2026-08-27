/* Full experimental pharmacology model catalog.
   status: "live"  -> interactive simulation exists at `href`
   status: "planned" -> listed for roadmap / contribution, not yet built
   To add a model: build models/your-model.html following an existing
   live page as a template, then flip status to "live" and set href here. */

const MODEL_CATALOG = [
  {
    category: "CNS / Neuropharmacology",
    models: [
      { name: "Hot Plate Test", status: "live", href: "models/hot-plate.html" },
      { name: "Tail-Flick Test", status: "live", href: "models/tail-flick.html" },
      { name: "Tail Immersion Test", status: "planned" },
      { name: "Acetic Acid-Induced Writhing", status: "live", href: "models/writhing.html" },
      { name: "Formalin-Induced Paw Licking", status: "planned" },
      { name: "Randall–Selitto Test", status: "planned" },
      { name: "Forced Swim Test", status: "live", href: "models/fst.html" },
      { name: "Tail Suspension Test", status: "planned" },
      { name: "Learned Helplessness", status: "planned" },
      { name: "Elevated Plus Maze", status: "live", href: "models/epm.html" },
      { name: "Elevated Zero Maze", status: "planned" },
      { name: "Open Field Test", status: "planned" },
      { name: "Light–Dark Box", status: "planned" },
      { name: "Hole Board Test", status: "planned" },
      { name: "Apomorphine-Induced Climbing", status: "planned" },
      { name: "Amphetamine-Induced Stereotypy", status: "planned" },
      { name: "MK-801-Induced Hyperlocomotion", status: "planned" },
      { name: "Catalepsy Test", status: "planned" },
      { name: "Maximal Electroshock Seizure (MES)", status: "live", href: "models/mes.html" },
      { name: "PTZ-Induced Seizures", status: "planned" },
      { name: "Picrotoxin-Induced Seizures", status: "planned" },
      { name: "Isoniazid-Induced Seizures", status: "planned" },
      { name: "Pentobarbitone-Induced Sleeping Time", status: "planned" },
      { name: "Rotarod Test", status: "live", href: "models/rotarod.html" },
      { name: "Morris Water Maze", status: "planned" },
      { name: "Y-Maze", status: "planned" },
      { name: "Novel Object Recognition", status: "planned" },
      { name: "Passive Avoidance", status: "planned" },
      { name: "6-OHDA Model", status: "planned" },
      { name: "Rotenone Model", status: "planned" },
      { name: "MPTP Model", status: "planned" },
      { name: "Haloperidol-Induced Catalepsy", status: "planned" },
      { name: "Scopolamine-Induced Amnesia", status: "planned" },
      { name: "Aβ-Induced Model", status: "planned" },
      { name: "AlCl₃ Model", status: "planned" },
      { name: "Beam Walking", status: "planned" },
      { name: "Footprint Analysis", status: "planned" },
      { name: "Actophotometer", status: "live", href: "models/actophotometer.html" },
    ]
  },
  {
    category: "Inflammation & Immunology",
    models: [
      { name: "Carrageenan-Induced Paw Edema", status: "live", href: "models/paw-edema.html" },
      { name: "Histamine-Induced Paw Edema", status: "planned" },
      { name: "Serotonin-Induced Paw Edema", status: "planned" },
      { name: "Bradykinin-Induced Edema", status: "planned" },
      { name: "Xylene-Induced Ear Edema", status: "planned" },
      { name: "Croton Oil-Induced Ear Edema", status: "planned" },
      { name: "Egg Albumin-Induced Paw Edema", status: "planned" },
      { name: "Cotton Pellet-Induced Granuloma", status: "planned" },
      { name: "Formaldehyde-Induced Arthritis", status: "planned" },
      { name: "Freund's Complete Adjuvant Arthritis", status: "planned" },
      { name: "Collagen-Induced Arthritis", status: "planned" },
      { name: "Delayed-Type Hypersensitivity", status: "planned" },
      { name: "Humoral Antibody Response", status: "planned" },
      { name: "Carbon Clearance Test", status: "planned" },
      { name: "Neutrophil Migration", status: "planned" },
      { name: "Cyclophosphamide-Induced Immunosuppression", status: "planned" },
    ]
  },
  {
    category: "Cardiovascular Pharmacology",
    models: [
      { name: "Spontaneously Hypertensive Rat (SHR)", status: "planned" },
      { name: "DOCA-Salt Hypertension", status: "planned" },
      { name: "L-NAME-Induced Hypertension", status: "planned" },
      { name: "Renal Artery Stenosis", status: "planned" },
      { name: "BP Measurement in Anesthetized Rats", status: "planned" },
      { name: "CaCl₂-Induced Arrhythmia", status: "planned" },
      { name: "Aconitine-Induced Arrhythmia", status: "planned" },
      { name: "Ischemia/Reperfusion Arrhythmia", status: "planned" },
      { name: "Isoproterenol-Induced Myocardial Infarction", status: "planned" },
      { name: "Arterial Thrombosis Model", status: "planned" },
      { name: "Venous Thrombosis Model", status: "planned" },
      { name: "Platelet Aggregation Model", status: "planned" },
      { name: "Isolated Aortic Ring", status: "planned" },
      { name: "Coronary Artery Ligation", status: "planned" },
    ]
  },
  {
    category: "Gastrointestinal Pharmacology",
    models: [
      { name: "Pylorus Ligation-Induced Ulcer", status: "live", href: "models/pylorus-ulcer.html" },
      { name: "Ethanol-Induced Gastric Ulcer", status: "planned" },
      { name: "Indomethacin-Induced Ulcer", status: "planned" },
      { name: "Cold-Restraint Stress Ulcer", status: "planned" },
      { name: "Histamine-Induced Ulcer", status: "planned" },
      { name: "Acetic Acid-Induced Chronic Ulcer", status: "planned" },
      { name: "Castor Oil-Induced Diarrhea", status: "planned" },
      { name: "MgSO₄-Induced Diarrhea", status: "planned" },
      { name: "PGE₂-Induced Enteropooling", status: "planned" },
      { name: "Charcoal Meal Transit Test", status: "planned" },
      { name: "Phenol Red Transit Test", status: "planned" },
      { name: "Isolated Ileum Preparation", status: "planned" },
    ]
  },
  {
    category: "Respiratory Pharmacology",
    models: [
      { name: "Histamine-Induced Bronchospasm", status: "planned" },
      { name: "Acetylcholine-Induced Bronchospasm", status: "planned" },
      { name: "Ovalbumin-Induced Asthma", status: "planned" },
      { name: "Methacholine Airway Hyperresponsiveness", status: "planned" },
      { name: "Guinea-Pig Tracheal Chain", status: "planned" },
      { name: "Ammonia-Induced Cough", status: "planned" },
      { name: "Citric Acid-Induced Cough", status: "planned" },
      { name: "Sulfur Dioxide-Induced Cough", status: "planned" },
      { name: "Capsaicin-Induced Cough", status: "planned" },
    ]
  },
  {
    category: "Endocrine & Metabolic",
    models: [
      { name: "Streptozotocin-Induced Diabetes", status: "planned" },
      { name: "Alloxan-Induced Diabetes", status: "planned" },
      { name: "High-Fat Diet Insulin Resistance", status: "planned" },
      { name: "Nicotinamide + STZ Model", status: "planned" },
      { name: "Oral Glucose Tolerance Test", status: "planned" },
      { name: "Insulin Tolerance Test", status: "planned" },
      { name: "High-Fat Diet Obesity", status: "planned" },
      { name: "Cafeteria Diet Obesity", status: "planned" },
      { name: "Propylthiouracil-Induced Hypothyroidism", status: "planned" },
      { name: "Thyroxine-Induced Hyperthyroidism", status: "planned" },
    ]
  },
  {
    category: "Renal Pharmacology",
    models: [
      { name: "Lipschitz Value Method (Diuretic)", status: "planned" },
      { name: "Saluretic Activity Model", status: "planned" },
      { name: "Gentamicin-Induced Nephrotoxicity", status: "planned" },
      { name: "Cisplatin-Induced Nephrotoxicity", status: "planned" },
      { name: "Renal Ischemia/Reperfusion Injury", status: "planned" },
      { name: "5/6 Nephrectomy Model", status: "planned" },
    ]
  },
  {
    category: "Hepatic Pharmacology",
    models: [
      { name: "CCl₄-Induced Hepatotoxicity", status: "planned" },
      { name: "Paracetamol-Induced Hepatotoxicity", status: "planned" },
      { name: "Ethanol-Induced Liver Injury", status: "planned" },
      { name: "Thioacetamide-Induced Hepatotoxicity", status: "planned" },
      { name: "D-Galactosamine-Induced Liver Injury", status: "planned" },
      { name: "Isoniazid/Rifampicin Hepatotoxicity", status: "planned" },
    ]
  },
  {
    category: "Hematology",
    models: [
      { name: "Prothrombin Time", status: "planned" },
      { name: "Activated Partial Thromboplastin Time", status: "planned" },
      { name: "Whole-Blood Clotting Time", status: "planned" },
      { name: "Platelet Aggregation Assay", status: "planned" },
      { name: "Phenylhydrazine-Induced Anemia", status: "planned" },
    ]
  },
  {
    category: "Antioxidant Models",
    models: [
      { name: "DPPH Radical Scavenging", status: "planned" },
      { name: "ABTS Assay", status: "planned" },
      { name: "Nitric Oxide Scavenging", status: "planned" },
      { name: "Superoxide Radical Scavenging", status: "planned" },
      { name: "FRAP Assay", status: "planned" },
      { name: "Lipid Peroxidation Assay", status: "planned" },
      { name: "CCl₄-Induced Oxidative Stress", status: "planned" },
    ]
  },
  {
    category: "Anticancer Pharmacology",
    models: [
      { name: "MTT Assay", status: "planned" },
      { name: "SRB Assay", status: "planned" },
      { name: "Trypan Blue Exclusion", status: "planned" },
      { name: "Colony Formation Assay", status: "planned" },
      { name: "Apoptosis Assay", status: "planned" },
      { name: "Ehrlich Ascites Carcinoma (EAC)", status: "planned" },
      { name: "Dalton's Lymphoma Ascites (DLA)", status: "planned" },
      { name: "Sarcoma-180", status: "planned" },
      { name: "Xenograft Model", status: "planned" },
    ]
  },
  {
    category: "Antimicrobial / Antifungal",
    models: [
      { name: "Agar Well Diffusion", status: "planned" },
      { name: "Disc Diffusion", status: "planned" },
      { name: "Broth Dilution / MIC", status: "planned" },
      { name: "MBC Determination", status: "planned" },
      { name: "Time-Kill Assay", status: "planned" },
      { name: "Biofilm Inhibition Assay", status: "planned" },
      { name: "Dermatophyte Infection Model", status: "planned" },
    ]
  },
  {
    category: "Wound Healing",
    models: [
      { name: "Excision Wound Model", status: "planned" },
      { name: "Incision Wound Model", status: "planned" },
      { name: "Burn Wound Model", status: "planned" },
      { name: "Dead-Space Wound Model", status: "planned" },
      { name: "Diabetic Wound Model", status: "planned" },
    ]
  },
  {
    category: "Antiarthritic Models",
    models: [
      { name: "Freund's Complete Adjuvant Arthritis", status: "planned" },
      { name: "Collagen-Induced Arthritis", status: "planned" },
      { name: "Formaldehyde-Induced Arthritis", status: "planned" },
    ]
  },
  {
    category: "Antipyretic Models",
    models: [
      { name: "Brewer's Yeast-Induced Pyrexia", status: "planned" },
      { name: "LPS-Induced Fever", status: "planned" },
      { name: "Endotoxin-Induced Fever", status: "planned" },
    ]
  },
  {
    category: "Reproductive Pharmacology",
    models: [
      { name: "Testosterone-Induced Prostate Hyperplasia", status: "planned" },
      { name: "Cyclophosphamide Testicular Toxicity", status: "planned" },
      { name: "Estrous Cycle Studies", status: "planned" },
      { name: "Anti-Implantation Activity", status: "planned" },
      { name: "Uterotonic Activity", status: "planned" },
      { name: "Isolated Rat Uterus", status: "planned" },
    ]
  },
  {
    category: "Toxicology Models",
    models: [
      { name: "OECD Acute Oral Toxicity", status: "planned" },
      { name: "Fixed-Dose Procedure", status: "planned" },
      { name: "Acute Toxic Class Method", status: "planned" },
      { name: "28-Day Repeated-Dose Toxicity", status: "planned" },
      { name: "90-Day Repeated-Dose Toxicity", status: "planned" },
    ]
  },
  {
    category: "In-vitro Preparations",
    models: [
      { name: "Isolated Rat Ileum", status: "planned" },
      { name: "Isolated Guinea-Pig Ileum", status: "planned" },
      { name: "Isolated Rat Uterus", status: "planned" },
      { name: "Isolated Rabbit Jejunum", status: "planned" },
      { name: "Isolated Rat Aorta", status: "planned" },
      { name: "Isolated Tracheal Chain", status: "planned" },
      { name: "Langendorff Isolated Heart", status: "planned" },
      { name: "Isolated Frog Heart", status: "planned" },
      { name: "Isolated Vas Deferens", status: "planned" },
      { name: "Isolated Urinary Bladder", status: "planned" },
    ]
  },
];
