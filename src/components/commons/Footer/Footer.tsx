import React from 'react'
import logo from '~/assets/icons/foodieland.svg'
import facebook from '~/assets/icons/facebook.svg'
import twitter from '~/assets/icons/twitter.svg'
import instagram from '~/assets/icons/instagram.svg'
import { Link } from 'react-router-dom'
import { INavLinkProps } from '~/commons/interfaces/INavLinkProps'

const NavLink: React.FC<INavLinkProps> = ({ href, label }) => {
  return (
    <li>
      <Link to={href} className='text-primary hover:text-blue-600 px-3 max-custom-940:px-0 py-2 rounded-md '>
        {label}
      </Link>
    </li>
  )
}

const navigationLinks = [
  { href: '/recipes', label: 'Recipes' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/about-us', label: 'About Us' }
]

const SocialIcon = ({ iconSrc }: { iconSrc: string }) => {
  return (
    <Link to='#'>
      <img src={iconSrc} alt='icon' className='h-6 w-6' />
    </Link>
  )
}

const socialMediaIcons = [facebook, twitter, instagram]

export const Footer = () => {
  return (
    <footer className='block text-[16px] max-custom-900:py-7 pt-[45px] pb-[75px] mx-8 bg-white font-primary-500'>
      <div className='flex justify-between items-center mb-5 max-md:block'>
        <div className='flex-shrink-0'>
          <img src={logo} alt='logo' className='h-15 w-15' />
          <p className='font-primary-400 text-gray-500'>Lorem ipsum dolor sit amet, consectetuipisicing elit.</p>
        </div>
        <nav className='space-x-4'>
          <ul className='font-semibold flex gap-[30px] max-custom-940:gap-6 max-custom-440:flex-col max-custom-440:gap-2'>
            {navigationLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ul>
        </nav>
      </div>
      <div className='border-t border-gray-300'>
        <div className='mt-4 max-custom-440:mt-8 relative flex items-center'>
          <p className='text-[18px] max-custom-440:text-[14px] text-gray-500 absolute left-1/2 transform -translate-x-1/2 '>
            © 2020 Flowbase. Powered by <strong className='text-orange'>Webflow</strong>
          </p>
          <div className='flex space-x-2 ml-auto'>
            {socialMediaIcons.map((iconSrc) => (
              <SocialIcon key={iconSrc} iconSrc={iconSrc} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
