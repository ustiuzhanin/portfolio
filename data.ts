import { RiComputerLine } from 'react-icons/ri'
import { BsCircleFill } from 'react-icons/bs'
import { Service, Skill } from './type'

export const services:Service[] = [
  {
    title: 'Front-End developer',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat repudiandae sint consectetur ipsum quos architecto ab hic optio, eaque officiis dolor, ad expedita? Accusamus molestiae pariatur nam.',
    Icon: RiComputerLine
  },
  {
    title: 'Freveloper',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat repudiandae sint consectetur ipsum quos architecto ab hic optio, eaque officiis dolor, ad expedita?',
    Icon: RiComputerLine
  },
  {
    title: 'Whatever',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat repudiandae sint consectetur ipsum quos architecto ab hic optio, eaque officiis dolor, ad expedita? Accusamus molestiae pariatur nam in reiciendis tempora!',
    Icon: RiComputerLine
  }
]

export const skills:Skill[] = [
  {
    name: 'JavaScript',
    level: '70%',
    Icon: BsCircleFill
  },
  {
    name: 'HTML',
    level: '75%',
    Icon: BsCircleFill
  },
  {
    name: 'CSS',
    level: '75%',
    Icon: BsCircleFill
  },
]