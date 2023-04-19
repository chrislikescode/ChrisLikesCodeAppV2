import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {FaGithub, FaLinkedinIn, FaTwitch, FaTiktok} from 'react-icons/fa';

interface Navigation {
    name: string,
    href: string
}

const navigation: Navigation[] = [
  { name: '', href: '#' },
  
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 text-white font-black">
            <h1> CHRIS LIKES CODE ⚡</h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
              {item.name}
            </a>
          ))}
        </div>
        <div className="col-2 text-white flex gap-10">
                <a href="https://github.com/ChrisLikesCode" target='_blank'> <FaGithub className='nav-icon'/> </a>             
                <a href="https://www.linkedin.com/in/chriswaddington06/" target='_blank'> <FaLinkedinIn className='nav-icon'/></a>
                <a href="https://www.twitch.tv/chrislikescode" target='_blank'> <FaTwitch className='nav-icon'/></a>
                <a href="https://www.tiktok.com/@chrislikescode" target='_blank'> <FaTiktok className='nav-icon'/></a>

            </div>
      </nav>
      
    </header>
  )
}
