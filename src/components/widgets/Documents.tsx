export const Documents:React.FC = () => {
    return <section className="documents">
        <div className="documents__container">
            <h1 className="documents__title">Мої резюме</h1>
            <div className="documents__wrapper">
                <div className="documents__file">
                    <h3 className="documents__file--name">Назва Файлу</h3>
                </div>
                <div className="documents__add">
                    <h3 className="documents__add--title">Додати файл</h3>
                </div>
            </div>
        </div>
        <div className="documents__container">
            <h1 className="documents__title">Сертифікати</h1>
            <div className="documents__wrapper">
                <div className="documents__file">
                    <h3 className="documents__file--name">Назва Файлу</h3>
                </div>
                <div className="documents__add">
                    <h3 className="documents__add--title">Додати файл</h3>
                </div>
            </div>
        </div>
    </section>
}