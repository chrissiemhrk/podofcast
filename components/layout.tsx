import React, { ReactChild, useState } from 'react'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import Menu from '../public/menu.svg'
import Link from 'next/link'
interface Props {
  children: ReactChild
}

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className="flex items-center justify-between bg-linen px-5 py-4 lg:justify-around">
        <div className="flex">
          <Link href={'/'}>
            <a className="mr-10">
              <Image src={Logo} alt="logo" width={70} height={70} />
            </a>
          </Link>
          <nav className="hidden lg:flex lg:w-96 lg:items-center lg:justify-between">
            <div className="flex w-52 justify-between">
              <Link href={'#'}>
                <a className="font-bold">Episodes</a>
              </Link>
              <Link href={'#'}>
                <a className="font-bold">About</a>
              </Link>
              <Link href={'#'}>
                <a className="font-bold">Blog</a>
              </Link>
            </div>
          </nav>
        </div>
        <div className="hidden lg:flex lg:w-80 lg:items-center  lg:justify-between">
          <button className="text-red-500 rounded-lg border-2 border-black px-5 py-2 font-bold">
            Recent Episodes
          </button>
          <button className="rounded-lg bg-black px-6 py-2 font-bold text-white shadow-subscribeBtn">
            Subscribe
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="block lg:hidden">
          <Image src={Menu} alt="menu" width={30} height={30} />
        </button>

        {isOpen && (
          <div className="absolute top-28 left-0 w-full bg-linen px-6 py-5 lg:hidden">
            <nav className="flex flex-col text-lg">
              <Link href={'#'}>
                <a className="mb-3 font-bold">Episodes</a>
              </Link>
              <Link href={'#'}>
                <a className="mb-3 font-bold">About</a>
              </Link>
              <Link href={'#'}>
                <a className="mb-3 font-bold">Blog</a>
              </Link>
            </nav>
            <div className="mt-5 flex flex-col">
              <button className="text-red-500 mb-5 rounded-lg border-2 border-black px-5 py-2 font-bold">
                Recent Episodes
              </button>
              <button className="rounded-lg bg-black px-6 py-2 font-bold text-white shadow-subscribeBtn">
                Subscribe
              </button>
            </div>
          </div>
        )}
      </header>
      <main className="h-screen">{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
