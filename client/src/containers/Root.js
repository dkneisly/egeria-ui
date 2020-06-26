import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../store'

// Header and SideNav
import HeaderAndSide from '../components/HeaderAndSide';

// Views
import Glossary from './Glossary'
import GlossaryAuthor from './GlossaryAuthor'

// customized scss
import "../app.scss";

const store = configureStore()

const AppRouter = () => {

  return (
    <Router>
      <Route exact path="/" component={Glossary} />
      <Route path="/newGlossary" component={GlossaryAuthor} />
    </Router>
  )

}

export default class Root extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <HeaderAndSide content={<AppRouter/>}/>
        </Provider>
      </div>
    )
  }
}