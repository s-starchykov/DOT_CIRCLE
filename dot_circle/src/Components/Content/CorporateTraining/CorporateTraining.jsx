import style from './CorporateTraining.module.css';


let CorporateTraining = (props) => {

    return (
        <div className={style.CorporateTraining}>
            <div className={style.topline}>
                <div className={style.leftContent}>
                    <img src="http://dot-circle.com/img/IMG_8513.jpg" alt=""/>
                </div>
                <div className={style.rightContent}>
                    <h1>{props.boxName}</h1>
                    <span> {props.content}</span>
                </div>
            </div>
            <div className={style.item}>
                <img src="http://www.w3.org/2000/svg" alt=""/>
                <h1>{props.itemOneName}</h1>
                {props.itemOneContent}

            </div>
            <div className={style.item}>
                <img src="http://www.w3.org/2000/svg" alt=""/>
                <h1>{props.itemTwoName}</h1>

                {props.itemTwoContent}

            </div>
            <div className={style.item}>
                <img src="http://www.w3.org/2000/svg" alt=""/>
                <h1>{[props.itemThreeName]}</h1>
                {props.itemThreeContent}
            </div>

        </div>
    )
};

export default CorporateTraining;