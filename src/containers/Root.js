import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../store'

// Views
import Glossary from './Glossary'
import GlossaryAuthor from './GlossaryAuthor'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Glossary} />
          <Route path="/newGlossary" component={GlossaryAuthor} />
        </Router>
      </Provider>
    )
  }
}