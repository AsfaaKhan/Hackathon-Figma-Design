


const Button =(props: any)=>{
    return(
    
            <section>
                <div className="bg-skyblue rounded-[5px] w-[184px] h-[52px] pt-[15px] pb-[15px] pr-10 pl-10 gap-[10px] text-white font-bold text-base text-center"  style={{letterSpacing:"0.2px"}}>{props.name}
                <h2 >{props.btn}</h2>
                </div>
                
            </section>
        
    )
    }
    export default Button