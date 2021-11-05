import s from "./header.module.scss"
import faq from '../../../assets/FAQ.png'

let HeaderUsful = () => {
    return (
        <div className={s.container}>
            <img src={faq} alt=""/>
            <h1>
                useful
            </h1>
            <hr/>
        </div>

    )
}

export default HeaderUsful;