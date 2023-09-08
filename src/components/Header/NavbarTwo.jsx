import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { Menu, Popover, Transition, Disclosure } from '@headlessui/react'
import logo from '/public/assets/images/logos/png/Color-logo-no-background.png'
import MenuIcon from './MenuIcon'
import Container from '../container/Container'
import Button from '../Button/Button'

const links = [
    {
        label:"Home" , href:'/'
    },
    {
        label:"About" , href:'/about'
    },
    {
        label:"Rooms" , href:'/rooms'
    },
    {
        label:"Blog" , href:'/blog'
    },
    {
        label:"Contact" , href:'/contact'
    }
]
const NavbarTwo = () => {


  //Navbar always on top
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if(window.scrollY >=80){
      setSticky(true)
    }else{
      setSticky(false)
    }
  }

  useEffect(() => {

    window.addEventListener('scroll', handleStickyNavbar)
  }, [])

    const router = useRouter()


    
    const MobileNav = () => {

        return (
            <Popover>
              <Popover.Button
                className="group relative z-50 flex cursor-pointer items-center justify-center rounded-full bg-slate-100/80 p-3 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5 transition duration-300 ease-in-out hover:bg-slate-200/60 focus:outline-none md:hidden"
                aria-label="Toggle Navigation"
              >
                {({ open }) => <MenuIcon open={open} />}
              </Popover.Button>
              <Transition.Root>
                <Transition.Child
                  as={Fragment}
                  enter="duration-200 ease-out"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Overlay className="fixed inset-0 z-20 bg-slate-900 bg-opacity-50" />
                </Transition.Child>
                <Transition.Child
                  as={Fragment}
                  enter="duration-300 ease-out"
                  enterFrom="opacity-0 scale-90"
                  enterTo="opacity-100 scale-100 "
                  leave="duration-200 ease-in"
                  leaveFrom="opacity-100 scale-100 "
                  leaveTo="opacity-0 scale-90"
                >
                  <Popover.Panel
                    as="div"
                    className="absolute inset-x-0 top-full z-30 mt-4 origin-top overflow-hidden rounded-2xl bg-slate-50 px-6 py-7 shadow-xl shadow-sky-100/40 ring-1 ring-slate-900/5"
                  >
                    <div>
                      <div className="flex flex-col space-y-4">
                        {links.map((link) => (
                          <Link
                            key={`${link.label}-mobile`}
                            href={link.href}
                            className="block text-base font-semibold text-slate-700 duration-200 hover:text-slate-900"
                          >
                            {link.label}
                          </Link>
                        ))}
      
                    
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition.Child>
              </Transition.Root>
            </Popover>
          )
        }
 
        return (

            <header className={`header top-0 left-0 z-40 flex w-full items-center h-24  bg-white ${sticky ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20":'absolute'}`}>
        
        {/* // <header className=""> */}

              <Container className="flex h-full w-full items-center">
                <nav className="relative z-50 flex w-full items-center  justify-between">
                  <div className="flex shrink-0 items-center">
                    <Link
                      href="/"
                      aria-label="Home"
                      className="flex flex-shrink-0 items-center"
                    >
                      <Image
                        src={logo}
                        alt=""
                        className="h-10 w-auto sm:h-12 md:hidden lg:block lg:h-14"
                      />
                      {/* <Image
                        src={logoIcon}
                        alt=""
                        className="hidden h-8 w-auto md:block lg:hidden"
                      /> */}
                    </Link>
                  </div>
                  <div className="hidden items-center md:flex md:space-x-6 lg:space-x-8">
                    {links.map((link) => (
                      <Link
                        key={`${link.label}-desktop`}
                        href={link.href}
                        className={clsx(
                          'relative duration-200 after:absolute after:left-1/2 after:-bottom-2.5 after:h-0.5 after:w-4 after:-translate-x-1/2 after:rounded-full after:bg-slate-900 after:opacity-0 after:content-[""]',
                          router.pathname == link.href
                            ? 'font-semibold text-xl text-slate-900 after:opacity-100'
                            : 'font-medium text-xl text-slate-700 hover:text-slate-900 hover:after:opacity-25'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
        
                  </div>
                  <div className="flex items-center">
                    <Button  href="#" className='bg-[#7c6a46] '>
                      Book now
                    </Button>
                    <div className="ml-4 md:hidden">
                      <MobileNav />
                    </div>
                  </div>
                </nav>
              </Container>
            </header>
          )
        }
        

export default NavbarTwo


