// Services
import brand from '../public/images/branding.svg'
import design from '../public/images/design.svg'
import webDev from '../public/images/webdev.svg'
import video from '../public/images/video.svg'
//Projects
import proj_1 from '../public/images/img/proj_1.jpg'
import proj_2 from '../public/images/img/proj_2.jpg'
import proj_3 from '../public/images/img/proj_3.jpg'
import proj_4 from '../public/images/img/proj_4.jpg'
import proj_5 from '../public/images/img/proj_5.jpg'
import proj_6 from '../public/images/img/proj_6.jpg'
import proj_7 from '../public/images/img/proj_7.jpg'
import proj_8 from '../public/images/img/proj_8.jpg'
// Testimonials
import person from '../public/images/img/person.jpg'

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

const projects = [
  {
    img: proj_1,
    title: 'design',
    desc: 'unique project design',
    id_key: 'project_1'
  },
  {
    img: proj_2,
    title: 'development',
    desc: 'Development Software',
    id_key: 'project_2'
  },
  {
    img: proj_3,
    title: 'design',
    desc: 'Technology Process',
    id_key: 'project_3'
  },
  {
    img: proj_4,
    title: 'design',
    desc: 'unique project design',
    id_key: 'project_4'
  },
  {
    img: proj_5,
    title: 'development',
    desc: 'unique project design',
    id_key: 'project_5'
  },
  {
    img: proj_6,
    title: 'development',
    desc: 'unique project design',
    id_key: 'project_6'
  },
  {
    img: proj_7,
    title: 'development',
    desc: 'unique project design',
    id_key: 'project_7'
  },
  {
    img: proj_8,
    title: 'design',
    desc: 'unique project design',
    id_key: 'project_8'
  },
]

const testimonials = [
  {
    id: '01',
    img: person,
    name: 'James Taylor',
    position: 'SEO Company ',
    text:'Lorem ipsum dolor sit amet consectetur. Sed eget id odio accumsan in. Pellentesque nunc amet cras vitae. Euismod justo non etiam auctor. Sapien quis feugiat porttitor quis nullam et venenatis sed.'
  },
  {
    id: '02',
    img: person,
    name: 'James Taylor',
    position: 'SEO Company ',
    text:'Lorem ipsum dolor sit amet consectetur. Sed eget id odio accumsan in. Pellentesque nunc amet cras vitae. Euismod justo non etiam auctor. Sapien quis feugiat porttitor quis nullam et venenatis sed.'
  },
  {
    id: '03',
    img: person,
    name: 'James Taylor',
    position: 'SEO Company ',
    text:'Lorem ipsum dolor sit amet consectetur. Sed eget id odio accumsan in. Pellentesque nunc amet cras vitae. Euismod justo non etiam auctor. Sapien quis feugiat porttitor quis nullam et venenatis sed.'
  },

]

const team = [
  {
    img: person,
    name: 'Katty Williams',
    role: 'UI/UX Designer'
  },
  {
    img: person,
    name: 'Harry Newman',
    role: 'Frontend Developer'
  },
  {
    img: person,
    name: 'Harry Newman',
    role: 'Frontend Developer'
  },
]

export { services, projects, testimonials, team }