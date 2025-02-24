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
      <Link
        to={href}
        className='text-primary hover:text-blue-600 px-3 max-custom-940:px-0 py-2 rounded-md font-primary-500'
      >
        {label}
      </Link>
    </li>
  )
}

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/recipes', label: 'Recipes' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/about-us', label: 'About Us' }
]

export const SocialIcon = ({ iconSrc }: { iconSrc: string }) => {
  return (
    <Link to='#'>
      <img src={iconSrc} alt='icon' className='h-6 w-6' />
    </Link>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const socialMediaIcons = [facebook, twitter, instagram]

export const Header = () => {
  return (
    <>
      <header className='flex text-[16px] justify-between max-custom-940:flex-col max-custom-940:gap-4  max-custom-900:py-7 pt-[45px] pb-[50px] px-8 bg-white font-primary-500'>
        <div className='flex-shrink-0'>
          <img src={logo} alt='logo' className='h-15 w-15' />
        </div>
        <nav className='space-x-4'>
          <ul className='flex gap-[50px] max-custom-940:gap-8 max-custom-440:flex-col max-custom-440:gap-2'>
            {navigationLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ul>
        </nav>
        <div className='flex space-x-2'>
          {socialMediaIcons.map((iconSrc) => (
            <SocialIcon key={iconSrc} iconSrc={iconSrc} />
          ))}
        </div>
      </header>
      <div className='border-t border-gray-300 mb-4'></div>
    </>
  )
}
