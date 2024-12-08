
export default function HeroPage() {
    return (
        <div>
            {/* Backgrounde Image */}
            <div className="relative bg-[url('/images/bgImg.svg')] bg-cover bg-center bg-no-repeat h-[730px] ">
                <div className="flex gap-20 pt-[112px] pb-[112px] lg:w-auto xl:w-[1044px]  ">

                    <div className="relative  z-10 max-w-2xl mx-auto  flex flex-col  text-center items-center lg:text-left lg:flex-row lg:justify-between lg:items-start text-white gap-[35px] lg:w-[599px]  ">
                        <div className="flex flex-col gap-[35px]">
                            <h5 className="  font-bold text-base  ">SUMMER 2020</h5>
                            <h2 className="font-bold text-[40px] md:text-[50px] lg:text-[58px] w-[268px]  leading-[50px] ">NEW
                                COLLECTION</h2>
                            <h4 className="font-normal text-xl leading-[30px]  w-[219px]" style={{"letterSpacing":"0.2px"}}>We know how large objects
                                will act, but things on a
                                small scale.</h4>

                            <div className="rounded-[5px] pt-[15px] pb-[15px] pr-[40px] pl-[40px] gap-[10px] bg-[#2DC071] w-[221px] text-white font-bold text-2xl text-center">
                                <span>SHOP NOW</span>
                            </div>
                        </div>

                        <div className= "lg:block  lg:w-[415px] lg:h-[280px]">
                        
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}