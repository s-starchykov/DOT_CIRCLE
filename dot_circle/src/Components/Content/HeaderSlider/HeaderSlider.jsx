import style from './HeaderSlider.module.css'
import React, {useState, useEffect} from "react"
import {useRef, Rerousel} from "react"

const text = [

<div className={style.sliderElement}>
    <h1>GOALS</h1>
    <br/>
    <p>We look for tools to achieve the desired changes in our lives
    </p>
</div>,
    <div className={style.sliderElement}>
        <h1>GOALS</h1>
        <br/>
        <p>To study effective technologies and apply them
        </p>
    </div>,
    <div className={style.sliderElement}>
        <h1>GOALS</h1>
        <br/>
        <p>e create the best conditions for the full development and maximum self-realization of the individual, for professional growth and the realization of higher expectations in personal life and in the field of career growth - improve the quality of life!
        </p>
    </div>,
    <div className={style.sliderElement}>
        <h1>VAlues</h1>
        <br/>
        <p>Individual approach
            Continuous development
            70% Practice - 30% Theory
        </p>
    </div>,

];

export function Slider() {

    // Индекс текущего слайда
    const [activeIndex, setActiveIndex] = useState(0);

// Хук Effect
    useEffect(() => {
        // Запускаем интервал
        const interval = setInterval(() => {
            // Меняем состояние
            setActiveIndex((current) => {
                // Вычисляем индекс следующего слайда, который должен вывестись
                const res = current === text.length - 1 ? 0 : current + 1;
                // Возвращаем индекс
                return res
            })
        }, 5000);
        // Выключаем интервал
        return () => clearInterval()
    }, []);

// Вычисляем индекс предыдущего слайда
    const prevTextIndex = activeIndex ? activeIndex - 1 : text.length - 1;
// Вычисляем индекс следующего слайда
    const nextTextIndex = activeIndex === text.length - 1 ? 0 : activeIndex + 1;

return (
    <div className={style.slider}>
        <div className={`${style.slider-text} ${style.sliderPrev}`}
             key={prevTextIndex}>
            {text[prevTextIndex]}
        </div>
        <div className={style.slider-text}
             key={activeIndex}>
            {text[activeIndex]}
        </div>
        <div className={`${style.slider-text} ${style.sliderNext}`}
             key={nextTextIndex}>
            {text[nextTextIndex]}
        </div>
    </div>
)
}




export default Slider;