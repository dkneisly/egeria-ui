import React, { Component } from 'react'
import { SideNav, SideNavItems, SideNavMenuItem } from 'carbon-components-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../store'

// Views
import Glossary from './Glossary'
import GlossaryAuthor from './GlossaryAuthor'

// customized scss
import "../app.scss";

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          {/* <SideNav
            isFixedNav
            expanded={true}
            isChildOfHeader={false}
            aria-label="Side navigation"
          >
            <SideNavItems>
              <SideNavMenuItem>
                Test
              </SideNavMenuItem>
            </SideNavItems>
          </SideNav> */}
          <Router>
            <Route exact path="/" component={Glossary} />
            <Route path="/newGlossary" component={GlossaryAuthor} />
          </Router>
        </Provider>
      </div>
    )
  }
}