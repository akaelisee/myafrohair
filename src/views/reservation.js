import React from 'react'
import PropTypes from 'prop-types'
import PersonalImage from '../assets/img/personal.jpg'
import StarImage from '../assets/svg/star-outline.svg'
import ChatImage from '../assets/svg/chatbox-outline.svg'
import TodayImage from '../assets/svg/today-outline.svg'
import ClockImage from '../assets/svg/time-outline.svg'

const Reservation = () => {

    return (
        <div className="reservation">
            <div className="reservation__banner"> 
            <div className="reservation__text">
                    <p className="text__title"> Reservation </p>
                </div>
            </div>

            <div className="wrapper__reservation"> 
                <div className="reservation__lieu">
                    <div className='form__group'>
                        <div className='form__group__item'>
                            <label> Ou ? </label>
                            <input type="text" placeholder="Paris, Ile de france, France" />
                        </div>
                        <div className='form__group__item date'>
                            <label> Quel Jour ? </label>
                            <input type="date" placeholder="Quel jour?" className="date"/>
                        </div>
                        <div className='form__group__item'>
                            <label> Quel coiffure ? </label>
                            <select> 
                                <option > Quelle coiffure ? </option>
                                <option> Tresse </option>
                                <option> lock </option>
                                <option> Tissage </option>
                                <option> Deux tom </option>
                                <option> Meze </option>
                            </select>
                        </div>
                        <div className='form__group__item'>
                            <label> Lieu ? </label>
                            <select> 
                                <option > Ou? </option>
                                <option> A domicile </option>
                                <option> Chez le(a) coiffeur(e) </option>
                                <option> Au salon </option>
                            </select>
                        </div>
                        <div className='form__group__item'>
                            <button className="btn__recherche"> RECHERCHER  </button>
                        </div>
                    </div>
                </div>  
                <div className="reservation__detail">
                    <div className="reservation__title"> Mercredi 5 Mai </div>
                    <div className="reservation__contact">
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

                                <p> <span> Latifa </span> à 11km </p>
                                <p> Passionné </p>
                                <p className="lieu_p"> Paris  </p>
                                <p> Paiement en espace: non  </p>
                                <p> A Partir de : 50 €</p>
                            </div>
                        </div>
                        <div className="contact"> 
                            <div className="contact__title">
                                <span> Contact <img src={ChatImage}  alt="chat" /> </span>
                            </div>

                            <div className="time">
                                <div className="time__item">
                                    <div className="flex__time">  
                                        <span> <img src={ClockImage} alt="clock" /> 06h -12h </span>
                                    </div>
                                    <div className="dispo">
                                        <span> 06h - 12h </span>
                                    </div>
                                </div>
                                <div className="time__item">
                                    <div className="flex__time">
                                        <img src={ClockImage} alt="clock" />
                                        <span> 12h - 18h </span>
                                    </div>
                                    <div className="dispo">
                                        <span> 12h - 18h </span>
                                    </div>
                                </div>
                                <div className="time__item">
                                    <div className="flex__time">
                                        <img src={ClockImage} alt="clock" />
                                        <span> 18h - 22h</span>
                                    </div>
                                    <div className="dispo">
                                        <span> 18h - 22h </span>
                                    </div>
                                </div>
                            </div>
                            <div className="agenda"> 
                                <button> Voir son agenda 
                                    <img src={TodayImage} alt="agenda" />
                                </button>
                            </div>
                        </div>
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

                                <p> <span> Latifa </span> à 11km </p>
                                <p> Passionné </p>
                                <p className="lieu_p"> Paris  </p>
                                <p> Paiement en espace: non  </p>
                                <p> A Partir de : 50 €</p>
                            </div>
                        </div>

                        <div className="contact"> 
                            <div className="contact__title">
                                <span> Contact <img src={ChatImage}  alt="chat" /> </span>
                            </div>

                            <div className="time">
                                <div className="time__item">
                                    <div className="flex__time">  
                                        <span> <img src={ClockImage} alt="clock" /> 06h - 12h </span>
                                    </div>
                                    <div className="indispo">
                                        <span> indisponible </span>
                                    </div>
                                </div>
                                <div className="time__item">
                                    <div className="flex__time">
                                        <img src={ClockImage} alt="clock" />
                                        <span> 12h - 18h </span>
                                    </div>
                                    <div className="indispo">
                                        <span> Indisponible </span>
                                    </div>
                                </div>
                                <div className="time__item">
                                    <div className="flex__time">
                                        <img src={ClockImage} alt="clock" />
                                        <span> 18h - 22h </span>
                                    </div>
                                    <div className="indispo">
                                        <span> Indisponible </span>
                                    </div>
                                </div>
                            </div>
                            <div className="agenda"> 
                                <button> Voir son agenda 
                                    <img src={TodayImage} alt="agenda" />
                                </button>
                            </div>
                        </div>

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

                                <p> <span> Latifa </span> à 11km </p>
                                <p> Passionné </p>
                                <p className="lieu_p"> Paris  </p>
                                <p> Paiement en espace: non  </p>
                                <p> A Partir de : 50 €</p>
                            </div>
                        </div>
                        <div className="contact"> 
                            <div className="contact__title">
                                <span> Contact <img src={ChatImage}  alt="chat" /> </span>
                            </div>

                            <div className="time">
                                <div className="time__item">
                                    <div className="flex__time">  
                                        <span> <img src={ClockImage} alt="clock" /> 06h - 12h </span>
                                    </div>
                                    <div className="dispo">
                                        <span> 06h - 12h </span>
                                    </div>
                                </div>
                                <div className="time__item">
                                    <div className="flex__time">
                                        <img src={ClockImage} alt="clock" />
                                        <span> 12h - 18h </span>
                                    </div>
                                    <div className="indispo">
                                        <span> Indisponible </span>
                                    </div>
                                </div>
                                <div className="time__item">
                                    <div className="flex__time">
                                        <img src={ClockImage} alt="clock" />
                                        <span> 18h - 22h </span>
                                    </div>
                                    <div className="indispo">
                                        <span> Indisponible </span>
                                    </div>
                                </div>
                            </div>
                            <div className="agenda"> 
                                <button> Voir son agenda 
                                    <img src={TodayImage} alt="agenda" />
                                </button>
                            </div>
                        </div>


                    </div>
                </div>  
            </div>
        </div>
    )
}

Reservation.propTypes = {

}

export default Reservation
