import { ReactNode } from "react"

export const EventContainer:React.FC<{children:ReactNode}> = ({children}:{children:ReactNode}) => {
    return <div className="event__container">
        {children}
  </div>
}