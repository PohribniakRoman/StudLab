import { Logo } from "./menu/logo"
import { InstaLogo } from "./ui-components/InstaLogo"
import { WebLabLogo } from "./ui-components/WebLabLogo"

export const Footer:React.FC = () =>{
    return <section className="footer">
        <div className="footer__container">
        <Logo variant="default"/>
        <div className="footer__wrapper">
            <h3 className="footer__watermark">Developed by WebLab</h3>
            <WebLabLogo className="footer__logo"/>
            <h3 className="footer__watermark">® All rights reserved 2023</h3>
        </div>
        <InstaLogo/>
        </div>
    </section>
}