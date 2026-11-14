export type ProjectCategory = 'Scriptwriting' | 'Treatments' | 'Production';

export interface ReelItem {
  id: string;
  code: string;
  number: string;
  category: string;
  projectType: ProjectCategory;
  title: string;
  logline: string;
  technicalNotes: string;
  location: string;
  aspectRatio: string;
  posterUrl: string;
  embedUrl: string;
  instagramUrl: string;
  featured?: boolean;
}

// Visual Pacing is the Spotlight Cut
export const SPOTLIGHT_REEL: ReelItem = {
  id: 'spotlight-1',
  code: 'DVk1tDBCREp',
  number: '#00',
  category: 'Visual Pacing',
  projectType: 'Scriptwriting',
  title: 'Visual Pacing & Rhythm',
  logline: 'Rhythmic montage aligning the pulses of daily labor with kinetic camera cuts, dynamic shutter angle adjustments, and syncopated cadence.',
  technicalNotes: 'Match-cutting motion vectors, dynamic shutter angle adjustments, syncopated audio accents.',
  location: 'Morning Wholesale Market',
  aspectRatio: '9:16 Vertical Cinema',
  posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
  embedUrl: 'https://www.instagram.com/reel/DVk1tDBCREp/embed/',
  instagramUrl: 'https://www.instagram.com/reel/DVk1tDBCREp/',
  featured: true,
};

export const REELS_DATA: ReelItem[] = [
  {
    id: 'reel-1',
    code: 'DVsNJQnMkoS',
    number: '#01',
    category: 'Observational Frame',
    projectType: 'Scriptwriting',
    title: 'The Silent Cadence',
    logline: 'Patience behind the camera: waiting for unscripted micro-expressions that define human resilience.',
    technicalNotes: 'Handheld telephoto compression, ambient noise bed, zero artificial intervention.',
    location: 'Urban Perimeter / Transit Hub',
    aspectRatio: '9:16 Native',
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    embedUrl: 'https://www.instagram.com/reel/DVsNJQnMkoS/embed/',
    instagramUrl: 'https://www.instagram.com/reel/DVsNJQnMkoS/',
  },
  {
    id: 'reel-2',
    code: 'DVbMQEGiajg',
    number: '#02',
    category: 'Directorial Vision',
    projectType: 'Scriptwriting',
    title: 'Spatial Geometry & Movement',
    logline: 'Guiding the eye through architectural tension, framing subjects as organic extensions of their territory.',
    technicalNotes: 'Low-angle leading lines, deliberate slow push-in, shadow-dominant grading.',
    location: 'Historic Industrial Quarter',
    aspectRatio: '9:16 Native',
    posterUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    embedUrl: 'https://www.instagram.com/reel/DVbMQEGiajg/embed/',
    instagramUrl: 'https://www.instagram.com/reel/DVbMQEGiajg/',
  },
  {
    id: 'reel-3',
    code: 'DWJqMzUCUDI',
    number: '#03',
    category: 'Directorial Vision',
    projectType: 'Treatments',
    title: 'Rhythm of the Everyday',
    logline: 'An intimate study in light, human cadence, and raw unhurried moments that uncover emotional truth in ordinary life.',
    technicalNotes: 'Natural available light, 24fps cinema cadence, naturalistic environmental sound design, candid non-actor observation.',
    location: 'South India Field Unit',
    aspectRatio: '9:16 Native',
    posterUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    embedUrl: 'https://www.instagram.com/reel/DWJqMzUCUDI/embed/',
    instagramUrl: 'https://www.instagram.com/reel/DWJqMzUCUDI/',
  },
  {
    id: 'reel-4',
    code: 'DVixPV-iTTn',
    number: '#04',
    category: 'Mood & Culture',
    projectType: 'Treatments',
    title: 'Vibrant Rituals & Echoes',
    logline: 'Capturing cultural ceremonies not as spectacle, but from the reverent perspective of a quiet participant.',
    technicalNotes: 'Warm tungsten & golden-hour balance, high dynamic range preservation, directional boom audio capture.',
    location: 'Community Sanctuary & Village Shrine',
    aspectRatio: '9:16 Native',
    posterUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80',
    embedUrl: 'https://www.instagram.com/reel/DVixPV-iTTn/embed/',
    instagramUrl: 'https://www.instagram.com/reel/DVixPV-iTTn/',
  },
  {
    id: 'reel-5',
    code: 'DVbi6zZj7x5',
    number: '#05',
    category: 'Story Environment',
    projectType: 'Production',
    title: 'Landscapes of Survival',
    logline: 'How topography shapes livelihoods. Tracking human interaction against harsh elemental textures.',
    technicalNotes: 'Deep depth of field (f/8), texture-enhancing micro-contrast, wide focal length.',
    location: 'Arid Agrarian Belt',
    aspectRatio: '9:16 Native',
    posterUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    embedUrl: 'https://www.instagram.com/reel/DVbi6zZj7x5/embed/',
    instagramUrl: 'https://www.instagram.com/reel/DVbi6zZj7x5/',
  },
  {
    id: 'reel-6',
    code: 'Deq7bZNpJAg',
    number: '#06',
    category: 'Raw Atmosphere',
    projectType: 'Production',
    title: 'Midnight Shift & Solitude',
    logline: 'The quiet solitude of nighttime workers whose labor sustains the sleeping metropolis.',
    technicalNotes: 'High-ISO low-light fidelity, sodium-vapor glow contrast, immersive stereo field recordings.',
    location: 'Night Terminal & Freight Docks',
    aspectRatio: '9:16 Native',
    posterUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80',
    embedUrl: 'https://www.instagram.com/reel/Deq7bZNpJAg/embed/',
    instagramUrl: 'https://www.instagram.com/reel/Deq7bZNpJAg/',
  },
];
