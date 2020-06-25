import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class GlossaryPicker extends Component {
  render() {
    const { value, onChange, options } = this.props

    return (
      <span>
        <div class="bx--row">
          <div class="bx--col">
            <h1 style={{ textAlign: 'center' }}>Glossary Author</h1>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--col">
            <h3 style={{ textAlign: 'center' }}>
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
            </h3>
          </div>
        </div>
        <div class="box--row">
          <div class="bx--col">
            <NavLink
              exact
              to={`/newGlossary`}
            >
              New Glossary
            </NavLink>
          </div>
        </div>
      </span>
    )
  }
}

GlossaryPicker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}