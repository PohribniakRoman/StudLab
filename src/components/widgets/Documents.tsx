import { useSelector } from "react-redux";

export const Documents:React.FC<any> = ({files = [],isPublic = false}) => {
    const profile = useSelector((state: any) => state.client);
    if(!isPublic){
        files=[profile.certificates, profile.resumes]
    }
    
    return <section className="documents">
        <div className="documents__container">
            <h1 className="documents__title">Мої резюме</h1>
            <div className="documents__wrapper">
                {files[0]?.length?files[0].map((resume:any)=>{
                    <div className="documents__file">
                    <h3 className="documents__file--name">{resume.title}</h3>
                </div>}):<div className="documents__placeholder">Тут покищо пусто...</div>}
                {isPublic?"":
                <div className="documents__add">
                    <h3 className="documents__add--title">Додати файл</h3>
                </div>}
            </div>
        </div>
        <div className="documents__container">
            <h1 className="documents__title">Сертифікати</h1>
            <div className="documents__wrapper">
                {files[1]?.length?files[1].map((sertificates:any)=>{
                <div className="documents__file">
                    <h3 className="documents__file--name">{sertificates.title}</h3>
                </div>}):<div className="documents__placeholder">Тут покищо пусто...</div>
                }
                {isPublic?"":
                <div className="documents__add">
                    <h3 className="documents__add--title">Додати файл</h3>
                </div>}
            </div>
        </div>
    </section>
}