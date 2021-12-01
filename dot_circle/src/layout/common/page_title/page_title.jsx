import s from './page_title.module.scss'

const PageTitle = (props) => {
    return <div className={s.title}>{props.title}</div>
};

export default PageTitle;