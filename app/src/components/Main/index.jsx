import React from 'react'
import css from './Main.module.css'
import mainPic from "../../images/pg.png"
export const MainPage = ()=> {
    return(
        <div className={css.mainPage}>
            <div className={css.container}>
            <nav>
                <span>Thrivetalk</span>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>
                <button>CONTACT US</button>
            </nav>
            <div className={css.mainBlock}>
                <div>
                    <p>Thrivetalk</p>
                    <h1>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                    <p>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
                    <div>
                    <button>WHO AM I</button>
                    <button>WHAT DO I DO</button>
                    </div>
                </div>
                <div>
                    <img className={css.pic} src={mainPic}/>
                </div>
            </div>
            </div>
           
        </div>
    )
}