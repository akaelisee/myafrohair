/* eslint-disable react/prop-types */
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from '../views/home'
import Content from '../components/content'


const Routes = () => {
  return (
    <Router>
      <Switch>
      <Content>
        <Route exact path='/' component={Home} />
      </Content>
      </Switch>
    </Router>
  )
}

export default Routes
