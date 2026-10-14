export const TOUR_STOPS = [
  {
    id: 'intro',
    index: 0,
    momentBadge: 'Moment 1 · Welcome (1 min)',
    rubricFocus: 'Communication',
    tag: 'AERIAL OVERVIEW · ABURRA VALLEY',
    title: 'Comuna 13: Where Art Rebuilt a Mountain',
    subtitle:
      'Welcome to our interactive 3D tour of San Javier (Comuna 13) in Medellin, Colombia — designed for cultural investors, public policymakers, and conscious visitors.',
    summary:
      'Perched on the western slopes of the Aburra Valley, home to approximately 160,000 residents, Comuna 13 has evolved from one of Colombia’s most conflict-affected urban hillsides into an internationally recognized laboratory of social urbanism, hip-hop pedagogy, and street art memory.',
    minimalCues: [
      'Greet our 3 visitors & introduce the 3D hillside map',
      'Audience: Cultural investors, public grantmakers & conscious travelers',
      'Core Thesis: Art transformed Comuna 13, but sustained public & ethical investment is essential'
    ],
    keyStat: { value: '~160,000', label: 'Residents in San Javier (Comuna 13)' },
    cameraPos: [0, 26, 48],
    cameraTarget: [0, 6, 0],
    linkedHotspotId: null
  },
  {
    id: 'history',
    index: 1,
    momentBadge: 'Moment 2 · Guide: History (1.5 min)',
    rubricFocus: 'Communication + Language',
    tag: 'HISTORICAL MEMORY · 1990s–2002',
    title: 'From Urban Conflict to Collective Dignity',
    subtitle:
      'Understanding the resilience of Comuna 13 requires honoring its history with accuracy, respect, and zero sensationalism.',
    summary:
      'Built largely by families displaced by rural violence, Comuna 13’s steep alleys became contested by urban militias (ELN, FARC, and CAP) in the 1990s. In May 2002 (Operation Mariscal) and October 16–17, 2002 (Operation Orion), state forces launched the largest urban military operations in Colombia’s armed conflict. Amid fear, arbitrary detentions, and enforced disappearances later condemned by the Inter-American Court of Human Rights (2017), residents waved white sheets from rooftops to demand peace — beginning a community-led movement to reclaim their identity.',
    minimalCues: [
      '1990s–2002: Steep terrain isolated residents amid urban armed conflict',
      'May & Oct 2002: Operations Mariscal & Orion left deep trauma & white-sheet peace marches',
      'Shift in identity: Residents refused to be defined solely as victims — becoming leaders & creators'
    ],
    keyStat: { value: 'Oct 2002', label: 'Operation Orion & Rooftop White-Sheet Peace Protest' },
    cameraPos: [-16, 13, 24],
    cameraTarget: [-4, 6, -2],
    linkedHotspotId: 'murals'
  },
  {
    id: 'escalators',
    index: 2,
    momentBadge: 'Moment 2 · Guide: Infrastructure (1.5 min)',
    rubricFocus: 'Communication + Language',
    tag: 'SOCIAL URBANISM · DECEMBER 2011',
    title: '384 Meters That Connected a Divided City',
    subtitle:
      'Public mobility infrastructure acted as the physical backbone for social and economic inclusion.',
    summary:
      'Inaugurated on December 26, 2011 with a US$6.7 million municipal investment, six outdoor electric escalator sections climb 384 meters (nearly 1,260 feet) up the steep hillside. Replacing 350+ concrete steps equivalent to a 28-story building, the escalators reduced a grueling 35-minute climb to a 6-minute ride for over 12,000 immediate residents, proving that dignified public infrastructure belongs in historically marginalized neighborhoods.',
    minimalCues: [
      'Inaugurated Dec 2011: 6 outdoor sections spanning 384 meters (28 stories high)',
      'Mobility revolution: Cut a 35-minute steep climb down to just 6 minutes',
      'Catalyst: US$6.7M public investment opened the corridor to commerce & accessibility'
    ],
    keyStat: { value: '384 m', label: '6 Escalator Sections (35 min climb → 6 min ride)' },
    cameraPos: [6, 11, 19],
    cameraTarget: [0, 7, 0],
    linkedHotspotId: 'escalators'
  },
  {
    id: 'graffitour',
    index: 3,
    momentBadge: 'Moment 2 · Guide: Visual Art Analysis (1 min)',
    rubricFocus: 'Communication + Language',
    tag: 'OPEN-AIR GALLERY · GRAFFITOUR',
    title: 'Walls That Speak: Street Art as Living Archive',
    subtitle:
      'Murals in Comuna 13 are not mere decoration — they are visual testimonies painted by local artists to preserve collective memory.',
    summary:
      'Every mural along the climb carries deliberate symbolism: Afro-Colombian and Indigenous mothers honoring the disappeared (“The Mothers Were Right”), white doves emerging from broken chains, vibrant Andean hummingbirds representing renewal, and portraits of community elders. Guided by local storytellers, the Graffitour transforms passive sightseeing into an active dialogue on memory, justice, and neighborhood pride.',
    minimalCues: [
      'Visual symbolism: Mothers of the disappeared, white cloths of Mariscal, Andean flora',
      'Artistic reclamation: Residents decide how their history is represented on their own walls',
      'Contextual storytelling: Local guides decode each mural’s political and emotional layer'
    ],
    keyStat: { value: '100+ Murals', label: 'Curated Along the Main Cultural Corridor' },
    cameraPos: [-10, 9, 15],
    cameraTarget: [-3, 6, 1],
    linkedHotspotId: 'murals'
  },
  {
    id: 'hiphop',
    index: 4,
    momentBadge: 'Moment 2 · Guide: Community Leadership (1 min)',
    rubricFocus: 'Communication + Language',
    tag: 'YOUTH LEADERSHIP · CASA KOLACHO',
    title: 'Casa Kolacho & The Four Elements of Hip-Hop',
    subtitle:
      'How a grassroots collective turned rap, DJing, breakdance, and graffiti into a school of peace.',
    summary:
      'Founded in 2013 in tribute to murdered hip-hop leader Hector Pacheco (“Kolacho”), Casa Kolacho pioneered the original Graffitour and established free youth workshops in lyricism, beat-making, breakdancing, and muralism. By giving young people artistic skills, cultural identity, and fair income as tour guides and performers, hip-hop became the neighborhood’s most effective violence-prevention program.',
    minimalCues: [
      'Casa Kolacho (est. 2013): Founded by local hip-hop artists as a non-violent resistance hub',
      '4 Elements of Hip-Hop: Rap, DJing, breakdance, and graffiti empower local youth',
      'Economic dignity: Youth earn sustainable livelihoods as cultural guides and performers'
    ],
    keyStat: { value: '4 Elements', label: 'Rap, DJing, Breakdance & Graffiti Youth Pedagogy' },
    cameraPos: [14, 10, 16],
    cameraTarget: [5, 6, -1],
    linkedHotspotId: 'kolacho'
  },
  {
    id: 'share',
    index: 5,
    momentBadge: 'Moment 3 · Share: Personal Perspective (1 min)',
    rubricFocus: 'Communication + Language',
    tag: 'FIRST-HAND EXPERIENCE · HILLSIDE VIEWPOINTS',
    title: 'Standing at the Viewpoint: Feeling the Energy Shift',
    subtitle:
      'What happens when you step off the sixth escalator onto the upper panoramic balcony of Comuna 13.',
    summary:
      'Walking up the hillside, the sensory impact is unforgettable: the bass of live freestyle hip-hop echoes against painted brick walls, the scent of fresh roasted Antioquia coffee and green mango sorbet fills the air, and the entire Aburra Valley unfolds below. Experiencing the neighborhood firsthand shifts your perspective from sympathy to deep admiration — yet seeing the packed narrow walkways also reveals why unplanned mass tourism strains daily life for local families.',
    minimalCues: [
      'Sensory memory: Freestyle beats, neon murals, warm hospitality & panoramic valley views',
      'Emotional shift: Moving from reading about conflict to witnessing creative resilience firsthand',
      'Critical observation: Seeing crowded alleys firsthand highlights the urgent need for organized infrastructure'
    ],
    keyStat: { value: '4.7 / 5.0', label: 'Visitor Experience Rating Across 40,000+ Reviews' },
    cameraPos: [0, 16, 13],
    cameraTarget: [0, 11, -6],
    linkedHotspotId: 'viewpoints'
  },
  {
    id: 'recommend',
    index: 6,
    momentBadge: 'Moment 4 · Recommend: Data & Comparison (2 min)',
    rubricFocus: 'Argumentation + Language',
    tag: 'DATA, COMPARISON & 2035 FORECAST',
    title: 'Weighing the Evidence: Why Comuna 13 Deserves Targeted Support',
    subtitle:
      'Comparing Medellin’s cultural districts and forecasting what Comuna 13 will have achieved by 2035 if backed by responsible investment.',
    summary:
      'With 90,000 to 136,000 monthly visitors (1.1M–1.6M annually, est.) and over 2,750 formally registered local businesses (Medellin Chamber of Commerce, 2023), Comuna 13 generates far higher grassroots social return per dollar than already-saturated commercial districts like El Poblado. However, without public and impact investment in secondary walkways, mobility access for residents with disabilities, and cultural grants, overcrowding and gentrification could erode the very community that built this miracle. If stakeholders fund community-led infrastructure today, by 2035 Comuna 13 will have established Latin America’s premier self-sustaining creative economy.',
    minimalCues: [
      'Compare places: Higher grassroots social ROI than El Poblado; safer guided corridors than Plaza Botero',
      'Weigh consequences: 90k–136k monthly visitors strain escalators & block resident taxi/emergency access',
      '2035 Conditional Projection: "If we fund community infrastructure now, by 2035 it will have decentralized visitor flows and protected local ownership"'
    ],
    keyStat: { value: '2,750+', label: 'Registered Local Businesses (Chamber of Commerce, 2023)' },
    cameraPos: [-12, 18, 30],
    cameraTarget: [0, 8, 0],
    linkedHotspotId: 'commerce'
  },
  {
    id: 'invest',
    index: 7,
    momentBadge: 'Moment 5 · Chat: Investment, Q&A & Feedback (3+2 min)',
    rubricFocus: 'Argumentation + Communication',
    tag: 'RESPONSIBLE INVESTMENT · CALL TO ACTION & Q&A',
    title: 'Invest With the Community, Not Over It',
    subtitle:
      'Six high-impact opportunities, transparent risk mitigation, and our interactive Q&A + Glow & Grow discussion.',
    summary:
      'True impact investment in Comuna 13 means partnering directly with local collectives, youth studios, family-owned hospitality, and public mobility upgrades. Explore our six investment pillars and risk-mitigation blueprint below — then join the open gallery conversation to share your questions, perspectives, and one Glow + one Grow.',
    minimalCues: [
      '6 Actionable Pillars: Cultural tourism, local gastronomy, eco-homestays, creative studios, youth tech, public infrastructure',
      'Risk Mitigation: Community revenue-sharing charters, upper-hillside pedestrian loops & anti-displacement trusts',
      'Open Gallery Chat: Answer visitor questions with examples + ask for 1 Glow & 1 Grow!'
    ],
    keyStat: { value: '90k–136k', label: 'Monthly Visitors Ready for Sustainable Value Creation' },
    cameraPos: [0, 22, 38],
    cameraTarget: [0, 7, 0],
    linkedHotspotId: 'metrocable'
  }
];

export const HOTSPOTS = [
  {
    id: 'escalators',
    number: 1,
    name: 'Outdoor Electric Escalators (2011)',
    category: 'Social Urbanism & Mobility',
    coordinates: [0, 7.2, 2.2],
    color: '#ff5a1f',
    year: 'Inaugurated Dec 26, 2011',
    investmentMetric: 'US$6.7 Million Municipal Investment',
    headline: '384 Meters of Public Escalators Replacing a 28-Story Climb',
    description:
      'Engineered by Schindler and inaugurated under Mayor Alonso Salazar, these six covered outdoor escalator sections snake 384 meters up the steep central spine of San Javier. Before 2011, elderly residents, pregnant women, and workers had to climb more than 350 steep, irregular concrete steps.',
    artAndCommunityRole:
      'More than mechanical transit, the orange-roofed escalators became the physical spine of community pride. Every landing platform functions as a public plaza surrounded by murals, dance stages, and family micro-enterprises.',
    investmentAngle:
      'Currently operating far above their original 12,000-resident daily capacity due to 90,000–136,000 monthly tourists. Public-private co-investment is urgently needed for parallel pedestrian relief stairs, shaded rest decks, and dedicated resident priority lanes.',
    stats: [
      { label: 'Total Length', value: '384 meters (1,260 ft) · 6 sections' },
      { label: 'Time Saved', value: '35-min steep hike reduced to 6 minutes' },
      { label: 'Initial Public Cost', value: 'US$6.7M (Verified, Elevator World / URBANET)' }
    ]
  },
  {
    id: 'murals',
    number: 2,
    name: 'Graffitour Murals & Memory Corridor',
    category: 'Street Art & Collective Memory',
    coordinates: [-5.5, 6.2, 3.0],
    color: '#ec4899',
    year: '2011 – Present (Continuously Renewed)',
    investmentMetric: '100+ Large-Scale Community Murals',
    headline: 'An Open-Air Museum Decoding History, Grief, and Resilience',
    description:
      'Painted by local urban artists such as Chota 13, YesGraff, Perrograff, and dynamic youth crews, these murals chronicle the neighborhood’s struggles and rebirth. Iconic works depict mothers searching for the disappeared of 2002, white handkerchiefs waved during Operation Mariscal, and vibrant fusions of Afro-Colombian and Andean heritage.',
    artAndCommunityRole:
      'Art here serves as non-violent resistance and historical documentation. Instead of outsiders writing Comuna 13’s narrative, residents use spray paint to preserve truth, honor victims without sensationalism, and inspire younger generations.',
    investmentAngle:
      'Cultural patronage, mural conservation grants, AR (Augmented Reality) audio-guide licensing that pays royalties directly to the painting artists, and international art residency exchanges.',
    stats: [
      { label: 'Core Themes', value: 'Peace, Maternal Resilience, Biodiversity, Hip-Hop' },
      { label: 'Economic Role', value: 'Primary magnet for 1.1M–1.6M annual visitors (est.)' },
      { label: 'Artist Benefit', value: 'Direct commissions, gallery sales & global licensing' }
    ]
  },
  {
    id: 'kolacho',
    number: 3,
    name: 'Casa Kolacho Hip-Hop Cultural Center',
    category: 'Youth Leadership & Education',
    coordinates: [6.2, 5.8, 2.5],
    color: '#06b6d4',
    year: 'Founded 2013 (Honoring Hector "Kolacho" Pacheco)',
    investmentMetric: 'Thousands of Youth Trained in 4 Hip-Hop Pillars',
    headline: 'Where Beats, Rhymes, and Breakdance Replaced Armed Recruitment',
    description:
      'After hip-hop activist Hector Pacheco (“Kolacho”) was killed in August 2009, fellow artists Jeihhco, Perrograff, and local youth founded Casa Kolacho in 2013. They created the original Graffitour to fund free community schooling in the four elements of hip-hop: rap, DJing, breakdance, and graffiti.',
    artAndCommunityRole:
      'Casa Kolacho proved that culture saves lives. By offering young people a recording studio, mentorship, and dignified jobs as bilingual cultural guides, it dismantled the recruitment pipeline of illegal armed groups.',
    investmentAngle:
      'Direct social-impact sponsorships for music production studios, English-language scholarships for local youth guides, and international cultural exchange tours.',
    stats: [
      { label: 'Pedagogical Model', value: 'Rap, DJing, Breakdance & Graffiti Workshops' },
      { label: 'Founding Milestone', value: 'Created the original community-led Graffitour' },
      { label: 'Social Outcome', value: 'Youth employment & dramatic reduction in recruitment' }
    ]
  },
  {
    id: 'viewpoints',
    number: 4,
    name: 'Upper Hillside Panoramic Viewpoints',
    category: 'Panoramic Public Space & Performance',
    coordinates: [0.5, 11.8, -3.5],
    color: '#f59e0b',
    year: 'Expanded 2012 – 2024',
    investmentMetric: '270° Panoramic View of the Aburra Valley',
    headline: 'Elevated Balconies Hosting Breakdance Battles & Valley Vistas',
    description:
      'At the top of the sixth escalator section, wooden and concrete viewing decks look out across the entire Aburra Valley and the skyscrapers of downtown Medellin. Street dancers and freestyle rappers gather here daily, transforming a former tactical vantage point of urban conflict into a stage of celebration.',
    artAndCommunityRole:
      'The upper viewpoints symbolize the reversal of urban stigma: visitors now climb to the top of the hillside to look at Medellin from Comuna 13’s perspective, listening to resident performers share their personal stories.',
    investmentAngle:
      'High potential for sustainable rooftop cultural cafes, solar-shaded amphitheaters, and decentralized upper-neighborhood trails that spread foot traffic away from congested lower alleys.',
    stats: [
      { label: 'Elevation View', value: '270° vista across San Javier & Aburra Valley' },
      { label: 'Daily Activations', value: 'Live breakdance shows & acoustic sessions' },
      { label: 'Infrastructure Need', value: 'Expanded seating, shade & accessible ramps' }
    ]
  },
  {
    id: 'commerce',
    number: 5,
    name: 'Local Gastronomy & Artisan Micro-Commerce',
    category: 'Grassroots Entrepreneurship',
    coordinates: [-4.2, 8.8, -0.5],
    color: '#10b981',
    year: '2,750+ Formal Businesses as of 2023',
    investmentMetric: '2,750+ Registered Local Enterprises',
    headline: 'From Living-Room Windows to Thriving Family Enterprises',
    description:
      'Along the narrow pathways, families have converted ground-floor living rooms and balconies into vibrant micro-businesses: famous artisanal green mango ice pops with lime and salt, specialty Antioquia coffee roasters, neon-lit screen-printing boutiques, and craft chocolate bars.',
    artAndCommunityRole:
      'Micro-commerce ensures that tourism revenue circulates inside resident households rather than leaking exclusively to external tour agencies.',
    investmentAngle:
      'Micro-credit facilities, digital payment & e-commerce onboarding so artisans can ship merchandise globally, culinary incubator kitchens, and fair-trade certification.',
    stats: [
      { label: 'Formal Businesses', value: '2,750+ registered (Medellin Chamber of Commerce, 2023)' },
      { label: 'Signature Products', value: 'Artisanal mango sorbets, specialty coffee, street apparel' },
      { label: 'Growth Opportunity', value: 'Global e-commerce & supply-chain formalization' }
    ]
  },
  {
    id: 'metrocable',
    number: 6,
    name: 'San Javier Metrocable & Integrated Transit',
    category: 'Sustainable Regional Connectivity',
    coordinates: [8.5, 9.5, -4.0],
    color: '#a855f7',
    year: 'Line J Inaugurated 2008',
    investmentMetric: 'Direct Aerial Link to Medellin Metro System',
    headline: 'Aerial Gondolas Bridging Hillside Neighborhoods with the Valley Floor',
    description:
      'Connecting San Javier Metro Station with high-altitude neighborhoods like Juan XXIII and La Aurora, the Line J Metrocable was a pioneering milestone in Medellin’s social urbanism strategy, slashing commute times and integrating hillside communities into the metropolitan labor market.',
    artAndCommunityRole:
      'Seen gliding above the colorful rooftops, the cable cars reinforce the message that public transit can be clean, low-carbon, and socially inclusive.',
    investmentAngle:
      'Last-mile electric micro-shuttle loops and accessible transit connectors for elderly residents and families with disabilities whose streets are currently congested by tourist crowds.',
    stats: [
      { label: 'Transit Integration', value: 'Seamless transfer between Metro Line B & Line J Gondolas' },
      { label: 'Environmental Impact', value: 'Zero-local-emission electric aerial mobility' },
      { label: 'Next Phase Need', value: 'Accessible last-mile micro-transit for hillside residents' }
    ]
  }
];

export const VERIFIED_METRICS = [
  {
    id: 'escalator-length',
    numericValue: 384,
    suffix: 'm',
    prefix: '',
    label: 'Outdoor Electric Escalators',
    sublabel: '6 sections inaugurated Dec 26, 2011; cut 35-min climb to 6 min',
    status: 'Verified Fact',
    sourceName: 'Schindler Group / Elevator World',
    sourceUrl: 'https://group.schindler.com/en/media/stories/urban-mobility-transforms-medellin-neighborhood.html'
  },
  {
    id: 'local-businesses',
    numericValue: 2750,
    suffix: '+',
    prefix: '',
    label: 'Registered Local Businesses',
    sublabel: 'Formally registered enterprises in Comuna 13 as of 2023',
    status: 'Verified Fact',
    sourceName: 'Medellin Chamber of Commerce / Lazo Magazine',
    sourceUrl: 'https://lazomagazine.com/why-locals-are-leaving-medellins-most-popular-tourist-hub/'
  },
  {
    id: 'monthly-visitors',
    numericValue: 136,
    suffix: 'k',
    prefix: '90k–',
    label: 'Monthly Visitors (Peak Range)',
    sublabel: 'Approx. 1.1M to 1.6M annual visitors to the cultural corridor',
    status: 'Estimated Range',
    sourceName: 'Lazo Magazine / CAS Trips Field Reports (2024–2026)',
    sourceUrl: 'https://www.castrips.org/comuna-13-in-medellin/'
  },
  {
    id: 'escalator-cost',
    numericValue: 6.7,
    suffix: 'M',
    prefix: '$',
    decimals: 1,
    label: 'Initial Escalator Investment (USD)',
    sublabel: 'Directly serving 12,000+ immediate hillside residents',
    status: 'Verified Fact',
    sourceName: 'Elevator World / URBANET',
    sourceUrl: 'https://elevatorworld.com/article/medellins-outdoor-escalator/'
  },
  {
    id: 'population',
    numericValue: 160,
    suffix: 'k',
    prefix: '~',
    label: 'Comuna 13 Total Population',
    sublabel: 'Residents across San Javier’s hillside neighborhoods',
    status: 'Verified Estimate',
    sourceName: 'DANE / Municipal Census Overview',
    sourceUrl: 'https://en.wikipedia.org/wiki/Comuna_13,_Medell%C3%ADn'
  },
  {
    id: 'city-tourism',
    numericValue: 1.55,
    suffix: 'B',
    prefix: '$',
    decimals: 2,
    label: 'Medellin Annual Tourism Impact (USD)',
    sublabel: '1.2M foreign tourists in 2025 growing at ~10% YoY',
    status: 'Verified Fact',
    sourceName: 'Medellin Dept. of Tourism & Entertainment / EFE (2025)',
    sourceUrl: 'https://efecomunica.efe.com/en/medellin-welcomed-1-2-million-foreign-tourists-in-2025-highlights-economic-impact/'
  }
];

export const GROWTH_TRAJECTORY = [
  {
    year: '2011',
    milestone: 'Escalators Inaugurated',
    monthlyVisitorsK: 2,
    formalBusinesses: 320,
    note: 'Dec 2011: 384m escalators open for 12,000 residents'
  },
  {
    year: '2014',
    milestone: 'Casa Kolacho & First Graffitours',
    monthlyVisitorsK: 12,
    formalBusinesses: 580,
    note: 'Hip-hop youth collectives formalize guided mural tours'
  },
  {
    year: '2018',
    milestone: 'International Cultural Recognition',
    monthlyVisitorsK: 45,
    formalBusinesses: 1250,
    note: 'Rapid growth of family cafes, galleries, and artisan stalls'
  },
  {
    year: '2023',
    milestone: 'Post-Pandemic Boom',
    monthlyVisitorsK: 110,
    formalBusinesses: 2750,
    note: '2,750+ formal businesses registered (Chamber of Commerce)'
  },
  {
    year: '2026',
    milestone: 'Current Capacity Inflection Point',
    monthlyVisitorsK: 136,
    formalBusinesses: 3100,
    note: '90k–136k monthly visitors; urgent need for crowd management & infrastructure'
  },
  {
    year: '2035 (Projected)',
    milestone: 'With Responsible Investment',
    monthlyVisitorsK: 150,
    formalBusinesses: 4500,
    note: 'Decentralized trails, protected resident housing & global creative exports'
  }
];

export const DISTRICT_COMPARISON = [
  {
    district: 'Comuna 13 (San Javier)',
    character: 'Community-Led Open-Air Art & Social Urbanism Corridor',
    socialImpactROI: 'Very High — Direct household income for 2,750+ local micro-businesses & youth collectives',
    culturalAuthenticity: 'High — Living historical memory, hip-hop pedagogy & resident-painted murals',
    currentChallenge: 'Overcrowded narrow stairs (90k–136k visitors/mo), blocked resident taxi access & rising rents',
    fundingVerdict: 'TOP PRIORITY FOR PUBLIC & IMPACT FUNDING'
  },
  {
    district: 'El Poblado (Commune 14)',
    character: 'Upscale Commercial, Hotel & Nightlife District (30 min away via Metro)',
    socialImpactROI: 'Low-Moderate — Dominated by large hospitality chains and foreign capital',
    culturalAuthenticity: 'Low — Commercialized dining and boutique retail with minimal historical memory focus',
    currentChallenge: 'High real-estate saturation, gentrification, and commercial homogenization',
    fundingVerdict: 'Self-financed by private commercial capital'
  },
  {
    district: 'Plaza Botero & Downtown (La Candelaria)',
    character: 'Traditional Monumental Museum & Civic Center',
    socialImpactROI: 'Moderate — Institutional museum funding (Museum of Antioquia) + informal street trade',
    culturalAuthenticity: 'High — Iconic bronze sculptures and heritage architecture, but institutional rather than grassroots',
    currentChallenge: 'Higher petty-theft rate (12 per 100k visitors vs. 0.5 in Comuna 13’s guided corridor)',
    fundingVerdict: 'Supported by municipal heritage budgets'
  }
];

export const SCENARIO_2035 = {
  responsible: {
    title: 'Scenario A: Responsible Community-Backed Investment (Recommended)',
    conditionalStatement:
      'If public agencies and impact investors fund decentralized infrastructure and local cultural collectives today, by 2035 Comuna 13 will have become Latin America’s benchmark for inclusive urban regeneration.',
    outcomes: [
      'By 2035, secondary pedestrian loops and accessible micro-transit will have eliminated bottlenecks on the main escalators, restoring emergency and taxi access for elderly and disabled residents.',
      'Community Land Trusts and cooperative commercial leases will have protected local families from displacement while keeping over 75% of tourism revenue inside San Javier.',
      'Youth-led creative studios (like Casa Kolacho) will have expanded from local walking tours into global digital music, animation, and ethical streetwear exports.',
      'Continuous safety monitoring and social programs will have safeguarded neighborhood peace without militarization.'
    ]
  },
  unmanaged: {
    title: 'Scenario B: Unmanaged Mass Tourism & Under-Investment (Risk Path)',
    conditionalStatement:
      'Conversely, if authorities neglect public infrastructure and allow unregulated external commercialization, by 2035 the neighborhood will have lost the authentic community spirit that made it resilient.',
    outcomes: [
      'By 2035, unchecked rent inflation will have displaced long-term residents and local artists, turning a living neighborhood into a superficial theme park.',
      'Overwhelmed escalators and clogged alleys will have degraded daily quality of life, prompting more responsible travel organizations to boycott the area.',
      'Outside tour operators and souvenir chains will have captured the majority of visitor spending, leaving residents with noise and waste.'
    ]
  }
};

export const INVESTMENT_OPPORTUNITIES = [
  {
    id: 'tourism',
    title: '1. Certified Community-Led Cultural Tourism',
    category: 'Sustainable Experiences',
    ticketRange: '$25k – $250k USD',
    impactMetric: '80%+ revenue retained by local guides & artists',
    description:
      'Co-invest with established local collectives (such as Casa Kolacho) to develop small-group,pre-booked timed audio-visual tours, expanded upper-hillside memory routes, and multilingual guide certification.',
    whyItWorks:
      'Moves away from chaotic 50-person megaphones toward higher-value, lower-crowding cultural immersion.'
  },
  {
    id: 'gastronomy',
    title: '2. Culinary Incubators & Specialty Coffee Roasteries',
    category: 'Gastronomy & Agribusiness',
    ticketRange: '$15k – $150k USD',
    impactMetric: '3x margin increase for family food stalls',
    description:
      'Upgrade family-run street food stalls (famous for green mango sorbets, empanadas, and traditional sweets) and Antioquia specialty coffee bars with commercial kitchens, rooftop dining terraces, and export packaging.',
    whyItWorks:
      'Food and beverage is the #1 spontaneous purchase by the 90,000–136,000 monthly visitors.'
  },
  {
    id: 'lodging',
    title: '3. Community Homestays & Boutique Eco-Lodging',
    category: 'Responsible Hospitality',
    ticketRange: '$50k – $400k USD',
    impactMetric: 'Increases average visitor stay from 3 hours to 2+ nights',
    description:
      'Partner with homeowner families to renovate upper-floor apartments into certified cultural homestays and artist residency lofts with acoustic insulation and solar water heating.',
    whyItWorks:
      'Allows resident homeowners to build generational equity without selling their houses to external speculators.'
  },
  {
    id: 'art-culture',
    title: '4. Art Galleries, Music Studios & IP Licensing',
    category: 'Creative Economy',
    ticketRange: '$20k – $200k USD',
    impactMetric: 'Decouples artist income from physical crowd volume',
    description:
      'Fund professional recording studios, screen-printing workshops, fine-art print shipping hubs, and global brand licensing for Comuna 13 muralists and hip-hop producers.',
    whyItWorks:
      'Enables artists to monetize their intellectual property globally through e-commerce, documentaries, and design commissions.'
  },
  {
    id: 'entrepreneurship',
    title: '5. Youth Tech & Creative Micro-Enterprise Labs',
    category: 'Local Entrepreneurship',
    ticketRange: '$30k – $300k USD',
    impactMetric: 'Trains 500+ youths annually in digital & creative skills',
    description:
      'Establish neighborhood co-working and digital fabrication labs where young residents learn 3D design, web development, digital marketing, and financial management for the 2,750+ local businesses.',
    whyItWorks:
      'Builds long-term career pathways beyond seasonal tourism jobs.'
  },
  {
    id: 'infrastructure',
    title: '6. Public Infrastructure & Accessible Mobility Grants',
    category: 'Public-Private Social Impact',
    ticketRange: '$100k – $2M+ USD (Municipal / ESG Grants)',
    impactMetric: 'Restores emergency/disability access for 12,000+ residents',
    description:
      'Co-fund secondary hillside walkways, waste-management stations, acoustic buffers, and dedicated mobility access lanes so families with disabilities and emergency vehicles are never blocked by tour groups.',
    whyItWorks:
      'Directly resolves the #1 friction point reported by residents and sustainable travel organizations.'
  }
];

export const RISKS_AND_MITIGATION = [
  {
    risk: 'Overcrowding & Strained Escalator / Emergency Access',
    severity: 'High (90k–136k visitors/month on narrow residential stairs)',
    evidence:
      'Escalators built for 12,000 residents now carry massive tourist crowds; narrow streets get clogged, preventing taxis or ambulances from reaching residents with disabilities (CAS Trips, 2024).',
    mitigation:
      'Implement timed digital visitor slots, fund parallel resident-only mobility lanes, and expand tour routes into upper and adjacent cultural corridors.'
  },
  {
    risk: 'Gentrification & Displacement of Long-Term Residents',
    severity: 'High (Rising commercial rents along the main corridor)',
    evidence:
      'As commercial demand surges (2,750+ businesses registered by 2023), property inflation pressures low-income renters and shifts houses from residential to purely commercial use (Lazo Magazine, 2024).',
    mitigation:
      'Structure investments through Community Land Trusts, joint-venture equity with resident homeowners, and municipal property-tax protections for long-term families.'
  },
  {
    risk: 'Cultural Commodification & External Value Extraction',
    severity: 'Medium-High (Outside agencies capturing tour margins)',
    evidence:
      'External operators sometimes bring large groups without hiring local guides or contextualizing the painful reality of the 2002 conflict, reducing memory to a photo backdrop (NYU CLACS / Brown Political Review).',
    mitigation:
      'Enforce a “Community Benefit Charter” requiring certified local guides from Comuna 13 and directing a 10% cultural preservation fee into neighborhood youth schools.'
  },
  {
    risk: 'Security & Extortion Pressures on Small Vendors',
    severity: 'Medium (Requires continuous institutional monitoring)',
    evidence:
      'While the tourist corridor has very low pickpocketing (0.5 per 100k visitors), rapid cash growth requires continuous public security monitoring and judicial protection against informal extortion (MDPI / WOLA).',
    mitigation:
      'Adopt cashless digital payment ecosystems, formal Chamber of Commerce banking, and transparent municipal safety oversight paired with youth employment.'
  }
];

export const QA_PREP_CARDS = [
  {
    question: '1. What made you choose Comuna 13 for this tour and investment analysis?',
    rubricTarget: 'Uses narrative/perfect forms, attitude adverbs (undoubtedly, remarkably) & art vocabulary',
    modelAnswer:
      'I chose Comuna 13 because it is arguably the most powerful example of grassroots urban resilience in Latin America. Rather than erasing its painful history after the 2002 operations, the community has used muralism, hip-hop, and storytelling to reclaim its identity. However, I also wanted to look beyond the postcard image and examine why this neighborhood still urgently needs public infrastructure funding and ethical investment.'
  },
  {
    question: '2. How does Comuna 13 compare with other areas in Medellin like El Poblado or Plaza Botero?',
    rubricTarget: 'Uses comparative structures (far more impactful than, whereas, in contrast to) & quantifiers',
    modelAnswer:
      'Unlike El Poblado, which is dominated by high-end commercial hotels and corporate capital, Comuna 13’s economy is driven by more than 2,750 grass-roots family businesses and youth collectives. And compared with Plaza Botero downtown, Comuna 13 offers a much more participatory, community-guided experience with significantly lower petty crime along the tour corridor — meaning every dollar invested here generates a far greater social impact.'
  },
  {
    question: '3. What will have changed in Comuna 13 by 2035 if it receives responsible funding?',
    rubricTarget: 'Uses future perfect (will have established, will have solved) & conditional consequences',
    modelAnswer:
      'If the government and ethical investors fund community infrastructure today, by 2035 Comuna 13 will have decentralized its tourist routes across the hillside, solving the overcrowding that currently blocks resident access. Furthermore, local youth hubs like Casa Kolacho will have evolved into global creative studios exporting music, digital art, and sustainable cultural models without displacing local families.'
  },
  {
    question: '4. Why does Comuna 13 deserve more public and impact support than a traditional museum?',
    rubricTarget: 'Weighs pros, cons & consequences; supports recommendation with verifiable evidence',
    modelAnswer:
      'A traditional museum preserves art behind glass, whereas Comuna 13 is a living neighborhood of 160,000 people where art actively prevents youth violence and supports thousands of families. Because 90,000 to 136,000 visitors arrive every month, failing to invest in public walkways, waste management, and safety monitoring would put unbearable pressure on residents. Supporting Comuna 13 protects both a cultural masterpiece and a living community.'
  }
];

export const SOURCES = [
  {
    title: 'Schindler Group — Urban Mobility Transforms Medellin Neighborhood (384m Outdoor Escalators)',
    url: 'https://group.schindler.com/en/media/stories/urban-mobility-transforms-medellin-neighborhood.html',
    category: 'Infrastructure & Social Urbanism'
  },
  {
    title: 'Elevator World — Medellin’s Outdoor Escalator (Inaugurated Dec 26, 2011 · US$6.7M · 28 Stories)',
    url: 'https://elevatorworld.com/article/medellins-outdoor-escalator/',
    category: 'Infrastructure & Cost Data'
  },
  {
    title: 'URBANET — Escalating to Peace: How a Simple Investment Helped Change Comuna 13',
    url: 'https://www.urbanet.info/colombia-medellin-social-infrastructure/',
    category: 'Urban Planning & Social Impact'
  },
  {
    title: 'Truth Commission of Colombia — The Violent Machinery of Operation Orion (October 16–17, 2002)',
    url: 'https://www.comisiondelaverdad.co/el-violento-engranaje-de-la-operacion-orion',
    category: 'Historical Memory & Human Rights'
  },
  {
    title: 'WOLA (Adam Isacson) — Medellin’s Comuna 13, 22 Years After Operation Orion',
    url: 'https://adamisacson.com/medellins-comuna-13-22-years-after-operacion-orion/',
    category: 'Historical Context & Security Analysis'
  },
  {
    title: 'InSight Crime — International Court Condemns Colombia for 2002 Military Operation in Comuna 13',
    url: 'https://insightcrime.org/news/brief/intl-court-condemns-colombia-bloody-2002-military-operation/',
    category: 'Human Rights & Legal Rulings'
  },
  {
    title: 'Lazo Magazine — Why Locals Are Leaving Medellin’s Most Popular Tourist Hub (2,750+ Businesses & 136k Monthly Visitors)',
    url: 'https://lazomagazine.com/why-locals-are-leaving-medellins-most-popular-tourist-hub/',
    category: 'Economic & Overcrowding Data'
  },
  {
    title: 'CAS Trips — Why We No Longer Visit Comuna 13 in Medellin (90,000 Monthly Visitors & Infrastructure Strain)',
    url: 'https://www.castrips.org/comuna-13-in-medellin/',
    category: 'Sustainable Tourism & Risk Analysis'
  },
  {
    title: 'Brown Political Review — Comuna 13: A Model for Balancing Tourism and Community Preservation',
    url: 'https://brownpoliticalreview.org/comuna-13-a-model-for-balancing-tourism-and-community-preservation/',
    category: 'Economic Policy & Community Preservation'
  },
  {
    title: 'NYU CLACS — Comuna 13: Exploring Empowerment Through Tourism',
    url: 'https://as.nyu.edu/research-centers/clacs/research/field-notes/comuna-13--exploring-empowerment-through-tourism.html',
    category: 'Academic Field Research'
  },
  {
    title: 'EFE Comunica — Medellin Welcomed 1.2 Million Foreign Tourists in 2025 ($1.552B Economic Impact)',
    url: 'https://efecomunica.efe.com/en/medellin-welcomed-1-2-million-foreign-tourists-in-2025-highlights-economic-impact/',
    category: 'City-Wide Tourism Macroeconomics'
  },
  {
    title: 'Wikipedia — Comuna 13, Medellin (San Javier Population & Geographic Overview)',
    url: 'https://en.wikipedia.org/wiki/Comuna_13,_Medell%C3%ADn',
    category: 'Demographics & Geography'
  }
];
