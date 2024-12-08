


const SubmitButton =(props: any)=>{
    return(
    
            <section>
                <div className=" rounded-[37px] border  border-skyblue  w-[184px] h-[52px] pt-[15px] pb-[15px] pr-[36px] pl-[36px] gap-[10px] text-skyblue font-bold text-sm leading-[24px] text-center items-center "  style={{letterSpacing:"0.2px"}}>{props.name}
                <h2 >{props.btn}</h2>
                </div>
                
            </section>
        
    )
    }
    export default SubmitButton