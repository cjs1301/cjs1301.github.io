export default {
  /**
   * basic Information
   */
  title: `Json:{ } 블로그`,
  description: `개발자 최재송`,
  language: `ko`,
  siteUrl: `https://jaesong.me/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: ``, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `최재송`,
    nickname: `Json`,
    stack: ['Backend', 'Spring', 'Java'],
    bio: {
      email: `cjs5241@gmail.com`,
      residence: 'Seoul, South Korea',
      bachelorDegree: 'Academic Credit Bank System. Computer Engineering (2021.10-2023.12)',
    },
    social: {
      github: `https://github.com/cjs1301`,
      linkedIn: `https://www.linkedin.com/in/jaesong-choi/`,
      resume: `https://1drv.ms/b/c/5e34dd4ecbda51be/EcwKNNuEK-BPiJT0QFTjp5UB4FTh5-nChq5dF_9yL3D-ZQ?e=4S8LG5`,
    },
    dropdown: {
      tistory: '',
      velog: '',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'category1',
      category: 'featured-category1',
    },
    {
      title: 'category2',
      category: 'featured-category2',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2023.05 - 2023.08',
      en: 'LogBlack',
      kr: '로그블랙 주식회사',
      info: 'Java 백엔드 개발자',
      link: 'https://www.logblack.com/',
    },
    {
      category: 'Career',
      date: '2022.08 – 2023.04',
      en: 'Actibiome',
      kr: '액티바이옴 주식회사',
      info: 'Node 백엔드 개발자',
      link: '',
    },
    {
      category: 'Career',
      date: '2022.03 – 2023.05',
      en: 'Moranique',
      kr: '주식회사 모라니크',
      info: 'Node 백엔드 개발자',
      link: 'https://moranique.co.kr/',
    },
    {
      category: 'Career',
      date: '2022.08 – 2023.04',
      en: 'OpenMeta',
      kr: '오픈메타 주식회사',
      info: 'Node 백엔드 개발자',
      link: 'https://openmeta.city/',
    },
    {
      category: 'Project',
      date: '2023.12 - NOW',
      en: 'App',
      kr: '앱',
      info: '오디야?',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Portfolio',
      description: '친구 만나러 갈때 간편 위치 추적',
      techStack: ['Java', 'Spring', 'Flutter'],
      thumbnailUrl: 'portfolio_odiya.png', // Path to your in the 'assets' folder
      links: {
        post: 'https://bit.ly/odiya-project',
        github: 'https://github.com/cjs1301/where-server',
        demo: '',
        googlePlay: '',
        appStore: 'https://itunes.apple.com/app/id6474903133',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      link: 'https://toss.me/danmin',
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
