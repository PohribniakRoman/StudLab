import { ReactNode } from "react"
import Button from "./ui-components/Button"

export const VacancyContainer:React.FC<{children:ReactNode}> = ({children}:{children:ReactNode}) => {
    return <div className="vacancy__container">
        <h1 className="vacancy__container--header">Гарячі вакансії</h1>
        {children}
        <Button  variant="field" title="Більше Пропозицій"/>
  </div>
}