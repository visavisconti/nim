type Explanation = {
  id: string
  description: string
  image: string
}

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  address: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const EXPLANATION: Explanation[] = [
  {
    id: 'text1',
    description:
      'Bilgisaray – »Palast des Wissens« – ist ein solidarischer Ort für Kultur und Nachbarschaft in Berlin-Kreuzberg. Die Idee: Räume ohne Konsumzwang schaffen.',
    image: 'https://bilgisaray.vercel.app/assets/img/posts/front.jpg', //  /images/bilgisaray.jpg Relativ zum public-Ordner
  },
  // Weitere Einträge möglich …
]


export const PROJECTS: Project[] = [
  {
    name: 'Kiezkantine',
    description:
      'food every tuesday evening - donation based ',
    link: 'https://o45.vercel.app/posts/kiezkantine/',
    video:
      'video/video.mp4',
    id: 'project1',
  },
  {
    name: 'Random',
    description: 'Video of an UI kit',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    name: 'Internetkantine',
    description: 'communty cooking corona edition',
    link: 'https://o45.vercel.app/posts/kiezkantine/',
    video:
      'video/internetkantine.mp4',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    address: 'Oranienstr. 45 (zuerst am damaligen Heinrichplatz)',
    title: 'Bilgisaray',
    start: '2016',
    end: 'Present',
    link: '',
    id: 'work1',
  },
  {
    address: 'Kiezladen in der Waldemarstraße 110',
    title: 'MaHalle',
    start: '2017',
    end: 'Present',
    link: 'https://mahalle.de/',
    id: 'work2',
  },
  {
    address: 'Nachbarschafts- und Inklusionsgarten Moritzplatz',
    title: 'Prinzessinnengarten-Kreuzberg',
    start: '2013',
    end: 'Present',
    link: 'https://prinzessinnengarten-kreuzberg.net/',
    id: 'work3',
  },
  {
    address: 'Raum für die Nachbarschaft im Hof 87, Kottbusser Str. 4/5',
    title: 'Komşukeller',
    start: '2021',
    end: 'Present',
    link: 'https://www.komsukeller.de/',
    id: 'work4',
  },
  {
    address: 'Innenhof der Südblöcke am Kottbusser Tor',
    title: 'Komşuhütte',
    start: '2022',
    end: 'Present',
    link: 'https://orangotango.info/de/komsu-kulubesi-eine-huette-fuer-die-nachbarschaft/',
    id: 'work5',
  },
  {
    address: 'Lausitzer Straße 10 Aufgang B',
    title: 'Kiezraum LauseRia',
    start: '2022',
    end: 'Present',
    link: 'https://www.lause.berlin/de/kiezraum-lauseria',
    id: 'work6',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'MAY THE COMMONS GROW AND BE EDIBLE » Arts of the Working Class',
    description: 'Issue 16 "Food Eats the Soul"',
    link: '/blog/press/arts-of-the-working-class',
    uid: 'blog-1',
  },
  {
    title: 'random post',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'randon tech guide',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'website by',
    link: 'https://github.com/visavisconti',
  },
  {
    label: 'Fakebook',
    link: 'https://www.facebook.com/bilgisarayberlin/',
  },
  {
    label: 'Keybase (comming soon)',
    link: 'https://keybase.io/',
  },
   {
    label: 'mail',
    link: 'mailto:your@email.com',
  },
]



