// Project registry. Edit freely.
export interface Project {
  name: string
  nameEn: string
  description: string
  descriptionEn?: string
  url: string
  icon: string
  domain: string
}

export const projects: Project[] = [
  {
    name: '游戏历史像素博物馆',
    nameEn: 'Game History Pixel Museum',
    description: '已完成 · 用像素风格呈现游戏史的线上博物馆。',
    descriptionEn: 'Done · A pixel-style online museum of game history.',
    url: 'https://limnv.com/museum',
    icon: '/images/avatar.png',
    domain: 'limnv.com',
  },
  {
    name: '潜水员戴夫风格婚礼请柬',
    nameEn: 'Dave the Diver Wedding Invitation',
    description: '已完成 · 潜水员戴夫风格的婚礼请柬。',
    descriptionEn: 'Done · A Dave the Diver–style wedding invitation.',
    url: 'https://blue-hole-wedding-invitation-demo.pages.dev/',
    icon: '/images/avatar.png',
    domain: 'pages.dev',
  },
  {
    name: '潜水员戴夫风格生日邀请函',
    nameEn: 'Dave the Diver Birthday Invitation',
    description: '已完成 · 潜水员戴夫风格的生日邀请函。',
    descriptionEn: 'Done · A Dave the Diver–style birthday invitation.',
    url: 'https://mastrena.github.io/dave-diver-birthday-invitation/',
    icon: '/images/avatar.png',
    domain: 'github.io',
  },
  {
    name: 'limnv.com 个人博客',
    nameEn: 'limnv.com Personal Site',
    description: '进行中 · 记录生活、摄影与 AI 的个人站点。',
    descriptionEn: 'In progress · A personal site for life, photography, and AI.',
    url: 'https://limnv.com/',
    icon: '/images/avatar.png',
    domain: 'limnv.com',
  },
]
