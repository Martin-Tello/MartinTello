import React from 'react';
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from 'react-icons/vsc';
import { FiFacebook } from 'react-icons/fi';
import { TbBrandWhatsapp } from 'react-icons/tb'
import '../../index.css'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com/' target="_blank"><AiOutlineLinkedin size={42}/></a>
        <a href='https://github.com/' target="_blank"><VscGithub size={42}/></a>
        <a href='https://facebook.com/' target="_blank"><FiFacebook size={42}/></a>
        <a href='https://whatsapp.com/' target="_blank"><TbBrandWhatsapp size={42}/></a> 
        {/* <button class="glow-on-hover" type="button"><AiOutlineLinkedin size={50}/></button>
        <button class="glow-on-hover" type="button"><VscGithub size={50}/></button>
        <button class="glow-on-hover" type="button"><FiFacebook size={50}/></button>
        <button class="glow-on-hover" type="button"><TbBrandWhatsapp size={50}/></button> */}
    </div>
  )
}

export default HeaderSocials