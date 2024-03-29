import { BellIcon, SearchIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
import BasicMenu from "./BasicMenu"
import Image from "next/image"
import netflix from "../public/Nlogo.svg"

function Header() {

    const [isScrolled, setIsScrolled] = useState(false)
    const { logout } = useAuth()

    useEffect(() => {
        const HandleScroll = () => {
            if(window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        } 

        window.addEventListener("scroll", HandleScroll)
        
        return () => {
            window.removeEventListener("scroll", HandleScroll)
        }
    }, [])

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
            <Image src={netflix}
            alt=""
            width={80}
            height={80}
            className="cursor-pointer object-contain"
            />

        <BasicMenu/>

        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
        </div>
        
        <div className="flex items-center space-x-4 text-sm font-light">
            <SearchIcon className="hidden h-6 w-6 sm:inline"/>
            <p className="hidden lg:inline">Kids</p>
            <BellIcon className="h-6 w-6"/>
            <Link href="/account">
                <Image 
                src="https://rb.gy/g1pwyx" alt="" className="cursor-pointer rounded" width={25} height={25}/>
            </Link>
        </div>
    </header>
  )
}

export default Header