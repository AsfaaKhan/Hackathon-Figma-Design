import HeadLine2 from "@/components/headline2"
import Header from "@/components/header"
import ProductCard from "@/components/productList"
import { Slash } from "lucide-react"
import Button from "@/components/button"
import Button1 from "@/components/button1"
import { CiGrid41 } from "react-icons/ci";
import { FaListCheck } from "react-icons/fa6";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb"
import Image from "next/image"


export default function ProductList() {
    return (
        <div>

            {/* Headline */}
            <div>
                <HeadLine2 />
            </div>

            {/* Header */}
            <Header />

            {/*  */}
            <div>

                {/* Heading */}
                <div className="pt-[24px] pb-[24px] bg-[#FAFAFA]">
                <div className="container flex flex-col md:flex-row md:justify-between gap-[30px]">
                    <div><h3 className="font-bold text-2xl " style={{ letterSpacing: "0.1px" }}>Shop</h3></div>
                    <div >
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <Slash />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/productPage" className="text-black">Shop</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>

                </div>
                
                {/* Cards*/}
                <div className="bg-[#FAFAFA]">
                    <div className="pb-[48px] container gap-[15px] grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-5 ">
                        <div>
                            <Image src={"/productcard/1.svg"}
                            alt="cards"
                            width={333}
                            height={300}></Image>
                        </div>
                        <div>
                            <Image src={"/productcard/2.svg"}
                            alt="cards"
                            width={333}
                            height={300}></Image>
                        </div>
                        <div>
                            <Image src={"/productcard/3.svg"}
                            alt="cards"
                            width={333}
                            height={300}></Image>
                        </div>
                        <div>
                            <Image src={"/productcard/4.svg"}
                            alt="cards"
                            width={333}
                            height={300}></Image>
                        </div>
                        <div>
                            <Image src={"/productcard/5.svg"}
                            alt="cards"
                            width={333}
                            height={300}></Image>
                        </div>
                    </div>

                </div>

                {/* Result */}
                <div className="container pt-6 pb-6 gap-20 flex flex-col lg:flex-row  items-center text-center lg:justify-between">

                    <div><h6>Showing all 12 results
                    </h6></div>

                    <div className="flex  gap-[15px] pr-[1px] pl-[1px] ">
                    
                        <h6>Views:
                        </h6>
                        <CiGrid41 />
                        <FaListCheck/>
                        </div>

                        <div className="pr-[1px] pl-[1px] gap-[15px] flex ">
                          <Button1  name="Popularity" />  
                        <Button name="Filter"/>
                        </div>
                    </div>

                    {/* Client */}
                 <div className="bg-lightgray ">
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


           


            {/* Product deatil */}
            <ProductCard />

          
        </div>
    )
}