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

                <h3>{props.itemOneName}</h3>
                {props.itemOneContent}

            </div>
            <div className={style.item}>

                <h3>{props.itemTwoName}</h3>

                {props.itemTwoContent}

            </div>
            <div className={style.item}>

                <h3>{props.itemThreeName}</h3>
                {props.itemThreeContent}
            </div>

        </div>
    )
};
//<svg xmlns={"http://www.w3.org/2000/svg"}>
//                 </svg>
export default CorporateTraining;