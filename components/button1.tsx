
const Button1 =(props: any)=>{
    return(
    
            <section>
                <div className="bg-white border-[1px] w-[136px] h-[48px] pt-3 pb-3 pr-12 pl-12 gap-[10px]text-darkBlue font-bold text-base text-center  flex justify-center items-center"
                style={{letterSpacing:"0.1px"}}>{props.name}
                <h2 >{props.btn}</h2>
                </div>
                
            </section>
        
    )
    }
    export default Button1