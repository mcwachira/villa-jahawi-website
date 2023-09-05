'use client';

import { Button, Navbar } from 'flowbite-react';

const MainNavbar = () => {
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href="/">

                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
        VILLA Jahawi
        </span>
            </Navbar.Brand>
            <div className="flex md:order-2 md:mr-12">
                <Button className='bg-black'>
               Book now
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="/"
                >
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="/about">
                    About
                </Navbar.Link>
                <Navbar.Link href="/services">
                    Services
                </Navbar.Link>
                <Navbar.Link href="/blog">
                 Blog
                </Navbar.Link>
                <Navbar.Link href="/contact">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}





export default MainNavbar
