import Image from "next/image"

export default function Product() {
    return (
        <div>

            <div className="pt-20 pb-20 gap-20 ">


                {/* Heading */}
                <div className="flex flex-col justify-center items-center text-center gap-[10px]  ">
                    <h4 className="font-normal text-xl leading-[30px] text-gray  " style={{ letterSpacing: "0.2px" }}>Featured Products</h4>
                    <h3 className="font-bold text-2xl text-darkBlue" style={{ letterSpacing: "0.1px" }}>BESTSELLER PRODUCTS</h3>
                    <p className="text-gray font-normal text-sm " style={{ letterSpacing: "0.2px" }}>Problems trying to resolve the conflict between </p>
                </div>

                {/*  Image Cards */}
                <div className="flex flex-col  mt-20 mb-20 ">

                {/* 1st Row */}
                <div className="container grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-[48px] ">
                    {/* 1st */}
                    <div className="flex flex-col h-[615px] items-center text-center  ">
                        {/* Image */}
                        <div>
                            <Image src={"/product/1.svg"}
                                alt="product "
                                width={239}
                                height={427}>

                            </Image>
                        </div>
                        {/* Text */}
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>

                            <div>
                                <Image src={"/images/product-colors.svg"}
                                    alt="product "
                                    width={82}
                                    height={16}>
                                </Image>
                            </div>
                        </div>
                    </div>

                    {/* 2nd */}
                    <div className="flex flex-col h-[615px] items-center text-center ">
                        {/* Image */}
                        <div>
                            <Image src={"/product/2.svg"}
                                alt="product "
                                width={239}
                                height={427}>

                            </Image>
                        </div>
                        {/* Text */}
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>

                            <div>
                                <Image src={"/images/product-colors.svg"}
                                    alt="product "
                                    width={82}
                                    height={16}>
                                </Image>
                            </div>
                        </div>
                    </div>

                    {/* 3rd*/}
                    <div className="flex flex-col h-[615px] items-center text-center  ">
                        {/* Image */}
                        <div>
                            <Image src={"/product/3.svg"}
                                alt="product "
                                width={239}
                                height={427}>

                            </Image>
                        </div>
                        {/* Text */}
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>

                            <div>
                                <Image src={"/images/product-colors.svg"}
                                    alt="product "
                                    width={82}
                                    height={16}>
                                </Image>
                            </div>
                        </div>
                    </div>

                    {/* 4th */}
                    <div className="flex flex-col h-[615px] items-center text-center  ">
                        {/* Image */}
                        <div>
                            <Image src={"/product/4.svg"}
                                alt="product "
                                width={239}
                                height={427}>

                            </Image>
                        </div>
                        {/* Text */}
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>

                            <div>
                                <Image src={"/images/product-colors.svg"}
                                    alt="product "
                                    width={82}
                                    height={16}>
                                </Image>
                            </div>
                        </div>
                    </div>

                </div>

                {/* 2nd Row */}
                <div className="container grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-[48px]  ">
                    {/* 1st */}
                    <div className="flex flex-col h-[615px] items-center text-center  ">
                        {/* Image */}
                        <div>
                            <Image src={"/product/5.svg"}
                                alt="product "
                                width={239}
                                height={427}>

                            </Image>
                        </div>
                        {/* Text */}
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>

                            <div>
                                <Image src={"/images/product-colors.svg"}
                                    alt="product "
                                    width={82}
                                    height={16}>
                                </Image>
                            </div>
                        </div>
                    </div>

                    {/* 2nd */}
                    <div className="flex flex-col h-[615px] items-center text-center ">
                        {/* Image */}
                        <div>
                            <Image src={"/product/6.svg"}
                                alt="product "
                                width={239}
                                height={427}>

                            </Image>
                        </div>
                        {/* Text */}
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>

                            <div>
                                <Image src={"/images/product-colors.svg"}
                                    alt="product "
                                    width={82}
                                    height={16}>
                                </Image>
                            </div>
                        </div>
                    </div>

                    {/* 3rd*/}
                    <div className="flex flex-col h-[615px] items-center text-center  ">
                        {/* Image */}
                        <div>
                            <Image src={"/product/7.svg"}
                                alt="product "
                                width={239}
                                height={427}>

                            </Image>
                        </div>
                        {/* Text */}
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>

                            <div>
                                <Image src={"/images/product-colors.svg"}
                                    alt="product "
                                    width={82}
                                    height={16}>
                                </Image>
                            </div>
                        </div>
                    </div>

                    {/* 4th */}
                    <div className="flex flex-col h-[615px] items-center text-center  ">
                        {/* Image */}
                        <div>
                            <Image src={"/product/8.svg"}
                                alt="product "
                                width={239}
                                height={427}>

                            </Image>
                        </div>
                        {/* Text */}
                        <div className="pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-center items-center justify-center ">
                            <div >
                                <h5 className="text-darkBlue font-bold text-base" style={{ letterSpacing: "0.1px" }} >Graphic Design</h5>

                            </div>
                            <div>
                                <h5 className="font-bold text-sm text-gray  " style={{ letterSpacing: "0.2px" }} >English Department</h5>
                            </div>

                            <div className="pt-[5px] pb-[5px] pl-[3px] pr-[3px] gap-[5px] flex  text-center">
                                <h5 className="text-lightgray font-bold text-base" style={{ letterSpacing: "0.1px" }} >$16.48</h5>
                                <h5 className="text-green font-bold text-base" style={{ letterSpacing: "0.1px" }} >$6.48</h5>
                            </div>

                            <div>
                                <Image src={"/images/product-colors.svg"}
                                    alt="product "
                                    width={82}
                                    height={16}>
                                </Image>
                            </div>
                        </div>
                    </div>

                </div>

                </div>

            </div>
        </div>

    )
}