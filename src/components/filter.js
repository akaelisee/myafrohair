// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({ isExist}) => {

    const funcFilter = () => {
        if (isExist === 1) {
            return <> <FilterPrestation /> </>
        }else if (isExist ===2) {
            return <> <FilterName /> </>
        }
    }

    const FilterPrestation = () => {
        return (
            <div className='form__group'>
                <div className='form__group__item'>
                    <select> 
                        <option > Selectionné le genre </option>
                        <option> Homme </option>
                        <option> Femme </option>
                    </select>
                </div>
                <div className='form__group__item'>
                    <input type="text" placeholder="Ville" />
                </div>
                <div className='form__group__item date'>
                    <input type="date" placeholder="Quel jour?" className="date"/>
                </div>
                <div className='form__group__item'>
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
        )
    }

    const FilterName = () => {
        return (
            <div className='form__group__name'>
                <div className='form__group__item'>
                    <input type="text" placeholder="Nom"  className="name"/>
                </div>
                <div className='form__group__btn'>
                    <button className="btn__recherche"> RECHERCHER  </button>
                </div>
            </div>
        )
    }

    return (
        <div className="">
            {funcFilter()}
        </div>
    )
}

Filter.propTypes = {
    isExist: PropTypes.any
}

export default Filter
