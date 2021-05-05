import React from 'react'
import PropTypes from 'prop-types'
import PersonalImage from '../assets/img/personal.jpg'
import PersonalImage1 from '../assets/img/c.jpg'
import PersonalImage2 from '../assets/img/13.jpg'
import PersonalImage3 from '../assets/img/10.jpg'
import PersonalImage4 from '../assets/img/11.jpg'
import PersonalImage5 from '../assets/img/12.jpg'
import StarImage from '../assets/svg/star-outline.svg'
import ChatImage from '../assets/svg/chatbox-outline.svg'
import TodayImage from '../assets/svg/today-outline.svg'
import ClockImage from '../assets/svg/time-outline.svg'

const Catalogue = () => {

    return (
        <div className="catalogue">
            <div className="catalogue__banner"> 
            <div className="catalogue__text">
                    <p className="text__title"> Catalogue </p>
                </div>
            </div>

            <div className="wrapper__catalogue">   
                <div className="catalogue__grid">
                    <div className="catalogue__item">
                        <div className="catalogue__image"> 
                            <img src={PersonalImage1}  alt="PersonalImage1" />
                        </div>
                        <div className="catalogue__body">
                            <div className="catalogue__title"> 
                                <span> Nom Catalogue </span> 
                            </div>
                            <div className="catalogue__desc"> 
                                <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span> 
                            </div>
                        </div>
                    </div>
                    <div className="catalogue__item">
                        <div className="catalogue__image"> 
                            <img src={PersonalImage2}  alt="PersonalImage1" />
                        </div>
                        <div className="catalogue__body">
                            <div className="catalogue__title"> 
                                <span> Nom Catalogue </span> 
                            </div>
                            <div className="catalogue__desc"> 
                                <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span> 
                            </div>
                        </div>
                    </div>
                    <div className="catalogue__item">
                        <div className="catalogue__image"> 
                            <img src={PersonalImage3}  alt="PersonalImage1" />
                        </div>
                        <div className="catalogue__body">
                            <div className="catalogue__title"> 
                                <span> Nom Catalogue </span> 
                            </div>
                            <div className="catalogue__desc"> 
                                <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span> 
                            </div>
                        </div>
                    </div>
                    <div className="catalogue__item">
                        <div className="catalogue__image"> 
                            <img src={PersonalImage4}  alt="PersonalImage1" />
                        </div>
                        <div className="catalogue__body">
                            <div className="catalogue__title"> 
                                <span> Nom Catalogue </span> 
                            </div>
                            <div className="catalogue__desc"> 
                                <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span> 
                            </div>
                        </div>
                    </div>
                    <div className="catalogue__item">
                        <div className="catalogue__image"> 
                            <img src={PersonalImage5}  alt="PersonalImage1" />
                        </div>
                        <div className="catalogue__body">
                            <div className="catalogue__title"> 
                                <span> Nom Catalogue </span> 
                            </div>
                            <div className="catalogue__desc"> 
                                <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span> 
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

Catalogue.propTypes = {

}

export default Catalogue
