import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ListOfTerms extends Component {
  render() {
    return (
      <div id="ListOfTerms">
        <h3>Terms</h3>
        <ul>
          {console.log({terms: this.props.terms})}
          {this.props.terms.map((term, i) => (
            <li key={i}>{term.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}