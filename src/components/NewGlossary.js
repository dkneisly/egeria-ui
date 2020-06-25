import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Form, FormGroup, TextInput, Button } from 'carbon-components-react'

import { createGlossary } from '../actions/glossary'

const NewGlossary = ({ dispatch }) => {
  let glossaryName, glossaryDescription, qualifiedName;

  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault()
          if (!glossaryName.value.trim()) {
            return
          }
          dispatch(createGlossary({
            glossaryName: glossaryName.value
          }))
          glossaryName.value = ''
        }}
      >
        <FormGroup legendText="New Glossary">
          <TextInput id="glossaryName" helperText="Name of the new Glossary" labelText="Name" placeholder="Fancy Words" ref={node => (glossaryName = node)} />
          <TextInput id="glossaryDescription" helperText="Description of the new Glossary" labelText="Description" placeholder="All the best words" ref={node => (glossaryDescription = node)} />
          <TextInput id="qualifiedName" helperText="?" labelText="Qualified Name" placeholder="" ref={node => (qualifiedName = node)} />
          <Button type="submit">Create Glossary</Button>
        </FormGroup>
      </Form>
    </div>
  )
}

export default connect()(NewGlossary)

// export default class NewGlossary extends Component {

//   render() {
//     const { onSubmit } = this.props

//     return (
//       <span>
//         <h1>Glossary Author</h1>
//         <h3>
//           <NavLink
//             exact
//             to={`/`}
//           >
//             Back to Glossary
//           </NavLink>
//         </h3>
//       </span>
//     )
//   }
// }

// NewGlossary.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired
// }