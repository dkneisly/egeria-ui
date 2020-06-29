import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ListOfTerms extends Component {
  render() {
    return (
      <div id="ListOfTerms">
        <div style={{ height: '20px' }}/>
        <h3 style={{ textAlign: 'center' }}>Terms</h3>
        <div style={{ height: '20px' }}/>
        <ul>
          {console.log({terms: this.props.terms})}
          {this.props.terms.map((term, i) => (
            <li key={i} style={{ marginTop: '5px', marginBottom: '5px' }}>{term.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}