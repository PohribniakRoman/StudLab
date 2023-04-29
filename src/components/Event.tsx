export const Event:React.FC = () => {
    return <div className="event">
        <div className="event__cover"></div>
        <div className="event__content">
            <h1 className="event__title">Назва події</h1>
            <p className="event__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever s</p>
            <div className="event__additional">Місце: <b> Київ вулиця універ</b></div>
            <div className="event__additional">Час: <b>11/00/1111 час 12:00</b></div>
            <div className="event__controls">
                <div className="event__discuss"></div>
                <div className="event__join">
                    Хочу відвідати!
                    <div className="event__join--svg"></div>
                </div>
            </div>
        </div>
    </div>
}