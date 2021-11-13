import s from "./useful.module.scss"
import {withNamespaces} from "react-i18next";
import faq from "../../assets/FAQ.png";
import Footer from "../footer/footer";
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
        <>
            <div className={s.useful}>
                <img className={s.bgImage} src={faq} alt=""/>
                <h1>{t(name)}</h1>
                {dropdown()}
            </div>
            <Footer/>
        </>
    )
};

let mapStateToProps = (state) => ({useful: state.usefulPageReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(Useful);
