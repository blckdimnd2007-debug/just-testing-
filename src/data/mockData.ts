import { Project, ServiceCapability, LiveSite, ProcessStep, ExecutiveQuote } from '../types';

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    number: '01',
    title: 'THE MONOLITH TOWER',
    subtitle: 'POST-TENSIONED HIGH-RISE CORE',
    location: 'CHENNAI · 12°58\'23"N 80°14\'54"E',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?q=80&w=2070&auto=format&fit=crop',
    tag: 'STRUCTURAL CONCRETE & STEEL'
  },
  {
    id: 'slide-2',
    number: '02',
    title: 'NEXUS BIOPHARM HQ',
    subtitle: 'SEISMIC GRADE-IV CANTILEVER',
    location: 'BENGALURU · 12°56\'40"N 77°41\'50"E',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    tag: 'ADVANCED CURTAIN WALL BIM'
  },
  {
    id: 'slide-3',
    number: '03',
    title: 'MARINA RESIDENTIAL ATELIER',
    subtitle: 'EXPOSED FAÇADE & OFF-SHORE CORROSION DEFENSE',
    location: 'ECR COAST · 12°51\'11"N 80°15\'22"E',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    tag: 'PRECISION ARCHITECTURE'
  },
  {
    id: 'slide-4',
    number: '04',
    title: 'LOGIX HIGH-BAY TERMINAL',
    subtitle: '84M CLEAR-SPAN INDUSTRIAL PORTAL',
    location: 'SRIPERUMBUDUR · 12°58\'10"N 79°56\'30"E',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop',
    tag: 'HEAVY CIVIL INFRASTRUCTURE'
  },
  {
    id: 'slide-5',
    number: '05',
    title: 'STERLING CIVIC FORUM',
    subtitle: 'PRECAST GEOMETRIC AUDITORIUM',
    location: 'HYDERABAD · 17°26\'33"N 78°22\'44"E',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
    tag: 'GEOMETRIC ACOUSTIC CONCRETE'
  }
];

export const TRUST_CREDENTIALS = [
  { label: 'ISO 9001:2015', desc: 'Quality Management' },
  { label: 'ISO 45001:2018', desc: 'Occupational Health & Safety' },
  { label: 'LEED PLATINUM', desc: 'Green Building Council Partner' },
  { label: 'IGBC SUPER PLATINUM', desc: 'Zero Carbon Accreditation' },
  { label: '0.00 LTI RATING', desc: '5.2M Safe Work Hours' },
  { label: 'BIM LEVEL 3 (ISO 19650)', desc: 'Integrated Digital Twin' },
  { label: 'GMP GUARANTEED', desc: 'Zero Unbudgeted Cost Overruns' }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-01',
    number: '01',
    title: 'THE MONOLITH COMMERCIAL COMPLEX',
    client: 'Apex Financial Properties',
    location: 'Chennai, India',
    year: '2026',
    category: 'Commercial',
    scale: '680,000 Sq.Ft',
    scaleCategory: '200k+',
    status: 'Completed',
    disciplines: ['ARCHITECTURE', 'CIVIL & STRUCTURAL', 'BIM VDC'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    description: 'A 42-story post-tensioned concrete monolith engineered for seismic resilience with high-performance low-emissivity ceramic frit glazing and triple-redundant mechanical plants.',
    specifications: {
      concreteGrade: 'M60 Self-Compacting High-Performance Mix',
      structuralSteel: 'Fe550D TMT Rebar with Epoxy Coating',
      seismicZone: 'Zone III with Lead-Rubber Bearing Isolation',
      certification: 'LEED Platinum Certified (88 Points)',
      architecturalLead: 'KAVIAR Technical Design Studio'
    }
  },
  {
    id: 'proj-02',
    number: '02',
    title: 'ECR CANTILEVER VILLA ESTATE',
    client: 'Private Client',
    location: 'Chennai, India',
    year: '2025',
    category: 'Residential',
    scale: '38,500 Sq.Ft',
    scaleCategory: '< 50k',
    status: 'Completed',
    disciplines: ['ARCHITECTURE', 'LUXURY GENERAL CONTRACTING'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    description: 'Dramatic beachfront residential residence featuring 14-meter post-tensioned board-formed concrete cantilevers overlooking the Bay of Bengal with marine-grade stainless reinforcement.',
    specifications: {
      concreteGrade: 'M45 White Titanium Architectural Concrete',
      structuralSteel: '316L Marine Stainless Structural Tie-backs',
      seismicZone: 'Zone III High Wind 220 km/h Coastal Envelope',
      certification: 'IGBC Platinum Green Home',
      architecturalLead: 'KAVIAR & Studio Atelier'
    }
  },
  {
    id: 'proj-03',
    number: '03',
    title: 'NEXUS AUTOMOTIVE RESEARCH CAMPUS',
    client: 'Stellantis Mobility Consortium',
    location: 'Sriperumbudur, India',
    year: '2026',
    category: 'Industrial',
    scale: '420,000 Sq.Ft',
    scaleCategory: '200k+',
    status: 'Completed',
    disciplines: ['INDUSTRIAL EPC', 'HEAVY STRUCTURAL STEEL'],
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    description: 'High-bay acoustic testing laboratories and automated robotic assembly floors with vibration-isolated raft foundations and 60-meter clear-span castellated steel trusses.',
    specifications: {
      concreteGrade: 'M50 High-Abrasion Laser Screed Slab',
      structuralSteel: 'Grade E350 Heavy Fabricated Sectionals',
      seismicZone: 'Zone III Industrial Category IV',
      certification: 'Zero Net Carbon Industrial Gold',
      architecturalLead: 'KAVIAR Structural Engineering Group'
    }
  },
  {
    id: 'proj-04',
    number: '04',
    title: 'KAVALUR ELEVATED HIGHWAY LINK',
    client: 'State Highways Authority',
    location: 'Tamil Nadu, India',
    year: '2025',
    category: 'Infrastructure',
    scale: '14.2 Kilometers',
    scaleCategory: '200k+',
    status: 'Completed',
    disciplines: ['CIVIL INFRASTRUCTURE', 'PRECAST SEGMENTAL'],
    imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1200&auto=format&fit=crop',
    description: 'Twin-deck segmental elevated corridor erected using 180-ton automated launching gantries, minimizing ground-level disruption across dense urban arteries.',
    specifications: {
      concreteGrade: 'M60 Precast Steam-Cured Segmental Box Girders',
      structuralSteel: 'High-Tensile Low-Relaxation Strands',
      seismicZone: 'IRC:6 Highway Seismic Compliance',
      certification: 'National Infrastructure Safety Trophy 2025',
      architecturalLead: 'KAVIAR Civil Transport Division'
    }
  },
  {
    id: 'proj-05',
    number: '05',
    title: 'THE GEOMETRIC RESIDENCES',
    client: 'Sovereign Realty Group',
    location: 'Bengaluru, India',
    year: '2026',
    category: 'Residential',
    scale: '185,000 Sq.Ft',
    scaleCategory: '50k-200k',
    status: 'Under Construction',
    disciplines: ['ARCHITECTURE', 'PROJECT MANAGEMENT'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    description: 'Tiered residential high-rise featuring interlocking precast concrete balconies and vertical bio-climatic gardens optimized through wind tunnel computational modeling.',
    specifications: {
      concreteGrade: 'M50 Fly-ash Replacement Low-Carbon Concrete',
      structuralSteel: 'Fe550D High-Ductility Reinforcement',
      seismicZone: 'Zone II Structural Core',
      certification: 'EDGE Advanced Green Certification',
      architecturalLead: 'KAVIAR Urban Housing'
    }
  },
  {
    id: 'proj-06',
    number: '06',
    title: 'AURORA MEDICAL INNOVATION TOWER',
    client: 'MedTech Life Sciences',
    location: 'Hyderabad, India',
    year: '2026',
    category: 'Commercial',
    scale: '120,000 Sq.Ft',
    scaleCategory: '50k-200k',
    status: 'Commissioning',
    disciplines: ['CIVIL & STRUCTURAL', 'CLEANROOM HVAC'],
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?q=80&w=1200&auto=format&fit=crop',
    description: 'State-of-the-art biological research facility with ISO Class 5 cleanrooms, pressurized vibration-free optics laboratories, and solar-integrated ventilated curtain wall.',
    specifications: {
      concreteGrade: 'M55 Radiation Shielding Heavy Aggregate Mix',
      structuralSteel: 'AISC 360 Certified Seismic Moment Frames',
      seismicZone: 'Zone II Critical Facility Category IV',
      certification: 'USGBC LEED Platinum Healthcare',
      architecturalLead: 'KAVIAR Science & Health Studio'
    }
  }
];

export const CAPABILITIES_DATA: ServiceCapability[] = [
  {
    id: 'cap-01',
    number: '01',
    title: 'GENERAL CONTRACTING',
    tagline: 'Single-source responsibility from ground-break to key handover.',
    description: 'Comprehensive construction execution managing procurement, site logistics, safety protocols, and specialty trade coordination under transparent Guaranteed Maximum Price contracts.',
    deliverables: [
      'Comprehensive on-site supervisory teams',
      'Direct-hire skilled labor force & equipment fleet',
      'Real-time material provenance tracking',
      'Zero-subcontractor obfuscation guarantee'
    ],
    specs: 'Contract Forms: FIDIC, AIA, GMP | Capacity: Projects up to $150M',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'cap-02',
    number: '02',
    title: 'CIVIL & STRUCTURAL',
    tagline: 'High-tolerance concrete, deep foundation systems, and structural steel.',
    description: 'In-house heavy engineering team specializing in post-tensioned concrete, diaphragm walls, micropile shoring, and complex long-span structural steel framing.',
    deliverables: [
      'Deep basement retaining & diaphragm slurry walls',
      'Post-tensioned unbonded & bonded slab systems',
      'Laser-screeded superflat industrial flooring',
      'Ultrasound-inspected moment connection welding'
    ],
    specs: 'Tolerance: ±2mm deviation | Self-Owned Batching & Pumping Units',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'cap-03',
    number: '03',
    title: 'COMMERCIAL CONSTRUCTION',
    tagline: 'Landmark corporate towers, campuses, and tech headquarters.',
    description: 'Delivering Class-A commercial developments that combine striking architectural expression with high floor-plate efficiency and carbon-minimal building envelopes.',
    deliverables: [
      'Unitized double-glazed structural curtain walls',
      'High-speed vertical transportation installation',
      'Tier-III data center integration & redundancy',
      'Acoustic-rated partition & core envelope systems'
    ],
    specs: 'Energy Target: Net Zero Ready | High Floor Efficiency (>86%)',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'cap-04',
    number: '04',
    title: 'RESIDENTIAL DEVELOPMENT',
    tagline: 'Bespoke coastal estates, luxury penthouses, and architectural villas.',
    description: 'Fine architectural craftsmanship for high-net-worth residences and boutique developments demanding exacting board-formed concrete and custom minimalist detailing.',
    deliverables: [
      'Architectural exposed concrete with custom formwork tie holes',
      'Floor-to-ceiling ultra-slim motorized glass facades',
      'Concealed mechanical & ambient architectural lighting',
      'Integrated storm surge & coastal humidity defense'
    ],
    specs: 'Finishing Grade: Architectural Class 1 | Bespoke Fabrication',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'cap-05',
    number: '05',
    title: 'PROJECT MANAGEMENT & BIM',
    tagline: 'Digital twin oversight, 4D schedule sequencing, and clash detection.',
    description: 'We run every project through ISO 19650 BIM Level 3 workflows, testing the build digitally before steel or concrete is deployed on the job site.',
    deliverables: [
      'Clash detection resolving 100% of MEP-structural collisions',
      '4D construction time-lapse simulation & drone scanning',
      '5D automated cost variance & procurement schedules',
      'Complete as-built digital twin asset handover'
    ],
    specs: 'Protocols: Autodesk Construction Cloud, Revit, Navisworks, Leica LiDAR',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'cap-06',
    number: '06',
    title: 'RENOVATION & RESTORATION',
    tagline: 'Structural strengthening, adaptive reuse, and heritage carbon retrofits.',
    description: 'Breathing renewed structural life into aging concrete and steel assets through carbon-fiber composite wrap, seismic base isolation retrofits, and thermal facade modernization.',
    deliverables: [
      'Carbon-fiber reinforced polymer (CFRP) structural wrapping',
      'Section enlargement & pressure grouting repairs',
      'Energy-envelope replacement with triple glazing',
      'Non-destructive structural ultrasound & core testing'
    ],
    specs: 'Up to 60% Embodied Carbon Reduction vs Demolition',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop'
  }
];

export const LIVE_SITES_DATA: LiveSite[] = [
  {
    id: 'site-01',
    code: 'CHN-TWR-04',
    name: 'OMR Financial Tower',
    location: 'OMR IT Corridor, Chennai',
    coordinates: '12°58\'14"N 80°14\'29"E',
    stage: 'Level 28 Pouring & Floor Core Cladding',
    progressPercentage: 84,
    safetyScore: '100% SAFE (642 Days Incident-Free)',
    workersOnSite: 218,
    temperature: '31°C',
    windSpeed: '14 km/h SW',
    concreteVolumePoured: '48,200 m³ / 54,000 m³',
    craneStatus: 'OPERATIONAL',
    cameraFeedUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?q=80&w=600&auto=format&fit=crop',
    lastUpdate: 'LIVE · 4 MINS AGO'
  },
  {
    id: 'site-02',
    code: 'BLR-BIO-02',
    name: 'Guindy Bio-Tech Research Park',
    location: 'Guindy Institutional Zone, Chennai',
    coordinates: '13°00\'32"N 80°12\'15"E',
    stage: 'Unitized Facade Bracket Mounting',
    progressPercentage: 62,
    safetyScore: '100% SAFE (418 Days Incident-Free)',
    workersOnSite: 146,
    temperature: '30°C',
    windSpeed: '9 km/h S',
    concreteVolumePoured: '31,000 m³ / 31,000 m³ (Core Complete)',
    craneStatus: 'OPERATIONAL',
    cameraFeedUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    lastUpdate: 'LIVE · 2 MINS AGO'
  },
  {
    id: 'site-03',
    code: 'ECR-EST-09',
    name: 'ECR Coastal Villa Pavilion',
    location: 'East Coast Road, Chennai',
    coordinates: '12°51\'40"N 80°15\'10"E',
    stage: 'Interior Post-Tensioned Joinery & Glazing',
    progressPercentage: 94,
    safetyScore: '100% SAFE (310 Days Incident-Free)',
    workersOnSite: 42,
    temperature: '29°C',
    windSpeed: '18 km/h E (Sea Breeze)',
    concreteVolumePoured: '4,800 m³ (Completed)',
    craneStatus: 'STANDBY',
    cameraFeedUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
    lastUpdate: 'LIVE · 1 MIN AGO'
  },
  {
    id: 'site-04',
    code: 'SPR-LOG-01',
    name: 'Sriperumbudur High-Bay Logistics Portal',
    location: 'Industrial Corridor, Kanchipuram',
    coordinates: '12°58\'02"N 79°56\'44"E',
    stage: 'Castellated Steel Roof Truss Hoisting',
    progressPercentage: 45,
    safetyScore: '100% SAFE (195 Days Incident-Free)',
    workersOnSite: 180,
    temperature: '32°C',
    windSpeed: '11 km/h W',
    concreteVolumePoured: '19,400 m³ / 28,000 m³',
    craneStatus: 'OPERATIONAL',
    cameraFeedUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop',
    lastUpdate: 'LIVE · 5 MINS AGO'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'PLAN',
    subtitle: 'GEOTECHNICAL & REGULATORY PROTOCOL',
    description: 'Thorough site reconnaissance utilizing rotary core boring, electrical resistivity soil stratification, and terrestrial LiDAR scanning to establish absolute coordinate baselines.',
    deliverables: [
      'Subsurface stratum bearing capacity certification',
      'Topographical 3D point-cloud baseline',
      'Municipal, coastal, and aviation height clearances',
      'Comprehensive risk register and baseline master schedule'
    ],
    technicalSpecs: 'Survey Accuracy: ±1.5mm | Deep Borehole Depth: up to 45m'
  },
  {
    number: '02',
    title: 'ENGINEER',
    subtitle: 'BIM LEVEL 3 & FINITE ELEMENT MODELING',
    description: 'Before a single kilogram of steel is cast, the entire structure is resolved in a federated 3D BIM environment. Structural loads, wind tunnel pressures, and MEP paths are clash-cleared.',
    deliverables: [
      'Full finite element seismic and non-linear dynamic analysis',
      '4D constructibility sequence visualization',
      'BIM Level 3 model with COBie facility data embedded',
      'Prefabrication bar bending & steel connection detailing'
    ],
    technicalSpecs: 'Resolution: 100% clash-free | LOD 400 Fabricator Models'
  },
  {
    number: '03',
    title: 'BUILD',
    subtitle: 'PRECISION ON-SITE EXECUTION & QUALITY MATRIX',
    description: 'Execution driven by computerized batch plants, calibrated total stations, and digital daily logs. Concrete slump and compressive cylinders are tested per batch.',
    deliverables: [
      'Automated batch plant batch tickets & 7/28 day cube tests',
      'Drone photogrammetry volume audits conducted bi-weekly',
      'Strict zero-incident daily tool-box talks and safety permits',
      'Fixed weekly progress reports with site camera transparency'
    ],
    technicalSpecs: 'Pour Tolerance: ±3mm per 3m span | 100% Ultrasound NDT on welds'
  },
  {
    number: '04',
    title: 'DELIVER',
    subtitle: 'COMMISSIONING & DIGITAL TWIN HANDOVER',
    description: 'Rigorous handover protocol including thermal imaging building envelope air-tightness audits, balancing of air/hydronic systems, and delivery of operational digital twin models.',
    deliverables: [
      'Air envelope blower-door leakage testing report',
      'Comprehensive Operations & Maintenance digital portal',
      '10-year structural warranty & defect liability management',
      'Native BIM asset model linked with IoT telemetry'
    ],
    technicalSpecs: 'Handover: 100% on-time commitment | Zero punch-list backlog'
  }
];

export const EXECUTIVE_QUOTES: ExecutiveQuote[] = [
  {
    quote: "KAVIAR is unlike any traditional contractor we've retained in South Asia. Their engineering rigor, millimeter tolerances on board-formed concrete, and absolute refusal to compromise on schedule saved our development 4 months on the critical path.",
    author: "Arjun R. Sundaram",
    title: "Chief Investment Officer",
    organization: "Horizon Commercial Real Estate Fund",
    project: "The Monolith Commercial Complex"
  },
  {
    quote: "On complex cantilever architecture, most builders ask you to compromise your design. KAVIAR's structural team leaned into the math, modeled every load in BIM, and executed the 14-meter overhang with flawless structural precision.",
    author: "Elena Rostova",
    title: "Principal Architect",
    organization: "Rostova & Partners Architectural Studio",
    project: "ECR Cantilever Villa Estate"
  },
  {
    quote: "Zero budget overruns across a 420,000 sq.ft high-tech manufacturing campus. Their guaranteed maximum price model gave our board complete fiduciary comfort from day one.",
    author: "Vikramaditya Rao",
    title: "VP of Global Manufacturing",
    organization: "Stellantis Mobility",
    project: "Nexus Research Campus"
  }
];
