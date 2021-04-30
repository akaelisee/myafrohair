// @ts-nocheck
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Filter from '../components/filter'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import ImageStory from '../assets/img/story.jpg'
import ImageSalon from '../assets/img/salon.jpg'
import ImageSpecial1 from '../assets/img/special1.jpg'
import ImageSpecial2 from '../assets/img/special2.jpg'
import ImageSpecial3 from '../assets/img/special3.jpg'
import ImageSpecial6 from '../assets/img/special6.jpg'
import ImageSpecial5 from '../assets/img/special5.jpg'
import SvgArrowLeft from '../assets/svg/arrow-back-outline.svg'
import SvgArrowRight from '../assets/svg/arrow-forward-outline.svg'

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
              <p className="title"> Professional hair stylist </p>
              <p className="plus"> Lorem Ipsum is simply dummy text of the </p>
              <p className="text"> Lorem  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
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
                      <span> Our Story </span>
                    </div>
                    <div className="text__sous">
                      <span> Lorem  industry's standard dummy text ever since </span>
                    </div>
                    <div className="text__desc">
                      <span> Lorem  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</span>
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
                      <p className="title">Our specialties</p>
                      <p className="text"> Lorem  industry's standard  text ever since </p>
                      <p className="desc"> Lorem  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged </p>
                    </div>
                    <div className="grid__product">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="swiper__image"> 
                                        <img src={ImageSpecial1} className="img-responsive" alt="spacial" />
                                    </div>
                                    <div className="swiper__text">
                                        <p className="title"> Outline </p>
                                        <p className="desc"> Lorem  industry's standard dummy text ever </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper__image"> 
                                        <img src={ImageSpecial3} className="img-responsive" alt="spacial" />
                                    </div>
                                    <div className="swiper__text">
                                        <p className="title"> Beard </p>
                                        <p className="desc"> Lorem  industry's standard dummy text ever </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper__image"> 
                                        <img src={ImageSpecial6} className="img-responsive" alt="spacial" />
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
                      <span> Time for a haircut </span>
                    </div>
                    <div className="text__sous">
                      <span> Lorem  industry's standard dummy text ever since </span>
                    </div>
                    <div className="text__desc">
                      <span> Lorem  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</span>
                    </div>
                  </div>
                </div>
            </div>
            {/*  */}

            {/* family */}
            <div className="wrapper">
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
            </div>
            {/* End family */}
        </div>
    )
}

Home.propTypes = {

}

export default Home
