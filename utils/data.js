import brand from '../public/images/branding.svg'
import design from '../public/images/design.svg'
import webDev from '../public/images/webdev.svg'
import video from '../public/images/video.svg'

const services = [
  {
    title: 'Branding',
    img: brand,
    id: 1,
    list: ['Brand identity', 'Brand strategy', 'Visual conception','Advertising']
  },
  {
    title: 'Web development',
    img:webDev,
    id: 3,
    list: ['Landing-pages', 'Corporate sites', 'Online-stores']
  },
  {
    title: 'WEB design',
    img: design,
    id: 2,
    list: ['Websites', 'UX/UI', 'Mobile apps']
  },
  {
    title: 'Video',
    img: video,
    id: 4,
    list: ['Filmmaking', 'Animation', 'Advertisement', 'Social']
  },
]

export { services }