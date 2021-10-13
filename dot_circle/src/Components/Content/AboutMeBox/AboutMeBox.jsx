 import style from "./AboutMeBox.module.css"

let AboutMeBox = () => {
    return (
        <div className={style.AboutMeBox}>
            <div className={style.leftContent}>
                <h1>
                    ДАВАЙТЕ ПОЗНАКОМИМСЯ ?
                </h1>
                <p>
                    Hello everyone, my name is Anar! I am a business coach, business consultant, mentor and coach. I have a higher economic, social, business, training and coaching education, which I received throughout my life. Since 1998 I have been conducting business consultations for more than 50 companies in the areas of doing business, restructuring, business development, integrating business into new markets, as well as attracting investors. I am an author of several projects: “Tridend Project”; “Entertaiment & Amusement Park”, “Lotus Residence”, etc. I am the founder of the company - “Dot & Circle” since 2018, co-founder of the British consulting company - Altempus Capital, founder of the commercial company "Arkade" and the co-founder of the Investment Group - TMWIG Ltd USA. I began my coaching and trainer career in the 2000s. I am the author of the mentoring programs for personal growth and development in business and the corporate environment. I develop and conduct my training programs according to my own developed model based on the discovery of internal opportunities hidden inside of an individual and the development of creative potential and creativity, both from business development and personal growth perspectives. ⠀ From early ages I am interested in and engage in oriental martial arts. As a result, I am a master of martial arts, the owner of the 6th dan of the black belt. At present, I am Vice President of the Hap Ki Do Federation of Azerbaijan, as well as co-founder of the Su Bak Do Federation. My 20 years’ experience in martial arts is reflected in the books “The Encyclopedia of Martial Arts” and “The Primer in Taekwon Do,” I am a co-author of. I have been practicing the Eastern - Orthodox system of yogis for 30+ years. I have a unique experience in the study of human nature. I know for certain that the whole world is enclosed in the mind of man. Therefore, based on my methodology for working with people, I use unique meditative techniques, systems of internal concentration and disclosure of hidden talents. My goal is to share my experience and skills with you, and create the best conditions for your comprehensive development and maximum self-realization.
                </p>

            </div>
            <div className={style.rightContent}>
                <img src="http://dot-circle.com/img/Anar3.jpg" alt="#"/>
                <div className="social">
                    {/*<img src="" alt="logo" className={style.socialLogo}/>*/}
                    {/*<img src="" alt="logo" className={style.socialLogo}/>*/}
                    {/*<img src="" alt="logo" className={style.socialLogo}/>*/}

                </div>
            </div>



        </div>
    )
};


export default AboutMeBox;