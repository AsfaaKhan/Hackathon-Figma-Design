"use client"
import { useState } from "react"
import Link from "next/link"
import { Inter } from "next/font/google"
import { CiSearch } from "react-icons/ci"
import { BiMenuAltRight } from "react-icons/bi";import { CiHeart } from "react-icons/ci"
import { FaRegUser } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"




// FONT INTER
const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Header() {
    const [navbar, setNavbar] = useState(false)

    const handleNavbar = () => {
        setNavbar(!navbar);
    }
    return (
        <div>
            <nav className="">
                <div className=" container h-[58px] mx-auto  flex gap-16 items-center text-center justify-between ">
                    {/*             LOGO                    */}
                    <div className="w-[187px] text-2xl font-bold text-darkBlue bg-[#ffffff]">
                        <h3>Bandage</h3>
                    </div>

                    <div className="flex justify-beween   w-auto">

                        {/*             NAVBAR ITEMS                  */}
                        <div className=" hidden lg:flex gap-[15px]    font-bold   justify-center items-center text-sm leading-6 text-gray text-center w-[361px]" style={{ "letterSpacing": "0.1px" }}>
                            <Link className="  hover:underline hover:text-darkBlue  " href="/">Home</Link>
                            <Link href="/productPage"> 
                            <Select>
                                <SelectTrigger >
                                    <SelectValue placeholder="Shop" className="text-darkBlue" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Shop Now</SelectLabel>
                                        <SelectItem value="apple">1</SelectItem>
                                        <SelectItem value="banana">2</SelectItem>
                                        <SelectItem value="blueberry">3</SelectItem>
                                        <SelectItem value="grapes">4</SelectItem>
                                        <SelectItem value="pineapple">5</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            </Link>
                            <Link className="  hover:underline hover:text-darkBlue  " href={"/aboutPage"}>About</Link>
                            <Link className="  hover:underline hover:text-darkBlue  " href="#contact">Blog</Link>
                            <Link className=" hover:underline hover:text-darkBlue " href="/contactPage"> Contact</Link>
                            <Link className=" hover:underline hover:text-darkBlue  " href="/productPage"> Pages</Link>
                        </div>


                        {/*         Navbar Icons Anths        */}
                        <div className="flex  items-center ">

                            <div className=" ">
                                <button className=" hidden text-skyblue lg:flex justify-center text-center items-center">
                                    <FaRegUser size={12} />
                                    <Link href={"/"} className="font-bold   text-sm " style={{ "letterSpacing": '0.2px' }}>Login / Register</Link>
                                </button>
                            </div>
                            {/* btn1 */}
                            <div>
                                <button className="text-darkBlue rounded-[37px] p-[15px] gap-[5px] lg:text-skyblue" >
                                    <CiSearch size={16} />
                                </button>
                            </div>
                            {/* btn2 */}
                            <div className=" ">
                                <button className="text-darkBlue flex  gap-1  rounded-[37px] p-[15px] gp-[5px] lg:text-skyblue">
                                    <PiShoppingCart size={16} />
                                    <span>1</span>
                                </button>
                            </div>
                            {/* btn3 */}
                            <div className="">
                                <button className="hidden lg:flex gap-1 rounded-[37px] p-[15px] gp-[5px] text-skyblue">
                                    <CiHeart size={16} />
                                    <span>1</span>
                                </button>

                            </div>

                        </div>
                    </div>

                    {/* HAMBURGER FOR SMALL DEVICES / MOBILES  */}
                    <div className="lg:hidden  flex text-black  cursor-pointer  " onClick={handleNavbar} >
                        <BiMenuAltRight className="text-4xl  hover:text-darkBlue w-8 h-8" />
                    </div>
                </div>

                {navbar && (
                    <div className={`lg:hidden bg-white p-4 border-[2px] text-center  ${inter.className}`}>
                        <Link href="/" className="block text-black  py-2   hover:underline hover:text-darkBlue " onClick={handleNavbar}>Home</Link>

                        <Link href="/productPage" className="block text-black py-2  hover:underline hover:text-darkBlue " onClick={handleNavbar}>Product</Link>

                        <Link href="/price" className="block text-black py-2  hover:underline hover:text-darkBlue " onClick={handleNavbar}>Pricing</Link>

                        <Link href="/contactPage" className="block text-black py-2  hover:underline hover:text-darkBlue " onClick={handleNavbar}>Contact</Link>
                    </div>
                )}
            </nav>

            <div className="border-[0.5px] border-black border-opacity-30  "></div>

        </div>
    )
}