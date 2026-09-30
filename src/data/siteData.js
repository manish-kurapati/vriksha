export const siteConfig = {
  name: "Vriksha Constructions & Interior Designers",
  shortName: "Vriksha",
  tagline: "In construction, we don't just work with concrete and steel, but with hope and dreams.",
  phone: "9989382877",
  phoneFormatted: "+91 99893 82877",
  email: "sirigeyp@gmail.com",
  secondaryEmail: "sirigeyp@gmail.com",
  address: "Road No. 36, Jubilee Hills & Hitec City Corridor, Hyderabad, Telangana 500033",
  workingHours: "Monday – Saturday: 9:00 AM – 7:00 PM (IST)",
  experienceYears: "5+",
  projectsCompleted: "50+",
  happyClients: "100+",
  squareFeetDelivered: "240k+",
  onTimeHandoverRate: "99.2%",
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const servicesData = [
  {
    id: "civil-construction",
    slug: "civil-construction",
    href: "/services/civil-construction",
    title: "Civil Construction",
    eyebrow: "OUR SERVICES",
    summary: "Structural framing, seismic foundations & precision civil execution.",
    heroImage: "/images/service_formwork_shuttering.jpg",
    accentColor: "royal",
    overview: "Civil construction is the fundamental backbone of every enduring structure. At Vriksha, we deliver complete turnkey civil works—from precision excavation and seismic foundation engineering to advanced RCC framing, brick masonry, and high-performance monolithic casting. Our engineering-driven approach ensures structural permanence, zero-deviation plumbness, and uncompromised build quality.",
    deliverables: [
      "Soil Testing, Excavation & Deep Foundation Engineering",
      "Seismic-Resistant RCC Framing (Columns, Beams & Slabs)",
      "High-Performance Monolithic Concrete Casting",
      "Precision Brickwork, Block Masonry & Plastering",
      "Integrated Structural Waterproofing & Thermal Protection",
      "Turnkey Civil Execution with Strict Laboratory Quality Audits"
    ],
    features: [
      {
        title: "Engineered RCC Framing",
        description: "Precision-cast reinforced concrete columns, plinth beams, and monolithic slabs designed to withstand seismic loads with zero column bulging and true 90° plumbness."
      },
      {
        title: "Foundation & Soil Mechanics",
        description: "Scientific bearing capacity analysis, pile/raft foundations, and integrated multi-layer damp-proof courses safeguarding the structure against moisture ingress."
      },
      {
        title: "In-House Quality Standards",
        description: "100% owned equipment and strict laboratory concrete cube testing ensuring M25–M40 design strength across every floor casting."
      }
    ],
    timeline: "6 – 18 Months",
    materials: ["Fe 550D TMT Rebar", "Ultratech/ACC 53 Grade Cement", "M25–M40 Design Mix Concrete", "Engineered AAC / Red Clay Bricks"]
  },
  {
    id: "residential-construction",
    slug: "residential-construction",
    href: "/services/residential-construction",
    title: "Residential Construction",
    eyebrow: "OUR SERVICES",
    summary: "Dream homes built with quality and care.",
    heroImage: "/images/service_residential.jpg",
    accentColor: "royal",
    overview: "Every residential project at Vriksha is approached as an architectural legacy. From foundational seismic engineering to bioclimatic solar orientation and minimalist cantilevered silhouettes, we build bespoke homes that embody tranquility, structural permanence, and understated refinement.",
    deliverables: [
      "Custom Architectural Villa Construction",
      "Structural Engineering & Soil Feasibility",
      "Energy-Efficient Bioclimatic Design",
      "Curated Fenestration & Thermal Glazing",
      "Turnkey Civil & Structural Handover"
    ],
    features: [
      {
        title: "Monolithic Structural Integrity",
        description: "High-grade reinforced concrete framing with automated curing protocols to prevent micro-fractures and maximize structural longevity."
      },
      {
        title: "Passive Climate Architecture",
        description: "Optimized roof overhangs, cross-ventilation corridors, and double-glazed low-E facades engineered for Indian climates."
      },
      {
        title: "Architectural Precision Finish",
        description: "Zero-tolerance alignment between structural concrete, natural stone cladding, and flush ceiling transitions."
      }
    ],
    timeline: "9 – 16 Months",
    materials: ["M40 Grade Concrete", "Natural Honed Limestone", "Double-Glazed Low-E Glass", "Acoustic Fluted Oak"]
  },
  {
    id: "commercial-construction",
    slug: "commercial-construction",
    href: "/services/commercial-construction",
    title: "Commercial Construction",
    eyebrow: "OUR SERVICES",
    summary: "Functional spaces for growing businesses.",
    heroImage: "/images/service_commercial_facade.jpg",
    accentColor: "royal",
    overview: "We engineer commercial headquarters and professional campuses that stimulate productivity and project brand authority. Our multi-disciplinary engineering teams ensure stringent regulatory compliance, advanced MEP integration, and zero-downtime execution schedules.",
    deliverables: [
      "Grade-A Corporate Headquarters & IT Campuses",
      "Steel-Frame Structural Engineering & Curtain Walls",
      "Integrated Smart MEP & Fire Suppression Systems",
      "Green Building Certification Standards (LEED / IGBC)",
      "High-Load Terrazzo & Monolithic Concrete Flooring"
    ],
    features: [
      {
        title: "Agile Phased Commissioning",
        description: "Fast-track construction schedules designed to expedite tenant occupancy while maintaining strict acoustic and life-safety thresholds."
      },
      {
        title: "Advanced Structural Glazing",
        description: "Unitized curtain wall assemblies with acoustic dampening for high-density urban business hubs."
      },
      {
        title: "Lifecycle Efficiency",
        description: "High-efficiency HVAC routing, solar-ready substructures, and rainwater harvesting infrastructure."
      }
    ],
    timeline: "12 – 24 Months",
    materials: ["Structural Steel Beams", "Acoustic Low-Iron Glazing", "High-Traffic Terrazzo", "Anodized Architectural Aluminum"]
  },
  {
    id: "interior-design",
    slug: "interior-design",
    href: "/services/interior-design",
    title: "Interior Design",
    eyebrow: "OUR SERVICES",
    summary: "Beautiful, practical interiors that reflect you.",
    heroImage: "/images/service_interior_design.jpg",
    accentColor: "royal",
    overview: "Interior spaces are where tactile intimacy meets spatial harmony. Drawing inspiration from modern European and Japanese minimalist studios, our interiors balance warm earth and stone tones with custom fluted timber joinery, concealed architectural lighting, and bespoke monolithic stone centerpieces.",
    deliverables: [
      "Complete Interior Architectural Detailing",
      "Custom Millwork, Cabinetry & Fluted Joinery",
      "Architectural Lighting Curation & Scene Control",
      "Tactile Material & Bespoke Furniture Procurement",
      "Acoustic Conditioning & Spatial Ergonomics"
    ],
    features: [
      {
        title: "Curated Tactile Palette",
        description: "Carefully calibrated material junctions—bookmatched travertine marble meeting textured fluted oak, brass accents, and warm cream linen."
      },
      {
        title: "Concealed Illumination Design",
        description: "Zero-glare indirect lighting troughs, recessed magnetic track lights, and warm-neutral 2700K ambient illumination."
      },
      {
        title: "Bespoke Millwork Precision",
        description: "Hidden European hardware, flush shadow-gap skirtings, and seamless pocket doors for undisturbed visual lines."
      }
    ],
    timeline: "3 – 6 Months",
    materials: ["Bookmatched Carrara Marble", "Quarter-Sawn White Oak", "Brushed Gunmetal Brass", "Microcement & Lime Plaster"]
  },
  {
    id: "renovation-remodeling",
    slug: "renovation-remodeling",
    href: "/services/renovation-remodeling",
    title: "Renovation & Remodeling",
    eyebrow: "OUR SERVICES",
    summary: "Modern upgrades for better living.",
    heroImage: "/images/service_renovation.jpg",
    accentColor: "royal",
    overview: "Renovation demands deeper structural intuition than ground-up builds. We skillfully strip away obsolete partitions, reinforce load-bearing elements with discreet steel lintels, and introduce expansive glazing to bathe previously dim interiors in natural daylight.",
    deliverables: [
      "Load-Bearing Structural Wall Removal & Steel Infiltration",
      "Floorplan Reconfiguration & Modern Open-Plan Conversions",
      "Facade Modernization & Contemporary Fenestration",
      "Complete MEP, Plumbing & Electrical Overhaul",
      "Historic Stone & Masonry Preservation"
    ],
    features: [
      {
        title: "Adaptive Structural Reinforcement",
        description: "Precision micro-piling and steel beam integration to open expansive column-free living zones."
      },
      {
        title: "Seamless Material Integration",
        description: "Harmonizing original heritage masonry with crisp floor-to-ceiling glass and minimalist dark steel overhangs."
      },
      {
        title: "Zero-Compromise Dust & Safety Controls",
        description: "Segmented negative-air dust partitions protecting non-renovated zones throughout the reconstruction."
      }
    ],
    timeline: "2 – 6 Months",
    materials: ["Restored Sandstone", "Structural Steel Lintels", "Minimal Slimline Glazing", "Honed Basalt Tiles"]
  }
];

export const projectsData = [
  {
    id: "modern-villa",
    slug: "modern-villa",
    href: "/projects/modern-villa",
    title: "Modern Villa",
    category: "Residential",
    categorySlug: "residential",
    location: "Hyderabad",
    year: "2024",
    client: "Private Technologist",
    area: "8,500 sq.ft",
    heroImage: "/images/hero_modern_villa.jpg",
    gallery: [
      "/images/hero_modern_villa.jpg",
      "/images/project_contemporary_residence.jpg",
      "/images/materials_details.jpg"
    ],
    summary: "A sculptural modern villa featuring cantilevered fair-faced concrete, floor-to-ceiling structural glazing, and a reflective infinity horizon.",
    concept: "Designed along an east-west solar axis, The Modern Villa frames panoramic hillside views while utilizing massive cantilevered canopies and warm timber louvers to shield interior living rooms from intense afternoon heat.",
    overview: "Conceived as a sun-drenched sanctuary elevated above the bustling cityscape, this residence exemplifies warm architectural luxury.",
    materials: ["Board-Marked Structural Concrete", "Low-Iron Structural Glazing", "Honed Grey Basalt", "Acoustic White Oak Panels"],
    features: [
      "14-meter column-free cantilevered upper terrace",
      "Integrated rainwater harvesting and greywater recycling pool",
      "Custom recessed linear LED channels providing indirect dusk illumination",
      "Private interior zen courtyard bringing daylight into subterranean cinema"
    ]
  },
  {
    id: "corporate-office",
    slug: "corporate-office",
    href: "/projects/corporate-office",
    title: "Corporate Office",
    category: "Commercial",
    categorySlug: "commercial",
    location: "Hyderabad",
    year: "2024",
    client: "Nova Innovations Group",
    area: "34,000 sq.ft",
    heroImage: "/images/service_commercial_facade.jpg",
    gallery: [
      "/images/service_commercial_facade.jpg",
      "/images/project_boutique_interior.jpg",
      "/images/materials_details.jpg"
    ],
    summary: "A forward-looking commercial headquarters defined by an expressive steel exoskeleton and high-performance deep blue glass curtain wall.",
    concept: "Designed to host 350+ engineers and product designers, the Nova Tech Headquarters emphasizes transparent collaboration.",
    overview: "The building stands out in the Financial District for its restraint.",
    materials: ["Recycled High-Tensile Structural Steel", "Double-Silver Low-E Blue Reflected Glazing", "Honed Terrazzo"],
    features: [
      "LEED Platinum targeted thermal envelope with solar photovoltaic roof canopy",
      "Column-free 80-foot structural spans for reconfigurable open offices",
      "Dual-stage sound-attenuation glazed curtain wall achieving STC 48"
    ]
  },
  {
    id: "luxury-apartment",
    slug: "luxury-apartment",
    href: "/projects/luxury-apartment",
    title: "Luxury Apartment",
    category: "Interior Design",
    categorySlug: "interior-design",
    location: "Hyderabad",
    year: "2024",
    client: "Private Venture Partner",
    area: "5,400 sq.ft",
    heroImage: "/images/project_penthouse_luxury.jpg",
    gallery: [
      "/images/project_penthouse_luxury.jpg",
      "/images/service_interior_design.jpg",
      "/images/materials_details.jpg"
    ],
    summary: "An expansive high-rise penthouse celebrating panoramic urban vistas with curved cream bouclé seating, warm slatted oak wall paneling, and architectural linear lighting.",
    concept: "At 38 stories high, the golden sunset skyline is the principal artwork.",
    overview: "Curved bouclé upholstery breaks the rectilinear geometry of the perimeter glazing with soft warmth.",
    materials: ["Textured Cream Bouclé", "Warm Slatted Oak Paneling", "Honed Travertine Marble", "Brushed Brass Lighting"],
    features: [
      "270-degree panoramic floor-to-ceiling glass curtain wall",
      "Lutron computerized architectural lighting scenes tuned for morning, twilight & night",
      "Concealed acoustic wall panels behind bespoke acoustic fabric"
    ]
  }
];

export const processPhases = [
  {
    step: "01",
    title: "Consultation",
    eyebrow: "FOUNDATION & BRIEF",
    description: "Understand your needs and vision.",
    details: [
      "In-depth client aspirations & functional brief mapping",
      "Topographical survey, solar path analysis & soil feasibility tests",
      "Transparent preliminary budget modeling and regulatory review"
    ],
    duration: "1 – 2 Weeks",
    image: "/images/process_consultation.jpg"
  },
  {
    step: "02",
    title: "Design & Plan",
    eyebrow: "SPATIAL CHOREOGRAPHY",
    description: "Create tailored designs and detailed plans.",
    details: [
      "Comprehensive schematic floorplans & 3D photorealistic visualization",
      "Complete MEP, structural calculations & statutory municipal sanctions",
      "Detailed bill of quantities (BOQ) with zero hidden cost clauses"
    ],
    duration: "3 – 6 Weeks",
    image: "/images/process_design.jpg"
  },
  {
    step: "03",
    title: "Build & Execute",
    eyebrow: "STRUCTURAL CRAFTSMANSHIP",
    description: "Bring your vision to life with expert execution.",
    details: [
      "Rigid laboratory testing of concrete batches, steel tensile bars & aggregates",
      "Weekly drone and digital photographic milestone logs shared with clients",
      "Dedicated full-time on-site project engineer monitoring tolerances"
    ],
    duration: "6 – 14 Months",
    image: "/images/process_construction.jpg"
  },
  {
    step: "04",
    title: "Handover",
    eyebrow: "PERFECTION & OCCUPANCY",
    description: "Deliver a space you'll love for years.",
    details: [
      "180-point quality audit inspecting fenestration, plumbing pressures & finishes",
      "Professional deep architectural cleaning and protective sealant coats",
      "Handover of architectural as-built drawings and 10-year structural warranty"
    ],
    duration: "2 – 3 Weeks",
    image: "/images/process_handover.jpg"
  }
];

export const testimonialsData = [
  {
    id: 1,
    quote: "Vriksha delivered our dream home exactly as we envisioned. The design, quality and attention to detail were exceptional.",
    author: "Ramesh Kumar",
    role: "Home Owner",
    project: "Modern Villa, Hyderabad",
    avatar: "/images/hero_modern_villa.jpg",
    year: "2024"
  },
  {
    id: 2,
    quote: "The team was professional, creative and delivered our office project on time. Highly recommended!",
    author: "Priya S",
    role: "Business Owner",
    project: "Corporate Office, Hyderabad",
    avatar: "/images/service_commercial_facade.jpg",
    year: "2024"
  },
  {
    id: 3,
    quote: "Our home interiors turned out beautiful. Their design sense and execution are top-notch.",
    author: "Anil Verma",
    role: "Apartment Owner",
    project: "Luxury Apartment, Hyderabad",
    avatar: "/images/project_penthouse_luxury.jpg",
    year: "2024"
  }
];

export const materialsData = [
  {
    name: "Natural Honed Limestone",
    type: "Facade & Masonry",
    description: "Fine-grained limestone offering thermal insulation and soft neutral texture that weathers gracefully over generations."
  },
  {
    name: "Honed Travertine & Warm Marble",
    type: "Interior Architecture",
    description: "Carefully calibrated stone slabs with organic warm ivory and sand veining, hand-polished to a satin architectural finish."
  },
  {
    name: "Acoustic Fluted Oak",
    type: "Millwork & Joinery",
    description: "Quarter-sawn white oak with vertical fluting for sound absorption, creating warmth and rhythmic spatial calm."
  },
  {
    name: "Low-Iron Structural Glazing",
    type: "Fenestration",
    description: "High-transparency crystal-clear glass with double-silver low-E coatings maximizing natural light while repelling solar heat."
  }
];
