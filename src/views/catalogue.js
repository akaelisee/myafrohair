import React from 'react'
import PropTypes from 'prop-types'
import PersonalImage from '../assets/img/personal.jpg'
import PersonalImage1 from '../assets/img/c.jpg'
import PersonalImage2 from '../assets/img/13.jpg'
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
                <div className="catalogue__lieu">
                   
                </div>  
                <div className="catalogue__detail">
                    <div className="catalogue__title"> Mercredi 5 Mai </div>
                    <div className="catalogue__contact">
                        <div className="personal"> 
                            <div className="personal_image"> 
                                <img src={PersonalImage} className="img-responsive" alt="personal" />
                            </div> 
                            <div className="detail__personal">
                                <div className="flex__star">
                                    <img src={StarImage} className="img-responsive" alt="personal" />
                                    <img src={StarImage} className="img-responsive" alt="personal" />
                                    <img src={StarImage} className="img-responsive" alt="personal" />
                                    <img src={StarImage} className="img-responsive" alt="personal" />
                                    <img src={StarImage} className="img-responsive" alt="personal" />
                                </div>

                                <p> <span> Latifa Okanpo </span> à 11km </p>
                                <p> Coiffure: Femme/Enfant </p>
                                <p className="lieu_p"> Bathurst  </p>
                                <p> Paiement en espace: non  </p>
                                <p> A Partir de : 80 $</p>
                            </div>
                        </div>
                        <div className="personal"> 
                            <div className="personal_image"> 
                                <img src={PersonalImage1} className="img-responsive" alt="personal" />
                            </div> 
                            <div className="detail__personal">
                                <div className="flex__star">
                                    <img src={StarImage} className="img-responsive" alt="personal" />
                                    <img src={StarImage} className="img-responsive" alt="personal" />
                                    <img src={StarImage} className="img-responsive" alt="personal" />
                                    <img src={StarImage} className="img-responsive" alt="personal" />
                                    <img src={StarImage} className="img-responsive" alt="personal" />
                                </div>

                                <p> <span> Christian Assemien </span> à 35km </p>
                                <p> Coiffure: Homme </p>
                                <p className="lieu_p"> Campbellton  </p>
                                <p> Paiement en espace: Oui  </p>
                                <p> A Partir de : 25 $</p>
                            </div>
                        </div>

                        

                        <div className="personal"> 
                            <div className="personal_image"> 
                                <img src={PersonalImage2} className="img-responsive" alt="personal" />
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
