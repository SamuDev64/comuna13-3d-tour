export const TOUR_STOPS = [
  {
    id: 'intro',
    index: 0,
    roomCode: 'ENTRANCE · ABURRA VALLEY',
    momentBadge: 'Moment 1 · Welcome (1 min)',
    rubricFocus: 'Communication',
    title: 'Comuna 13: Open-Air Virtual Museum',
    subtitle: 'San Javier Hillside, Medellin · 160,000 Residents · Cultural & Investment Tour',
    heroImage: './images/escalators-mural.jpg',
    visualTags: ['~160,000 Residents', 'San Javier Hillside', 'Open-Air Art Museum'],
    audioNarration:
      'Welcome to the Comuna 13 Virtual Museum. Located on the western slopes of Medellin and home to 160,000 residents, this hillside transformed from urban conflict into Latin America’s largest open-air gallery of street art, hip-hop, and social urbanism.',
    minimalCues: [
      'Greet 3 visitors · Introduce the 3D virtual museum',
      'Target: Cultural investors & public decision-makers',
      'Thesis: Art transformed C13 — ethical funding protects it'
    ],
    keyStat: { value: '~160,000', label: 'Residents in San Javier' },
    cameraPos: [0, 24, 44],
    cameraTarget: [0, 6, 0],
    minimapPos: { x: 50, y: 86 },
    linkedHotspotId: 'escalators',
    autoDrawer: null
  },
  {
    id: 'history',
    index: 1,
    roomCode: 'ROOM 01 · HISTORICAL MEMORY',
    momentBadge: 'Moment 2 · Guide: History (1.5 min)',
    rubricFocus: 'Communication + Language',
    title: 'From 2002 Conflict to White-Sheet Peace',
    subtitle: 'Honoring Operations Mariscal & Orion (2002) with Dignity and Zero Sensationalism',
    heroImage: './images/history-memory.jpg',
    visualTags: ['May & Oct 2002 Operations', 'White-Sheet Peace March', '2017 Court Ruling'],
    audioNarration:
      'Room 1 examines historical memory. In May and October 2002, Operations Mariscal and Orion brought intense urban warfare to Comuna 13. Residents waved white sheets from rooftops to demand peace, refusing to remain victims and reclaiming their neighborhood through truth and art.',
    minimalCues: [
      '1990s–2002: Rural displacement & urban armed conflict',
      '2002 Operations Mariscal & Orion → White sheets for peace',
      '2017 Inter-American Court ruling & community resilience'
    ],
    keyStat: { value: 'Oct 2002', label: 'Operation Orion & Rooftop Peace Protest' },
    cameraPos: [-14, 11, 21],
    cameraTarget: [-4, 6, 1],
    minimapPos: { x: 28, y: 72 },
    linkedHotspotId: 'murals',
    autoDrawer: null
  },
  {
    id: 'escalators',
    index: 2,
    roomCode: 'ROOM 02 · SOCIAL URBANISM',
    momentBadge: 'Moment 2 · Guide: Infrastructure (1.5 min)',
    rubricFocus: 'Communication + Language',
    title: 'The 384-Meter Outdoor Escalators (2011)',
    subtitle: 'Six Covered Orange Sections Replacing a 28-Story Steep Climb',
    heroImage: './images/escalators-mural.jpg',
    visualTags: ['384 Meters Long', '35 Min → 6 Min Ride', 'US$6.7M Public Cost'],
    audioNarration:
      'Room 2 showcases the outdoor electric escalators inaugurated on December 26, 2011. Stretching 384 meters across six sections at a cost of 6.7 million dollars, they reduced a grueling 35-minute climb down to just 6 minutes for over 12,000 hillside residents.',
    minimalCues: [
      'Inaugurated Dec 26, 2011: 6 sections (28 stories high)',
      'Slashed a 35-minute steep hike down to 6 minutes',
      'US$6.7M public investment connected 12,000+ residents'
    ],
    keyStat: { value: '384 m', label: '6 Escalator Sections (35 min → 6 min)' },
    cameraPos: [5, 10, 17],
    cameraTarget: [0, 7, 1],
    minimapPos: { x: 52, y: 60 },
    linkedHotspotId: 'escalators',
    autoDrawer: null
  },
  {
    id: 'graffitour',
    index: 3,
    roomCode: 'ROOM 03 · OPEN-AIR GALLERY',
    momentBadge: 'Moment 2 · Guide: Street Art (1 min)',
    rubricFocus: 'Communication + Language',
    title: 'Graffitour: Walls That Preserve Memory',
    subtitle: 'Over 100 Community Murals Painted by Local Urban Artists',
    heroImage: './images/mural-alley.jpg',
    visualTags: ['100+ Curated Murals', 'Mothers of Truth', 'Local Storytellers'],
    audioNarration:
      'Room 3 enters the Graffitour corridor. Here, murals painted by local artists like Chota 13, YesGraff, and Perrograff preserve collective memory, honoring Afro-Colombian and Indigenous mothers, white handkerchiefs of peace, and Andean biodiversity.',
    minimalCues: [
      'Visual symbolism: Mothers of 2002, white cloths & Andean birds',
      'Residents decide how their own history is represented',
      'Local guides decode the story behind every brushstroke'
    ],
    keyStat: { value: '100+ Murals', label: 'Living Visual Archive Along the Climb' },
    cameraPos: [-9, 8.5, 13],
    cameraTarget: [-4, 6, 2],
    minimapPos: { x: 34, y: 52 },
    linkedHotspotId: 'murals',
    autoDrawer: null
  },
  {
    id: 'hiphop',
    index: 4,
    roomCode: 'ROOM 04 · HIP-HOP PEDAGOGY',
    momentBadge: 'Moment 2 · Guide: Hip-Hop (1 min)',
    rubricFocus: 'Communication + Language',
    title: 'Casa Kolacho & The 4 Hip-Hop Elements',
    subtitle: 'Rap, DJing, Breakdance & Graffiti as Youth Peacebuilding',
    heroImage: './images/kolacho-hiphop.jpg',
    visualTags: ['Founded 2013', 'Rap · DJ · Dance · Art', 'Youth Cultural School'],
    audioNarration:
      'Room 4 highlights Casa Kolacho, founded in 2013 in memory of hip-hop leader Hector Pacheco, known as Kolacho. Through free workshops in rap, DJing, breakdance, and graffiti, Casa Kolacho empowers thousands of youths and pioneered the original Graffitour.',
    minimalCues: [
      'Founded in 2013 honoring hip-hop leader "Kolacho"',
      'Free youth workshops in rap, DJing, dance & graffiti',
      'Created the original Graffitour & dignified youth jobs'
    ],
    keyStat: { value: '4 Pillars', label: 'Rap, DJing, Breakdance & Graffiti School' },
    cameraPos: [12, 9, 14],
    cameraTarget: [5.5, 6, 1.5],
    minimapPos: { x: 70, y: 54 },
    linkedHotspotId: 'kolacho',
    autoDrawer: null
  },
  {
    id: 'share',
    index: 5,
    roomCode: 'ROOM 05 · UPPER VIEWPOINTS',
    momentBadge: 'Moment 3 · Share: Personal Visit (1 min)',
    rubricFocus: 'Communication + Language',
    title: 'Panoramic Balconies & Barrio Atmosphere',
    subtitle: 'Freestyle Beats, Artisanal Mango Sorbets & Warm Hillside Lights',
    heroImage: './images/viewpoint-plaza.jpg',
    visualTags: ['270° Valley Vista', 'Live Breakdance Shows', 'Crowded Narrow Stairs'],
    audioNarration:
      'Room 5 reaches the upper panoramic viewpoints at the top of the sixth escalator. Standing here at dusk as warm lights glow across the brick houses, you feel immense community pride, while also observing how narrow stairs struggle to handle mass tourist crowds.',
    minimalCues: [
      'Sensory energy: Live freestyle beats, coffee & valley views',
      'Emotional shift: From reading conflict to witnessing pride',
      'Crowded stairs firsthand show urgent infrastructure need'
    ],
    keyStat: { value: '4.7 / 5.0', label: 'Visitor Experience Rating (40k+ Reviews)' },
    cameraPos: [0, 15, 11],
    cameraTarget: [0, 11, -5],
    minimapPos: { x: 50, y: 28 },
    linkedHotspotId: 'viewpoints',
    autoDrawer: null
  },
  {
    id: 'recommend',
    index: 6,
    roomCode: 'ROOM 06 · DATA & 2035 FORECAST',
    momentBadge: 'Moment 4 · Recommend & Compare (2 min)',
    rubricFocus: 'Argumentation + Language',
    title: 'Data, District Comparison & 2035 Vision',
    subtitle: '2,750+ Local Businesses · 90k–136k Monthly Visitors · Future Perfect Forecast',
    heroImage: './images/metrocable-sanjavier.jpg',
    visualTags: ['2,750+ Formal Shops', '90k–136k Visitors/Mo', '2035 Future Simulator'],
    audioNarration:
      'Room 6 presents our comparative data and 2035 projection. With over 2,750 formal local businesses and up to 136,000 monthly visitors, Comuna 13 delivers far greater grassroots impact than El Poblado. If funded responsibly today, by 2035 it will have decentralized visitor flows and protected local ownership.',
    minimalCues: [
      'Compare: Higher grassroots ROI than El Poblado or Botero',
      'Risk: 90k–136k monthly visitors strain escalators & access',
      '2035 Forecast: "If funded now, by 2035 it will have..."'
    ],
    keyStat: { value: '2,750+', label: 'Registered Local Businesses (2023)' },
    cameraPos: [-11, 17, 26],
    cameraTarget: [0, 8, 0],
    minimapPos: { x: 38, y: 40 },
    linkedHotspotId: 'commerce',
    autoDrawer: 'data'
  },
  {
    id: 'invest',
    index: 7,
    roomCode: 'ROOM 07 · INVESTMENT & CHAT',
    momentBadge: 'Moment 5 · Chat, CTA & Q&A (3+2 min)',
    rubricFocus: 'Argumentation + Communication',
    title: 'Responsible Investment & Gallery Chat',
    subtitle: '6 Community Capital Pillars · Risk Mitigation · Open Q&A + Glow & Grow',
    heroImage: './images/viewpoint-plaza.jpg',
    visualTags: ['6 Investment Pillars', 'Anti-Displacement Trust', '1 Glow + 1 Grow Chat'],
    audioNarration:
      'Room 7 concludes our tour with six responsible investment opportunities, risk mitigation strategies against overcrowding and gentrification, and our open gallery conversation. Please share your questions and one Glow and one Grow.',
    minimalCues: [
      '6 Pillars: Tourism, Gastronomy, Homestays, Art IP, Tech, Mobility',
      'Mitigation: Timed visitor flows & resident co-ownership',
      'Open Gallery Chat: Visitor questions + 1 Glow & 1 Grow!'
    ],
    keyStat: { value: '90k–136k', label: 'Monthly Visitors Ready for Ethical Value' },
    cameraPos: [0, 21, 34],
    cameraTarget: [0, 7, 0],
    minimapPos: { x: 74, y: 34 },
    linkedHotspotId: 'metrocable',
    autoDrawer: 'invest'
  }
];

export const HOTSPOTS = [
  {
    id: 'escalators',
    number: 1,
    name: 'Outdoor Electric Escalators (2011)',
    category: 'Social Urbanism & Mobility',
    artifactType: 'escalator',
    artifactTitle: '3D Scale Model: Orange Roof Escalator Module (Schindler, 384m)',
    coordinates: [0, 7.2, 2.2],
    color: '#ff5a1f',
    year: 'Inaugurated Dec 26, 2011',
    investmentMetric: 'US$6.7M Public Investment',
    headline: '384 Meters of Outdoor Escalators Replacing a 28-Story Climb',
    heroImage: './images/escalators-mural.jpg',
    images: [
      {
        src: './images/escalators-mural.jpg',
        caption: 'Real Photograph (User Archive): Visitors riding the Comuna 13 outdoor escalators beside giant murals',
        credit: 'Real Site Photograph · Comuna 13 Medellin'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Medellin_Comuna_13.jpg',
        fallbackSrc: './images/metrocable-sanjavier.jpg',
        caption: 'Wikimedia Commons Archival Photo: Steep hillside density of San Javier (Comuna 13)',
        credit: 'Wikimedia Commons · CC BY-SA'
      },
      {
        src: './images/metrocable-sanjavier.jpg',
        caption: 'Architectural Visualization: Orange weatherproof escalator roofs along the hillside spine',
        credit: '3D Architectural Visualization'
      }
    ],
    youtubeId: 'SNZIobJtcik',
    youtubeTitle: 'Comuna 13 Outdoor Electric Escalators — Real 4K Walkthrough',
    extraVideos: [
      { id: 'SNZIobJtcik', label: 'Escalators 4K Climb' },
      { id: 'sbpNIyM8JeI', label: 'Full 2026 Corridor Tour' }
    ],
    lat: 6.2453,
    lng: -75.6197,
    streetViewQuery: 'Escalator+Comuna+13,Carrera+109+36-63,Medellin,Colombia',
    audioText:
      'Exhibit 1: The Outdoor Electric Escalators. Inaugurated in December 2011 for 6.7 million dollars, these six covered escalator sections climb 384 meters up the steep hillside, reducing a 35-minute climb to 6 minutes for 12,000 residents.',
    visualChips: [
      '6 Covered Outdoor Sections',
      '384 Meters Total Length',
      '35 Min Hike → 6 Min Ride',
      'Serves 12,000+ Residents'
    ],
    shortPoints: [
      'Replaced 350+ steep concrete steps equivalent to a 28-story building.',
      'Every landing platform acts as a neighborhood plaza surrounded by murals and shops.',
      'Investment Need: Parallel pedestrian relief stairs & resident priority lanes.'
    ],
    stats: [
      { label: 'Total Length', value: '384 m (6 sections)' },
      { label: 'Time Saved', value: '35 min → 6 min' },
      { label: 'Public Cost', value: 'US$6.7 Million' }
    ]
  },
  {
    id: 'murals',
    number: 2,
    name: 'Graffitour Murals & Memory Corridor',
    category: 'Street Art & Collective Memory',
    artifactType: 'mural',
    artifactTitle: '3D Exhibit: Layered Street-Art Memory Wall & White Peace Cloth',
    coordinates: [-5.5, 6.2, 3.0],
    color: '#ec4899',
    year: '2011 – Present',
    investmentMetric: '100+ Large-Scale Murals',
    headline: 'An Open-Air Gallery Preserving Truth, Grief, and Rebirth',
    heroImage: './images/mural-alley.jpg',
    images: [
      {
        src: './images/mural-alley.jpg',
        caption: 'Real Photograph (User Archive): Iconic Afro-Colombian portrait mural & butterflies in Comuna 13',
        credit: 'Real Site Photograph · Comuna 13 Medellin'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Grafitti_-_Plaza_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg/1280px-Grafitti_-_Plaza_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg',
        fallbackSrc: './images/history-memory.jpg',
        caption: 'Wikimedia Commons (2024): Street art murals surrounding the main plaza of Comuna 13',
        credit: 'Wikimedia Commons · Jbribeiro1 (CC BY-SA 4.0)'
      },
      {
        src: './images/history-memory.jpg',
        caption: 'Twilight Visualization: White peace dove mural honoring the 2002 white-sheet marches',
        credit: 'Documentary Visualization'
      }
    ],
    youtubeId: 'x9LZa9HvzGI',
    youtubeTitle: 'Graffitour Casa Kolacho — Official Comuna 13 Documentary Clip',
    extraVideos: [
      { id: 'x9LZa9HvzGI', label: 'Graffitour Official Clip' },
      { id: 'mJswEKDqco4', label: 'Murals & Memory Story' }
    ],
    lat: 6.2458,
    lng: -75.6192,
    streetViewQuery: 'Graffitour+Comuna+13,Medellin,Colombia',
    audioText:
      'Exhibit 2: The Graffitour Murals. Painted by local artists, these walls preserve historical memory after the 2002 military operations, honoring mothers searching for the disappeared and celebrating peaceful resistance.',
    visualChips: [
      '100+ Curated Murals',
      'Honors Mothers of 2002',
      'White Cloth Peace Symbol',
      'Painted by Local Crews'
    ],
    shortPoints: [
      'Painted by local crews (Chota 13, YesGraff, Perrograff) as living historical documentation.',
      'Local guides contextualize every symbol so visitors understand the community’s resilience.',
      'Investment Need: Mural conservation grants & direct artist royalty licensing.'
    ],
    stats: [
      { label: 'Visual Themes', value: 'Peace, Memory & Renewal' },
      { label: 'Annual Visitors', value: '1.1M – 1.6M (Est.)' },
      { label: 'Artist Benefit', value: 'Direct Commissions & IP' }
    ]
  },
  {
    id: 'kolacho',
    number: 3,
    name: 'Casa Kolacho Hip-Hop Center',
    category: 'Youth Leadership & Education',
    artifactType: 'hiphop',
    artifactTitle: '3D Exhibit: Hip-Hop Turntable, Vinyl & Stage Microphone',
    coordinates: [6.2, 5.8, 2.5],
    color: '#06b6d4',
    year: 'Founded 2013',
    investmentMetric: '4 Elements of Hip-Hop School',
    headline: 'Where Beats, Rhymes, and Breakdance Replaced Armed Recruitment',
    heroImage: './images/kolacho-hiphop.jpg',
    images: [
      {
        src: './images/kolacho-hiphop.jpg',
        caption: 'Outdoor breakdance and hip-hop performance stage in Comuna 13',
        credit: 'Documentary Visualization · Casa Kolacho Stage'
      },
      {
        src: './images/mural-alley.jpg',
        caption: 'Real Photograph (User Archive): Cultural corridor where Casa Kolacho leads guided tours',
        credit: 'Real Site Photograph · Comuna 13 Medellin'
      },
      {
        src: './images/viewpoint-plaza.jpg',
        caption: 'Real Photograph (User Archive): Live street musicians and dancers performing on the hillside',
        credit: 'Real Site Photograph · Comuna 13 Medellin'
      }
    ],
    youtubeId: 'mLO01KvzjA0',
    youtubeTitle: 'Casa Kolacho: Hip-Hop as a Lifestyle & Peace Movement in Comuna 13',
    extraVideos: [
      { id: 'mLO01KvzjA0', label: 'Casa Kolacho Hip-Hop' },
      { id: 'x9LZa9HvzGI', label: 'Casa Kolacho Graffitour' }
    ],
    lat: 6.2491,
    lng: -75.6152,
    streetViewQuery: 'Casa+Kolacho,San+Javier,Medellin,Colombia',
    audioText:
      'Exhibit 3: Casa Kolacho. Founded in 2013 in tribute to murdered hip-hop activist Hector Pacheco, Casa Kolacho uses rap, DJing, breakdance, and graffiti to educate youth and prevent armed recruitment.',
    visualChips: [
      'Honors Hector "Kolacho"',
      'Rap · DJ · Dance · Graffiti',
      'Free Youth Art School',
      'Pioneered the Graffitour'
    ],
    shortPoints: [
      'Founded in 2013 by Jeihhco, Perrograff, and youth leaders in memory of Hector "Kolacho" Pacheco.',
      'Provides free artistic education and dignified income for young guides and performers.',
      'Investment Need: Recording studio sponsorships & bilingual youth scholarships.'
    ],
    stats: [
      { label: 'Core Pillars', value: 'Rap, DJing, Dance, Graffiti' },
      { label: 'Milestone', value: 'Created Original Graffitour' },
      { label: 'Social Impact', value: 'Youth Jobs & Peacebuilding' }
    ]
  },
  {
    id: 'viewpoints',
    number: 4,
    name: 'Upper Hillside Panoramic Viewpoints',
    category: 'Public Space & Street Performance',
    artifactType: 'viewpoint',
    artifactTitle: '3D Exhibit: Panoramic Balcony & Valley Observation Deck',
    coordinates: [0.5, 11.8, -3.5],
    color: '#f59e0b',
    year: 'Expanded 2012 – 2025',
    investmentMetric: '270° Aburra Valley Vista',
    headline: 'Elevated Balconies Hosting Breakdance Shows, Food Stalls & Valley Views',
    heroImage: './images/viewpoint-plaza.jpg',
    images: [
      {
        src: './images/viewpoint-plaza.jpg',
        caption: 'Real Photograph (User Archive): Upper panoramic viewpoint plaza with food stalls, music, and valley views',
        credit: 'Real Site Photograph · Comuna 13 Medellin'
      },
      {
        src: './images/escalators-mural.jpg',
        caption: 'Real Photograph (User Archive): Ascending the final escalator section toward the upper balcony',
        credit: 'Real Site Photograph · Comuna 13 Medellin'
      },
      {
        src: './images/history-memory.jpg',
        caption: 'Twilight view across the illuminated hillside of San Javier',
        credit: 'Documentary Visualization'
      }
    ],
    youtubeId: 'sbpNIyM8JeI',
    youtubeTitle: 'Upper Viewpoints, Street Performers & Real Atmosphere in Comuna 13 (4K)',
    extraVideos: [
      { id: 'sbpNIyM8JeI', label: 'Viewpoints & Performers 4K' },
      { id: 'BvF5IqthS5M', label: 'Hillside Walk 4K' }
    ],
    lat: 6.2448,
    lng: -75.6203,
    streetViewQuery: 'Comuna+13+Viewpoint,Medellin,Colombia',
    audioText:
      'Exhibit 4: The Upper Hillside Viewpoints. Looking out across a 270-degree panorama of the Aburra Valley, these decks host live breakdance battles, acoustic music, and local gastronomy stalls.',
    visualChips: [
      '270° Medellin Skyline View',
      'Daily Breakdance Cyphers',
      'Artisan Food Terraces',
      'Top of 6th Escalator'
    ],
    shortPoints: [
      'Reverses urban stigma: visitors climb to admire Medellin from Comuna 13’s perspective.',
      'High visitor density on narrow stairs highlights the need for expanded public terraces.',
      'Investment Need: Solar-shaded amphitheaters & decentralized upper-hillside trails.'
    ],
    stats: [
      { label: 'Panorama', value: '270° Aburra Valley View' },
      { label: 'Visitor Rating', value: '4.7 / 5.0 (40k+ Reviews)' },
      { label: 'Priority Need', value: 'Decentralized Walkways' }
    ]
  },
  {
    id: 'commerce',
    number: 5,
    name: 'Local Gastronomy & Micro-Commerce',
    category: 'Grassroots Entrepreneurship',
    artifactType: 'commerce',
    artifactTitle: '3D Exhibit: Artisanal Mango Sorbet & Specialty Coffee Kiosk',
    coordinates: [-4.2, 8.8, -0.5],
    color: '#10b981',
    year: '2,750+ Formal Businesses',
    investmentMetric: '2,750+ Registered Enterprises',
    headline: 'Family Homes Transformed into Cafes, Mango Sorbet Stalls & Art Boutiques',
    heroImage: './images/viewpoint-plaza.jpg',
    images: [
      {
        src: './images/viewpoint-plaza.jpg',
        caption: 'Real Photograph (User Archive): Local food vendor grilling and serving visitors at the upper plaza',
        credit: 'Real Site Photograph · Comuna 13 Medellin'
      },
      {
        src: './images/mural-alley.jpg',
        caption: 'Real Photograph (User Archive): Family micro-enterprises and galleries lining the mural corridor',
        credit: 'Real Site Photograph · Comuna 13 Medellin'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Comuna_13_de_Medellin.jpg',
        fallbackSrc: './images/escalators-mural.jpg',
        caption: 'Wikimedia Commons: Residential and commercial hillside architecture in Comuna 13',
        credit: 'Wikimedia Commons · CC BY-SA'
      }
    ],
    youtubeId: 'BvF5IqthS5M',
    youtubeTitle: 'Exploring Local Food, Coffee, Galleries & Street Life in Comuna 13 (4K)',
    extraVideos: [
      { id: 'BvF5IqthS5M', label: 'Local Commerce & Food 4K' },
      { id: 'sbpNIyM8JeI', label: 'Artisan Alleyways 4K' }
    ],
    lat: 6.2455,
    lng: -75.6195,
    streetViewQuery: 'Comuna+13+San+Javier,Medellin,Colombia',
    audioText:
      'Exhibit 5: Local Gastronomy and Micro-Commerce. According to the Medellin Chamber of Commerce, over 2,750 formal businesses operate in Comuna 13, from artisanal green mango sorbet stands to specialty coffee bars and galleries.',
    visualChips: [
      '2,750+ Registered Businesses',
      'Green Mango Ice Pops',
      'Antioquia Specialty Coffee',
      'Family-Owned Galleries'
    ],
    shortPoints: [
      'Over 2,750 formal businesses registered by 2023 (Medellin Chamber of Commerce).',
      'Direct household income keeps tourism value inside the community.',
      'Investment Need: Culinary incubators, cashless payments & global e-commerce.'
    ],
    stats: [
      { label: 'Formal Businesses', value: '2,750+ (Chamber of Commerce)' },
      { label: 'Monthly Visitors', value: '90,000 – 136,000 (Est.)' },
      { label: 'Growth Lever', value: 'E-Commerce & Incubators' }
    ]
  },
  {
    id: 'metrocable',
    number: 6,
    name: 'San Javier Metrocable Connection',
    category: 'Sustainable Aerial Transit',
    artifactType: 'gondola',
    artifactTitle: '3D Exhibit: Line J Aerial Metrocable Gondola Cabin',
    coordinates: [8.5, 9.5, -4.0],
    color: '#a855f7',
    year: 'Line J Inaugurated 2008',
    investmentMetric: 'Zero-Emission Aerial Transit',
    headline: 'Aerial Gondolas Bridging High-Altitude Neighborhoods with the Metro',
    heroImage: './images/metrocable-sanjavier.jpg',
    images: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Medellin_Comuna_13.jpg',
        fallbackSrc: './images/metrocable-sanjavier.jpg',
        caption: 'Wikimedia Commons: Aerial Metrocable Line J crossing the hillside of Comuna 13',
        credit: 'Wikimedia Commons · CC BY-SA'
      },
      {
        src: './images/metrocable-sanjavier.jpg',
        caption: 'Aerial perspective of the gondola line and orange escalator corridor',
        credit: '3D Architectural Visualization'
      },
      {
        src: './images/escalators-mural.jpg',
        caption: 'Real Photograph (User Archive): Integrated hillside pedestrian and escalator network',
        credit: 'Real Site Photograph · Comuna 13 Medellin'
      }
    ],
    youtubeId: 'SNZIobJtcik',
    youtubeTitle: 'San Javier Metro & Metrocable Connection to Comuna 13',
    extraVideos: [
      { id: 'SNZIobJtcik', label: 'Transit & Escalator Link' },
      { id: 'BvF5IqthS5M', label: 'Neighborhood Overview' }
    ],
    lat: 6.2559,
    lng: -75.6136,
    streetViewQuery: 'San+Javier+Metro+Station,Medellin,Colombia',
    audioText:
      'Exhibit 6: The San Javier Metrocable Line J. Inaugurated in 2008, this electric aerial gondola system connects steep hillside neighborhoods directly to the Medellin Metro network.',
    visualChips: [
      'Metro Line B + Line J Link',
      '100% Electric Gondolas',
      'Slashed Commute Times',
      'Needs Last-Mile Shuttles'
    ],
    shortPoints: [
      'Pioneered Medellin’s social urbanism by linking steep hillsides to the metropolitan transit grid.',
      'Provides clean, zero-emission daily mobility for thousands of workers and students.',
      'Investment Need: Accessible electric micro-shuttles for elderly and disabled residents.'
    ],
    stats: [
      { label: 'Transit Hub', value: 'San Javier Station (Line B/J)' },
      { label: 'Propulsion', value: 'Zero-Emission Electric' },
      { label: 'Next Upgrade', value: 'Accessible Micro-Shuttles' }
    ]
  }
];

export const VERIFIED_METRICS = [
  {
    id: 'escalator-length',
    numericValue: 384,
    suffix: 'm',
    prefix: '',
    label: 'Outdoor Escalators (6 Sections)',
    sublabel: 'Cut 35-min climb (28 stories) to 6 min',
    status: 'Verified · 2011',
    color: '#ff5a1f'
  },
  {
    id: 'local-businesses',
    numericValue: 2750,
    suffix: '+',
    prefix: '',
    label: 'Registered Local Businesses',
    sublabel: 'Medellin Chamber of Commerce (2023)',
    status: 'Verified · Chamber',
    color: '#10b981'
  },
  {
    id: 'monthly-visitors',
    numericValue: 136,
    suffix: 'k',
    prefix: '90k–',
    label: 'Monthly Visitors',
    sublabel: '1.1M – 1.6M visitors per year',
    status: 'Estimated Range',
    color: '#ec4899'
  },
  {
    id: 'escalator-cost',
    numericValue: 6.7,
    suffix: 'M',
    prefix: '$',
    decimals: 1,
    label: 'Escalator Investment (USD)',
    sublabel: 'Serving 12,000+ immediate residents',
    status: 'Verified · Municipal',
    color: '#06b6d4'
  },
  {
    id: 'population',
    numericValue: 160,
    suffix: 'k',
    prefix: '~',
    label: 'Comuna 13 Population',
    sublabel: 'San Javier hillside residents',
    status: 'Verified · Census',
    color: '#f59e0b'
  },
  {
    id: 'city-tourism',
    numericValue: 1.55,
    suffix: 'B',
    prefix: '$',
    decimals: 2,
    label: 'Medellin Tourism Impact (USD)',
    sublabel: '1.2M foreign visitors in 2025 (+10% YoY)',
    status: 'Verified · 2025',
    color: '#a855f7'
  }
];

export const GROWTH_TRAJECTORY = [
  {
    year: '2011',
    milestone: 'Escalators Open',
    monthlyVisitorsK: 2,
    formalBusinesses: 320,
    note: 'Dec 2011: 384m escalators inaugurated'
  },
  {
    year: '2014',
    milestone: 'Casa Kolacho',
    monthlyVisitorsK: 12,
    formalBusinesses: 580,
    note: 'First community-led Graffitours'
  },
  {
    year: '2018',
    milestone: 'Global Recognition',
    monthlyVisitorsK: 45,
    formalBusinesses: 1250,
    note: 'Family cafes & galleries multiply'
  },
  {
    year: '2023',
    milestone: '2,750+ Businesses',
    monthlyVisitorsK: 110,
    formalBusinesses: 2750,
    note: 'Chamber of Commerce milestone'
  },
  {
    year: '2026',
    milestone: 'Capacity Peak',
    monthlyVisitorsK: 136,
    formalBusinesses: 3100,
    note: 'Urgent infrastructure & flow need'
  },
  {
    year: '2035 Goal',
    milestone: 'Sustainable Model',
    monthlyVisitorsK: 150,
    formalBusinesses: 4500,
    note: 'Decentralized routes & local ownership'
  }
];

export const DISTRICT_COMPARISON = [
  {
    district: 'Comuna 13 (San Javier)',
    character: 'Community Open-Air Art & Social Urbanism',
    socialImpactROI: 'VERY HIGH · Direct income for 2,750+ family businesses & youth hubs',
    culturalAuthenticity: 'HIGH · Living memory, hip-hop school & resident murals',
    currentChallenge: 'Overcrowded stairs (90k–136k/mo) & blocked resident taxi access',
    fundingVerdict: 'TOP PRIORITY FOR SUPPORT'
  },
  {
    district: 'El Poblado (Commune 14)',
    character: 'Upscale Commercial & Hotel District',
    socialImpactROI: 'LOW · Dominated by large hotel chains & external capital',
    culturalAuthenticity: 'LOW · Commercial dining & nightlife district',
    currentChallenge: 'High real-estate saturation & gentrification',
    fundingVerdict: 'Self-Financed Commercial'
  },
  {
    district: 'Plaza Botero (Downtown)',
    character: 'Institutional Museum & Civic Plaza',
    socialImpactROI: 'MODERATE · Municipal museum budget + street trade',
    culturalAuthenticity: 'HIGH · Heritage bronze sculptures (institutional)',
    currentChallenge: 'Higher petty theft (12 vs 0.5 per 100k in C13 corridor)',
    fundingVerdict: 'Covered by City Heritage'
  }
];

export const SCENARIO_2035 = {
  responsible: {
    title: 'Scenario A · Responsible Public & Impact Investment (Recommended)',
    conditionalStatement:
      '“If we fund community infrastructure today, by 2035 Comuna 13 will have decentralized visitor flows and protected local ownership.”',
    outcomes: [
      'By 2035, parallel walkways will have restored taxi and emergency access for disabled residents.',
      'Community Land Trusts will have kept 75%+ of tourism revenue inside local family hands.',
      'Casa Kolacho & youth studios will have expanded into global digital music and art exports.',
      'Continuous safety monitoring will have preserved neighborhood peace without militarization.'
    ]
  },
  unmanaged: {
    title: 'Scenario B · Unmanaged Mass Tourism & Under-Investment (Risk Path)',
    conditionalStatement:
      '“Conversely, if left unregulated, by 2035 commercialization will have displaced the community that built this resilience.”',
    outcomes: [
      'By 2035, rent inflation will have displaced long-term families and local muralists.',
      'Overwhelmed escalators will have forced responsible travel agencies to boycott the area.',
      'External tour operators will have captured the profits while leaving noise and congestion.'
    ]
  }
};

export const INVESTMENT_OPPORTUNITIES = [
  {
    id: 'tourism',
    title: '1. Community-Led Cultural Tourism',
    category: 'Sustainable Tours',
    ticketRange: '$25k – $250k',
    impactMetric: '80%+ revenue to local guides',
    image: './images/mural-alley.jpg',
    points: ['Pre-booked small groups', 'Upper-hillside memory routes', 'Multilingual youth guides']
  },
  {
    id: 'gastronomy',
    title: '2. Gastronomy & Specialty Coffee',
    category: 'Culinary Incubators',
    ticketRange: '$15k – $150k',
    impactMetric: '3x margin for family stalls',
    image: './images/viewpoint-plaza.jpg',
    points: ['Artisanal mango sorbet hubs', 'Antioquia coffee roasteries', 'Rooftop dining terraces']
  },
  {
    id: 'lodging',
    title: '3. Family Homestays & Eco-Lofts',
    category: 'Hospitality',
    ticketRange: '$50k – $400k',
    impactMetric: '3-hr visit → 2+ night stay',
    image: './images/history-memory.jpg',
    points: ['Joint-venture with homeowners', 'Artist residency lofts', 'Zero resident displacement']
  },
  {
    id: 'art-culture',
    title: '4. Art Galleries & Music Studios',
    category: 'Creative IP',
    ticketRange: '$20k – $200k',
    impactMetric: 'Global licensing royalties',
    image: './images/kolacho-hiphop.jpg',
    points: ['Hip-hop recording studios', 'Fine-art print exports', 'Global brand collaborations']
  },
  {
    id: 'entrepreneurship',
    title: '5. Youth Tech & Creative Labs',
    category: 'Micro-Enterprise',
    ticketRange: '$30k – $300k',
    impactMetric: '500+ youths trained/year',
    image: './images/escalators-mural.jpg',
    points: ['Digital design & coding labs', 'E-commerce for 2,750+ shops', 'Cashless payment tools']
  },
  {
    id: 'infrastructure',
    title: '6. Public Mobility & Access Grants',
    category: 'Social Urbanism',
    ticketRange: '$100k – $2M+',
    impactMetric: 'Restores emergency access',
    image: './images/metrocable-sanjavier.jpg',
    points: ['Parallel resident stairs', 'Disability micro-shuttles', 'Solar shade & waste hubs']
  }
];

export const RISKS_AND_MITIGATION = [
  {
    risk: 'Escalator Overcrowding & Blocked Resident Access',
    severity: 'High (90k–136k visitors/mo)',
    evidence: 'Escalators built for 12,000 residents are overwhelmed; clogged streets block taxis for disabled families.',
    mitigation: 'Timed digital entry slots + parallel resident-only mobility lanes + upper-corridor trails.'
  },
  {
    risk: 'Gentrification & Rent Inflation',
    severity: 'High (Commercial pressure)',
    evidence: 'Surge to 2,750+ businesses raises rents and pressures long-term residential tenants.',
    mitigation: 'Community Land Trusts + homeowner joint-ventures + municipal tax protection for locals.'
  },
  {
    risk: 'Cultural Commodification by Outside Agencies',
    severity: 'Medium-High',
    evidence: 'External operators run mass tours without local guides or respectful historical context.',
    mitigation: 'Mandatory local guide certification + 10% community cultural preservation fee.'
  },
  {
    risk: 'Safety & Informal Extortion Risks',
    severity: 'Medium',
    evidence: 'Rapid cash economy requires continuous institutional security oversight.',
    mitigation: 'Cashless digital payments + formal banking + continuous municipal safety monitoring.'
  }
];

export const QA_PREP_CARDS = [
  {
    question: '1. What made you choose Comuna 13 for this tour?',
    rubricTarget: 'Narrative/perfect forms + attitude adverbs + art vocabulary',
    modelAnswer:
      'I chose Comuna 13 because it is arguably Latin America’s most vivid example of grassroots transformation through art and hip-hop — yet it urgently needs infrastructure support to manage mass tourism.'
  },
  {
    question: '2. How does it compare with El Poblado or Plaza Botero?',
    rubricTarget: 'Comparisons (whereas, far more impactful than) + quantifiers',
    modelAnswer:
      'Unlike El Poblado’s corporate hotel chains or Plaza Botero’s institutional museum model, Comuna 13 channels revenue directly into 2,750+ family micro-businesses and youth collectives.'
  },
  {
    question: '3. What will have changed there by 2035 if funded?',
    rubricTarget: 'Future perfect (will have decentralized, will have built)',
    modelAnswer:
      'If funded responsibly today, by 2035 Comuna 13 will have decentralized its visitor trails, restored resident disability access, and expanded Casa Kolacho into a global creative hub.'
  },
  {
    question: '4. Why does it deserve more support than a traditional museum?',
    rubricTarget: 'Weighing pros, cons & consequences with evidence',
    modelAnswer:
      'Because Comuna 13 is a living neighborhood of 160,000 residents where art actively prevents youth violence — and without public infrastructure upgrades, 136,000 monthly visitors will strain daily life.'
  }
];

export const SOURCES = [
  {
    title: 'Schindler Group — Urban Mobility Transforms Medellin Neighborhood (384m Escalators)',
    url: 'https://group.schindler.com/en/media/stories/urban-mobility-transforms-medellin-neighborhood.html',
    category: 'Infrastructure Report'
  },
  {
    title: 'Elevator World — Medellin’s Outdoor Escalator (Dec 26, 2011 · US$6.7M · 28 Stories)',
    url: 'https://elevatorworld.com/article/medellins-outdoor-escalator/',
    category: 'Engineering & Cost Data'
  },
  {
    title: 'URBANET — Escalating to Peace: Social Infrastructure in Medellin',
    url: 'https://www.urbanet.info/colombia-medellin-social-infrastructure/',
    category: 'Urban Planning Paper'
  },
  {
    title: 'Truth Commission of Colombia — Operation Orion (October 16–17, 2002)',
    url: 'https://www.comisiondelaverdad.co/el-violento-engranaje-de-la-operacion-orion',
    category: 'Historical Memory Report'
  },
  {
    title: 'WOLA (Adam Isacson) — Medellin’s Comuna 13, 22 Years After Operation Orion',
    url: 'https://adamisacson.com/medellins-comuna-13-22-years-after-operacion-orion/',
    category: 'Human Rights & Security Study'
  },
  {
    title: 'InSight Crime — Inter-American Court Condemns Colombia for 2002 Operation Orion',
    url: 'https://insightcrime.org/news/brief/intl-court-condemns-colombia-bloody-2002-military-operation/',
    category: 'International Legal Ruling'
  },
  {
    title: 'Lazo Magazine — 2,750+ Registered Businesses & 136,000 Monthly Visitors in Comuna 13',
    url: 'https://lazomagazine.com/why-locals-are-leaving-medellins-most-popular-tourist-hub/',
    category: 'Chamber of Commerce Data'
  },
  {
    title: 'CAS Trips — Overcrowding & Infrastructure Strain in Comuna 13 (90k Monthly Visitors)',
    url: 'https://www.castrips.org/comuna-13-in-medellin/',
    category: 'Sustainable Tourism Field Report'
  },
  {
    title: 'Brown Political Review — Balancing Tourism and Community Preservation in Comuna 13',
    url: 'https://brownpoliticalreview.org/comuna-13-a-model-for-balancing-tourism-and-community-preservation/',
    category: 'Policy Analysis Paper'
  },
  {
    title: 'NYU CLACS — Exploring Empowerment Through Transformation Tourism in Comuna 13',
    url: 'https://as.nyu.edu/research-centers/clacs/research/field-notes/comuna-13--exploring-empowerment-through-tourism.html',
    category: 'Academic Field Research'
  },
  {
    title: 'EFE Comunica — Medellin Welcomed 1.2M Foreign Tourists in 2025 ($1.552B Impact)',
    url: 'https://efecomunica.efe.com/en/medellin-welcomed-1-2-million-foreign-tourists-in-2025-highlights-economic-impact/',
    category: 'Municipal Tourism Statistics'
  },
  {
    title: 'MDPI Sustainability — Resilience as a City Brand: The Case of Comuna 13',
    url: 'https://www.mdpi.com/2071-1050/12/20/8469',
    category: 'Peer-Reviewed Academic Paper'
  }
];
