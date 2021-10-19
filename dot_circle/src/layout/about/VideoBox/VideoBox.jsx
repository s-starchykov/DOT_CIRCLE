import style from './VideoBox.module.css'

let VideoBox = (props) => {
    return (

        <div className={style.VideoBox}>
            <div className={style.leftContent}>
                <iframe src={props.link}>
                    video is not available
                </iframe>
            </div>

            <div className={style.rightContent}>
                <h1>{props.name}</h1>
                <span>{props.text}</span>
            </div>

        </div>
    )
};

export default VideoBox;