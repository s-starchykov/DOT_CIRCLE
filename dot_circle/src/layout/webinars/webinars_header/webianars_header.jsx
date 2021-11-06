import s from './webinars.module.scss'
import webinar_header from "../../../assets/webinar_bg.png"

const WebinarsHeader = () => {
    return (
        <div className={s.container}>
            <img src={webinar_header} alt=""/>
            <p>This is a modern and effective consultation format that allows you to improve your performance on the
                job, save time and money, and provides you with full-fledged skills and knowledge.</p>
        </div>
    )
}

export default WebinarsHeader();