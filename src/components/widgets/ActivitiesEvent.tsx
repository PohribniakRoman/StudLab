export const ActivitiesEvent:React.FC = () =>{
    return <div className="activities__event">
        <div className="activities__event--cover"></div>
        <div className="activities__event--content">
            <h1 className="activities__event--title">Назва події</h1>
            <p className="activities__event--description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever s</p>
            <div className="activities__event--additional">Місце: <b> Київ вулиця універ</b></div>
            <div className="activities__event--additional">Час: <b>11/00/1111 час 12:00</b></div>
            <div className="activities__event--controls">
                <div className="activities__event--discuss"></div>
                <div className="activities__event--like"></div>
                <div className="activities__event--delete"></div>
            </div>
        </div>
    </div>
}