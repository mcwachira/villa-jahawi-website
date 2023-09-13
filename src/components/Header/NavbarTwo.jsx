import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import { Menu, Popover, Transition, Disclosure } from '@headlessui/react'
import logo from '@/images/logos/png/Black-logo-no-background.png'
import MenuIcon from './MenuIcon'
import Container from '../container/Container'
import Button from '../Button/Button'
import ThemeToggler from './ThemeToggler'
import { useTheme } from 'next-themes'

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

  const {theme, setTheme} = useTheme();

const router = useRouter()
    const pathname = usePathname()

       const [sticky, setSticky] = useState(false)

    const handleStickyNavbar = () => {
        if(window.scrollY >=80){
            setSticky(true)
          }else{
            setSticky(false)
          }
        }

        
        useEffect(() => {

            window.addEventListener('scroll', handleStickyNavbar)
        },[]
        )
  function MenuIcon({ open }) {
    return (
      <span className="relative h-3.5 w-4 transform transition duration-500 ease-in-out">
        <span
          className={clsx(
            'absolute block h-0.5 rotate-0 transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900',
            open ? 'top-1.5 left-1/2 w-0' : 'top-0 left-0 w-full'
          )}
        />
        <span
          className={clsx(
            'absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900',
            open ? 'rotate-45' : 'rotate-0'
          )}
        />
        <span
          className={clsx(
            'absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900',
            open ? '-rotate-45' : 'rotate-0'
          )}
        />
        <span
          className={clsx(
            'absolute block h-0.5 rotate-0 transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900',
            open ? 'top-1.5 left-1/2 w-0' : 'left-0 top-3 w-full'
          )}
        />
      </span>
    )
  }


  function MobileNav() {
    return (
      <Popover>
        <Popover.Button
          className="group relative z-50 flex cursor-pointer items-center justify-center rounded-full bg-slate-100/80 p-3 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5 transition duration-300 ease-in-out hover:bg-slate-200/60 focus:outline-none md:hidden  "
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
              className={clsx("absolute inset-x-0 top-full z-30 mt-4 origin-top overflow-hidden rounded-2xl bg-slate-50 px-6 py-7 shadow-xl shadow-sky-100/40 ring-1 ring-slate-900/5", theme==='dark'? 'bg-[#1D1E30]': 'bg-white')}
            >
              <div>
                <div className="flex flex-col space-y-4">
                  {links?.map((link) => (
                    <Link
                      key={`${link.label}-mobile`}
                      href={link.href}
                      className="block text-2xl font-semibold text-slate-700 duration-200 hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  ))}
<ThemeToggler />
                </div>
              </div>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    )
  }


  // sticky ? "!fixed !z-[9999] !bg-white !bg-opacity-100 shadow-sticky backdrop-blur-sm !transition dark:!bg-[#121212] dark:!bg-opacity-20":""
  return (
    <header className={clsx("h-24 border-b  w-full  border-slate-200/80"
    ,sticky ? "!fixed !z-[9999] !bg-opacity-100 shadow-sticky backdrop-blur-sm":"",theme==='light'? '!bg-white':'!bg-[#1D1E30]' )}> 
    {/* absolute */}
      <Container className="flex h-full w-full items-center">
        <nav className="relative z-50 flex w-full items-center justify-between">
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              aria-label="Home"
              className="flex flex-shrink-0 items-center"
            >
              <Image
                src={logo}
                alt=""
                width={200} height={200} 
                className="h-12 w-auto sm:h-12 md:hidden lg:block lg:h-20 dark:hidden"
              />
              {/* <Image
                src='/logo/png/white.png'
                alt=""
                width={50} height={50} 
                className="h-8 w-auto sm:h-9 md:hidden lg:hidden lg:h-10 dark:block"
              /> */}
            </Link>
          </div>
          <div className="hidden items-center md:flex md:space-x-6 lg:space-x-8">
            {links?.map((link) => (
              <Link
                key={`${link.label}-desktop`}
                href={link?.href}
                className={clsx(
                  'relative duration-200 text-2xl after:absolute after:left-1/2 after:-bottom-2.5 after:h-0.5 after:w-4 after:-translate-x-1/2 after:rounded-full after:bg-slate-900 after:opacity-0 after:content-[""]',
                 pathname === link.href
                    ? 'font-semibold text-slate-900 after:opacity-100'
                    : 'font-medium text-slate-700 hover:text-slate-900 hover:after:opacity-25'
                )}
              >
                {link.label}
              </Link>
            ))}

<ThemeToggler />
          </div>
          <div className="flex items-center">
            <Button className="bg-[#7C6A46] text-white border-white
            " variant="secondary" href="#">
              Book a call
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