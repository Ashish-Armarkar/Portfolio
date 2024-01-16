import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/ashish-armarkar-09b054246/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/Ashish-Armarkar" target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials