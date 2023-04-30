export const Vacancy:React.FC = () => {
   return <div className="vacancy">
        <h1 className="vacancy__title">Ескортниця</h1>
        <h1 className="vacancy__description">Повна зайнятість, неповна зайнятість. Також готові взяти студента.Молодий та дружний колектив у пошуку нових співробітників. Ми шукаємо амбітних, комунікабельних та бажаючих…⁠</h1>
        <div className="vacancy__controls">
            <button className="vacancy__save">Зберегти</button>
            <button className="vacancy__send">Відгукнутися</button>
        </div>
        <div className="vacancy__cover"></div>
   </div>
}