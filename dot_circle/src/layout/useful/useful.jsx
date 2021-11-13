import s from "./useful.module.scss"
import {withNamespaces} from "react-i18next";
import usefulBg from "../../assets/useful_bg.png";
import {compose} from "redux";
import {connect} from "react-redux";


const Useful = ({t, name, useful}) => {

    // Map store data to item list
    const dropdown = () => useful.data.map(i =>
        <details className={s.dropdownBox}>
            <summary className={s.dropdownTitle}><h3>{t(i.title)}</h3></summary>
            <p className={s.dropdownMassage}>{t(i.message)}</p>
        </details>
    );

    return (

        <div className={s.useful}>
            <img className={s.bgImage} src={usefulBg} alt=""/>
            <h1>{t(name)}</h1>
            {dropdown()}
        </div>
    )
};

let mapStateToProps = (state) => ({useful: state.usefulPageReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(Useful);
