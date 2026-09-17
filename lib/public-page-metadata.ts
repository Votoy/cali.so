export const publicPageMetadata = {
  home: {
    zh: {
      title: 'Marvin',
      description: 'Li Mn V 其实是三种化学元素。',
      ogDescription: '我是 Marvin，定居成都，ENTJ。我喜欢把想法做成东西。',
    },
    en: {
      title: 'Marvin',
      description: 'Li Mn V is actually three chemical elements.',
      ogDescription:
        'I am Marvin, based in Chengdu, ENTJ. I like turning ideas into things.',
    },
  },
  blog: {
    zh: {
      title: '写作',
      description: 'Marvin 关于生活、摄影与 AI 的文字。',
    },
    en: {
      title: 'Writing',
      description: 'Notes by Marvin on life, photography, and AI.',
    },
  },
  photos: {
    zh: { title: '照片', description: 'Marvin 在生活与旅途中留下的一些瞬间。' },
    en: {
      title: 'Photos',
      description: 'Moments Marvin has kept from life and travel.',
    },
  },
  projects: {
    zh: {
      title: '项目',
      description: '做过的项目与正在推进的实验。有些已完成，有些还在路上。',
    },
    en: {
      title: 'Projects',
      description:
        'Things I have built and experiments still in progress. Some finished, some underway.',
    },
  },
  ama: {
    zh: {
      title: '一对一',
      description: '聊聊项目、摄影、AI，以及把想法做成东西的过程。',
    },
    en: {
      title: 'AMA',
      description:
        'A one-to-one conversation about projects, photography, AI, and making things.',
    },
  },
} as const

export type PublicSection = Exclude<keyof typeof publicPageMetadata, 'home'>
