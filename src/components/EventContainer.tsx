import { ReactNode } from "react"

export const EventContainer:React.FC<{children:ReactNode}> = ({children}:{children:ReactNode}) => {
    return <div className="event__container">
      <h1 className="event__container--title">Заходи & Події</h1>
        {children}
  </div>
}