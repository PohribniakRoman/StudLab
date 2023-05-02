import {useRef,useCallback,useState} from "react";
const sldierData = [{url:"ABC"},{url:"ASD"},{url:"ZXC"},{url:"123"}];

export const Slider:React.FC = () => {
    const slip = useRef<any>();
    const updateSlider = useCallback((ind:number)=>{
        slip.current.style.transform=`translateX(-${ind*1300}px)`;
    },[])
    const [activeDot,setActive] = useState<number>(0);
    
    return <div className="slider__container">
        <div className="slider__wrapper">
            <section className="slider">
                <div ref={slip} className="slider__slip">
                    {sldierData.map(el=>{
                        return <div className="slider__content">
                            {el.url}
                        </div>
                    })}
                </div>
            </section>
        </div>
        <section className="slider__dots">
            {sldierData.map((el,ind)=>{
                return <div onClick={()=>{updateSlider(ind);setActive(ind)}} className={`slider__dots--item ${activeDot===ind?"active_dot":""}`}></div>
            })}
        </section>
    </div>
}