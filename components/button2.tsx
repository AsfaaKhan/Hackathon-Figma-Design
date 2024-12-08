
const Button2  =(props: any)=>{
    return(
    
            <section>
                <div className="bg-[#2DC071] rounded-[5px] w-[184px] h-[52px] pt-[15px] pb-[15px] pr-10 pl-10 gap-[10px]">{props.name}
                <h2 className="text-white font-bold text-base text-center" style={{letterSpacing:"0.2px"}}>{props.btn}</h2>
                </div>
                
            </section>
        
    )
    }
    export default Button2