import { Slash } from "lucide-react"
import SubmitButton from "@/components/submitbtn"
import { LuPhone } from "react-icons/lu"
import { FiMapPin } from "react-icons/fi"
import { TfiEmail } from "react-icons/tfi"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"
import Header from "@/components/header"
import Image from "next/image"
export default function Price() {
    return (
        <div>

            {/* Header */}
            <Header />

            <div className="pt-[80px] pb-[80px] gap-[96px]">
                <div className="container  gap-[36px1]
                    ">
                    {/* Heading */}
                    <div className="container pt-[80px] pb-[80px] flex flex-col justify-center items-center text-center gap-[10px]">
                        <p className="font-bold text-base  text-darkBlue" style={{ "letterSpacing": "0.1px" }}>PRICING </p>
                        <h3 className="font-bold text-[58px] leading-[80px] text-darkBlue" style={{ "letterSpacing": "0.2px" }}>Simple Pricing</h3>

                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <Slash />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/productPage" className="text-black">Pricing</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>


                    </div>

                    <div className=" container pt-[80px] pb-[80px] flex flex-col justify-center items-center text-center  gap-[30px]">
                        <h3 className="font-bold text-[40px] leading-[50px] text-darkBlue" style={{ "letterSpacing": "0.2px" }}>PRICING</h3>
                        <p className="font-bold text-base  text-darkBlue" style={{ "letterSpacing": "0.1px" }}> Problems trying to resolve the conflict between
                            the two major realms of Classical physics: Newtonian mechanics </p>

                        <Image src={"/images/switch.svg"}
                            alt="switch"
                            width={311}
                            height={44}>

                        </Image>




                    </div>
                </div>

                <div>
                    <div className="container grid grid-cols-1 lg:grid-cols-3 justify-center items-center text-center   ">
                        <div className="w-[327px ] h-[333px] bg-white flex flex-col justify-center text-center items-center  gap-[15px] pt-[50px] pb-[50px] pr-[40px] pl-[40px] " >
                            <LuPhone size={72} className="text-skyblue" />
                            < p className="text-darkBlue font-bold text-sm leading-[24px] " style={{ letterSpacing: "0.2" }}>{`georgia.young@example.com `} <br />
                                {` georgia.young@ple.com`}</p>
                            <p className="text-darkBlue font-bold text-base leading-[24px] " style={{ letterSpacing: "0.1" }}>Get Support</p>
                            <SubmitButton name="Submit Request" />
                        </div>

                        <div className="w-[327px ] h-[333px] bg-darkBlue flex flex-col justify-center text-center items-center  gap-[15px] pt-[50px] pb-[50px] pr-[40px] pl-[40px] " >
                            <FiMapPin size={72} className="text-skyblue" />
                            < p className=" text-white  font-bold text-sm leading-[24px] " style={{ letterSpacing: "0.2" }}>{`georgia.young@example.com `} <br />
                                {` georgia.young@ple.com`}</p>
                            <p className=" text-white  font-bold text-base leading-[24px] " style={{ letterSpacing: "0.1" }}>Get Support</p>
                            <SubmitButton name="Submit Request" />
                        </div>
                        <div className="w-[327px ] h-[333px] bg-white flex flex-col justify-center text-center items-center  gap-[15px] pt-[50px] pb-[50px] pr-[40px] pl-[40px] " >
                            <TfiEmail size={72} className="text-skyblue" />
                            < p className="text-darkBlue font-bold text-sm leading-[24px] " style={{ letterSpacing: "0.2" }}>{`georgia.young@example.com `} <br />
                                {` georgia.young@ple.com`}</p>
                            <p className="text-darkBlue font-bold text-base leading-[24px] " style={{ letterSpacing: "0.1" }}>Get Support</p>
                            <SubmitButton name="Submit Request" />
                        </div>

                    </div>
                </div>

                <div className="container pt-[80px] pb-[80px]">
                    <div className="bg-[#fafafa]">
                        <div className="flex flex-col justify-center items-center text-center gap-[10px]">
                            <h3 className="font-bold text-[40px] leading-[50px] text-darkBlue" style={{ letterSpacing: "0.2px" }}>Trusted By Over 4000 Big Companies</h3>
                            
                        </div>

                        <div className="container pt-[50px] pb-[50px] gap-[30px]">
                            <div className="">
                                <div className="container pt-[50px] pb-[50px] gap-[30px] grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6  ">
                                    <Image src={"/productcard/11.svg"}
                                        alt="client"
                                        width={151}
                                        height={42}></Image>
                                    <Image src={"/productcard/12.svg"}
                                        alt="client"
                                        width={151}
                                        height={42}></Image>
                                    <Image src={"/productcard/13.svg"}
                                        alt="client"
                                        width={151}
                                        height={42}></Image>
                                    <Image src={"/productcard/14.svg"}
                                        alt="client"
                                        width={151}
                                        height={42}></Image>
                                    <Image src={"/productcard/15.svg"}
                                        alt="client"
                                        width={151}
                                        height={42}></Image>
                                    <Image src={"/productcard/16.svg"}
                                        alt="client"
                                        width={151}
                                        height={42}></Image>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}