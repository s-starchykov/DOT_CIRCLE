import s from './page_title.module.scss'

const PageTitle = (props) => {
    let color = {color: `${props.color ?? 'white'}`};

    return <div style={color} className={s.title}>{props.title}</div>
};

export default PageTitle;