import s from "./useful.module.scss"
import {useState} from "react";
import i18next from "i18next";
import {withNamespaces} from "react-i18next";
import HeaderUsful from "./header/header";


const Useful = () => {
    let t = (key) => i18next.t(key);
        let contentData = [
            {
                'title': 'how to live an interesting live?',
                'message': 'Live out each day. Each new day gives us opportunities and new chances'
            },
            {
                'title': '5 ways to slow down',
                'message': 'Refuse multitask How to manage everything in the furious pace of a big city'
            },
            {
                'title': '8 ways to read more and frequently',
                'message': 'In order to read more it is necessary to find more free time',
            },

            {
                'title': 'How to make a good rest at the weekend?',
                'message': 'The weekend should be planned in advance What is a weekend without a plan',
            },

            {
                'title': 'How to become a successful businessman',
                'message': 'Entrepreneurship involves a combination of several useful qualities',
            },

            {
                'title': 'Habits that make us weak',
                'message': 'Strong people are not supermen who don’t have any disadvantages',
            },

            {
                'title': 'Some tips on meditation for beginners',
                'message': 'Mediation is a way to release from stress, obsessions and black thoughts',
            },

            {
                'title': 'The best rules for personal effectiveness',
                'message': 'Rule 1. Do not try to fill all your free time with work',
            },

            {
                'title': 'Clouded mind: a parable about how to get along  with your mother-in-law.',
                'message': 'A long time ago there was a girl named Lee-Lee who got married and began to live',
            },
        ];


        return (
            <div className={s.main}>
               <HeaderUsful/>
                    {contentData.map(i =>
                        <div className={s.container}>
                            <details className={s.dropdownBox}>
                                <summary className={s.dropdown}>
                                    {t(i.title)}
                                </summary>
                                <p className={s.dropdownMassage}>{t(i.message)}</p>
                            </details>


                            <div className={s.botContent}>

                            </div>
                        </div>
                    )}


            </div>
        )

    }
;

export default withNamespaces()( Useful);
