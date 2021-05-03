// @ts-nocheck
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Filter from '../components/filter'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import ImageStory from '../assets/img/49.jpg'
import ImageSalon from '../assets/img/salon.jpg'
import ImageSpecial1 from '../assets/img/2.jpg'
import ImageSpecial3 from '../assets/img/special3.jpg'
import ImageSpecial6 from '../assets/img/special6.jpg'
import ImageSpecial5 from '../assets/img/special5.jpg'
import SvgArrowLeft from '../assets/svg/arrow-back-outline.svg'
import SvgArrowRight from '../assets/svg/arrow-forward-outline.svg'
import Chevron from '../assets/svg/chevron-forward-outline.svg'

const Home = () => {

    const [isExist, setIsExist] = useState(1);

    useEffect(() => {
        SwiperFunc()
    }, [])

    const SwiperFunc = () => {
        let swiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        return swiper;
    }

    const content = {
        backgroundColor: '#1B4D4A'
        
    }

    const content1 = {
        backgroundColor: 'rgba(27, 77, 74, 0.633)'
    }

    return (
        <div className="container"> 
          <div className="container__banner">
              <div className="container__home">
                    <p className="text__title"> Avec My Hair Cut, détendez-vous bien, soyez confiant </p>
                    <p className="text__desc"> Obtenez votre coiffure afro chez vous  </p>
                    
                    <div className="btn">
                        <Link className="btn-article"> Voir nos article </Link>
                    </div>
                </div>
          </div>
          <div className="wrapper">
            <div className="wrapper__recherche">
              <div className="wrapper__poppever">
                <div className="poppever_item"> 
                  <span onClick={() => setIsExist(1)} style={ isExist === 1 ? (content) : (content1)}> Par prestation </span> 
                </div>
                <div className="poppever_item"> 
                  <span onClick={() => setIsExist(2)} style={ isExist === 2 ? (content) : (content1)}> Par nom </span> 
                </div>
              </div>
              <div className="blog__recherche">
                <Filter isExist={isExist} setIsExist={setIsExist} />
              </div>
            </div>
            <div className="wrapper__title">
              <p className="title"> Votre coiffeur/coiffeuse Afro </p>
              <p className="plus"> Obtenez votre coiffure afro caribéenne chez vous </p>
              <p className="text">Nos coiffeurs/coiffeuses sont vos amis et sont prêts à vous chez vous! </p>
            </div>

            {/* Story */}
            <div className="wrapper__story">
              <div className="story__background">
                <div className="story__grid">
                  <div className="grid__image">
                        <img src ={ImageStory} alt="story" />
                  </div>
                  <div className="grid__text">
                    <div className="text__title">
                      <span> Notre mission </span>
                    </div>
                    <div className="text__desc">
                      <span> Faciliter les échanges entre les offreurs et les demandeurs de coiffures Afro-caribéennes au Nouveau-Brunswick en particulier et au Canada en particulier . </span>
                    </div>
                    <div className="text__title valeur">
                      <span> Nos valeurs </span>
                    </div>
                    <div className="text__desc">
                      <div className='valeur__item'>
                          <img src={Chevron} alt="chevron-right" />
                          <span> Intégrité </span>
                      </div>
                      <div className='valeur__item'>
                          <img src={Chevron} alt="chevron-right" />
                          <span> Proximité </span>
                      </div>
                      <div className='valeur__item'>
                          <img src={Chevron} alt="chevron-right" />
                          <span> Bienveillance </span>
                      </div>
                      <div className='valeur__item'>
                          <img src={Chevron} alt="chevron-right" />
                          <span> Qualité </span>
                      </div>
                      <div className='valeur__item'>
                          <img src={Chevron} alt="chevron-right" />
                          <span> Partage </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Story */}

            {/* Special */}
            <div className="wrapper__special">
                <div className="special__grid">
                    <div className="grid__text">
                      <p className="title">Nos specialités</p>

                      <div className="flex_genre">
                        <div className="genre_item">
                          <div className="genre__tile"> 
                            <p className="title"> Femme </p>  
                          </div>
                          <div className="genre__list">
                            <div className='list__item'>
                              <img src={Chevron} alt="chevron-right" />
                              <span> Tissage </span>
                            </div>
                            <div className='list__item'>
                              <img src={Chevron} alt="chevron-right" />
                              <span> Perruques </span>
                            </div>
                            <div className='list__item'>
                              <img src={Chevron} alt="chevron-right" />
                              <span> Tresse </span>
                            </div>
                            <div className='list__item'>
                              <img src={Chevron} alt="chevron-right" />
                              <span> Bantu knot </span>
                            </div>
                            <div className='list__item'>
                              <img src={Chevron} alt="chevron-right" />
                              <span> Big chop </span>
                            </div>
                            <div className='list__item'>
                              <img src={Chevron} alt="chevron-right" />
                              <span> Box Braids </span>
                            </div>
                            <div className='list__item'>
                              <img src={Chevron} alt="chevron-right" />
                              <span> Braid out </span>
                            </div>
                            <div className='list__item'>
                              <img src={Chevron} alt="chevron-right" />
                              <span> natte </span>
                            </div>
                            <div className='list__item'>
                              <img src={Chevron} alt="chevron-right" />
                              <span> Dread </span>
                            </div>
                          </div>
                        </div>
                        <div className="genre_item her">
                          <div className="genre__tile"> 
                            <p className="title"> Homme </p>  
                          </div>
                          <div className="genre__list">
                          <div className='list__item'>
                              <img src={Chevron} alt="chevron-right" />
                              <span> Dread Loks </span>
                            </div>
                            <div className='list__item'>
                              <img src={Chevron} alt="chevron-right" />
                              <span> 0,1,2,3 Ton </span>
                            </div>
                            <div className='list__item'>
                              <img src={Chevron} alt="chevron-right" />
                              <span> coupe </span>
                            </div>
                            <div className='list__item'>
                              <img src={Chevron} alt="chevron-right" />
                              <span> trace </span>
                            </div>
                          </div>
                        </div>
                      </div> 
                     </div>
                    <div className="grid__product">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="swiper__image"> 
                                        <img src={ImageSpecial1} className="img-responsive" alt="spacial" />
                                    </div>
                                    <div className="swiper__text">
                                        <p className="title"> Coiffure Femme </p>
                                        <p className="desc"> Lorem  industry's standard dummy text ever </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper__image"> 
                                        <img src={ImageSpecial3} className="img-responsive" alt="spacial" />
                                    </div>
                                    <div className="swiper__text">
                                        <p className="title"> Coiffure Homme </p>
                                        <p className="desc"> Lorem  industry's standard dummy text ever </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper__image"> 
                                        <img src={ImageSpecial6} className="img-responsive" alt="spacial" />
                                    </div>
                                    <div className="swiper__text">
                                        <p className="title"> Produit capillaires </p>
                                        <p className="desc"> Lorem  industry's standard dummy text ever </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper__image"> 
                                        <img src={ImageSpecial5} className="img-responsive" alt="spacial" />
                                    </div>
                                    <div className="swiper__text">
                                        <p className="title"> Outline </p>
                                        <p className="desc"> Lorem  industry's standard dummy text ever </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper__image"> 
                                        <img src={ImageSpecial5} className="img-responsive" alt="spacial" />
                                    </div>
                                    <div className="swiper__text">
                                        <p className="title"> Outline </p>
                                        <p className="desc"> Lorem  industry's standard dummy text ever </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="scroll">
                            <div className="hr">
                                <hr />
                            </div>
                            <div className="btn-scroll">
                                <img onClick={() => SwiperFunc().slidePrev()} src={SvgArrowLeft} alt='left'/>
                                <img onClick={() => SwiperFunc().slideNext()} src={SvgArrowRight} alt='right'/>
                            </div>
                        </div>
                    </div>
                </div>   
             </div>
          {/* End Special */}

          </div>
          {/*  */}
          <div className="wrapper__salon">
                <div className="salon__grid">
                  <div className="grid__image">
                        <img src ={ImageSalon} alt="story" />
                  </div>
                  <div className="grid__text">
                    <div className="text__title">
                      <span> Nos amis collégiens </span>
                    </div>
                    <div className="text__desc">
                      <span> My Hair Cut s'engage à reverser une quote-part de leurs bénéfices aux étudiants vulnérables des colleges des institutions poste secondaire du nouveau-brunswick. Il sagit d'un projet social dont l'objectif sera d'offrir des vivres frais aux étudiants vulnérables.</span>
                    </div>
                  </div>
                </div>
            </div>
            {/*  */}

            {/* family */}
            {/* <div className="wrapper">
                <div className="family">
                    <div className="title"> 
                        <span>  Meet the family a</span> 
                    </div>

                    <div className="desc"> 
                        <span>  </span> 
                    </div>

                    <div className="perso"> 
                        <div className="perso__item">
                            <div className="perso__image">

                                <div className="perso__link">

                                </div>
                            </div>
                            <div className="perso__body"></div>
                        </div>
                    </div>
                    
                </div>
            </div> */}
        </div>
    )
}

Home.propTypes = {

}

export default Home
