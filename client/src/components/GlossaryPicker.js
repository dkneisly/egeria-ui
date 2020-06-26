import React, { Component } from 'react'
import { Dropdown, Button } from 'carbon-components-react';
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
            <span>
              <h3 style={{ textAlign: 'right' }}>
                Current Glossary:
              </h3>
              
            </span>
          </div>
          <div class="bx--col">
            <div style={{ width: '50%' }}>
              <Dropdown
                light
                onChange={(item) => onChange(item.selectedItem.label)}
                ariaLabel="Dropdown"
                id="carbon-dropdown-example"
                items={options.map(option => (
                  {
                    id: option,
                    label: option
                  }
                ))}
                label="reactjs"
              />
            </div>
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