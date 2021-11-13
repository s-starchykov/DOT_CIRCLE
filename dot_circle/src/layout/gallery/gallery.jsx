import s from './gallery.module.scss'
import Gallery from 'react-grid-gallery';
import {withNamespaces} from "react-i18next";
import {compose} from "redux";
import {connect} from "react-redux";
import Footer from "../footer/footer";

const PhotoGallery = ({t, name, photos}) => {

    let tagStyle = () => ({
        display: 'inline',
        padding: '0.2em 0.6em 0.3em',
        fontSize: '75%',
        fontWeight: 600,
        lineHeight: 1,
        color: 'white',
        background: 'rgb(239 127 26 / 78%)',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'baseline',
        borderRadius: '0.25em'
    })

    let data = photos.images.map((i) => ({
        src: `${process.env.PUBLIC_URL}/gallery/${i.src}`,
        thumbnail: `${process.env.PUBLIC_URL}/gallery/thumbs/${i.thumbnail}`,
        thumbnailWidth: i.thumbnailWidth ?? 350,
        thumbnailHeight: i.thumbnailHeight ?? 250,
        tags: [{value: `${t(i.tags[0].value)}`, title: "Open programs"}],
        caption: i.caption ?? 'Some text'
    }))


    return (
        <>
            <div className={s.gallery}>
                <h1>{t(name)}</h1>
                <Gallery enableImageSelection={false} images={data} tagStyle={tagStyle()}/>
            </div>
            <Footer/>
        </>
    )
}

let mapStateToProps = (state) => ({photos: state.galleryReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(PhotoGallery);