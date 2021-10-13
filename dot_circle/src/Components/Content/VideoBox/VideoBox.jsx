import style from './VideoBox.module.css'

let VideoBox = (props) => {
    return (

        <div className={style.VideoBox}>
            <div className="rightContent">
                <link href={props.link}>
                </link>
                 {props.link}
            </div>
            <div className="leftContent">
                <h1x>{props.name}</h1x>
                <span>{props.content}</span>
            </div>
        </div>
    )
};

export default VideoBox;