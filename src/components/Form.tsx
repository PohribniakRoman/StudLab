import { ReactNode } from "react"

export const Form:React.FC<{children:ReactNode}> = ({children}:{children:ReactNode}) => {
    return <form className="auth__form">
      <div className="auth__form--container">
        {children}
      </div>
  </form>
}