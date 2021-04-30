import React from 'react'
import PropTypes from 'prop-types'
import Header from '../layout/header'
import Footer from '../layout/footer'
const Content = ({ children }) => {

  return (
    <div>
      <div className='container__limit'>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.any
}

export default Content
