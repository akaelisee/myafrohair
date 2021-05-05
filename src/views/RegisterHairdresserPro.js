import React from 'react'
import PropTypes from 'prop-types'

const RegisterHairdresserPro = () => {

    return (
        <div className="register__hair">
            <div className="register__hair__banner"> 
                <div className="register__hair__card">
                    <div className="card">
                        <p> Je crée mon compte pro </p>

                        <form> 
                            <div className='form__group'>
                                <div className='form__group__item'>
                                    <input type="text" placeholder="Departement" />
                                </div>
                                <div className='form__group__item'>
                                    <input type="email" placeholder="Votre Email"/>
                                </div>
                                <div className='form__group__item'>
                                    <input type="password" placeholder="Mot de passe"/>
                                </div>
                                <div className='form__group__btn'>
                                    <button className="btn__register"> S'INSCRIRE  </button>
                                </div>
                            </div>
                        </form>

                        <div className="condi"> 
                            <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

RegisterHairdresserPro.propTypes = {

}

export default RegisterHairdresserPro
