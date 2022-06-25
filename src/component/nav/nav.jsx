
import './nav.css'
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{BiBook} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import{MdOutlineContactPage} from 'react-icons/md'


const Nav = () =>{

  return (
  <nav>
  <a href="#"><AiOutlineHome/></a>
  <a href="#about"><AiOutlineUser/></a>
  <a href="#experience"><BiBook/></a>
  <a href="#services"><RiServiceLine/></a>
  <a href="#contact"><MdOutlineContactPage/></a>
  </nav>
  )
}

export default Nav
