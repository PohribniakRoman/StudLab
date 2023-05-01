const sldierData = [{url:""},{url:""},{url:""},{url:""}];

export const Slider:React.FC = () => {
    return <div className="slider__container">
        <div className="slider__wrapper">
            <section className="slider">
                <div className="slider__content"></div>
            </section>
        </div>
        <section className="sldier__dots">
            {sldierData.map(el=>{
                return <div className="sldier__dots--item"></div>
            })}
        </section>
    </div>
}