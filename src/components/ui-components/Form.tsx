import { ReactNode } from "react"

export const Form:React.FC<{children:ReactNode}> = ({children}:{children:ReactNode}) => {
    return <div className="auth__form">
        {children}
  </div>
}