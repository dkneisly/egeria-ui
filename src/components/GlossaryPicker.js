import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class GlossaryPicker extends Component {
  render() {
    const { value, onChange, options } = this.props

    return (
      <span>
        <h1>Glossary Author</h1>
        <h3>
          Current Glossary:
          {' '}
          <select onChange={e => onChange(e.target.value)} value={value}>
            {options.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          {' '}
          <NavLink
            exact
            to={`/newGlossary`}
          >
            New Glossary
          </NavLink>
        </h3>
      </span>
    )
  }
}

GlossaryPicker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}