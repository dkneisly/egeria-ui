import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import { FormGroup, TextInput, Button } from 'carbon-components-react'

import { createGlossary } from '../actions/glossary'

const onSubmit = values => {
  alert(JSON.stringify(values))
}

const validate = values => {
  const errors = {}
  if (!values["glossary-name"]) {
    errors["glossary-name"] = 'Required'
  }
  return errors
}

const NewGlossary = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit, form, invalid, submitting, pristine }) => (
      <form onSubmit={handleSubmit}>
        <h2>New Glossary</h2>
        <Field name="glossary-name">
          {({ input, meta }) => (
            <div>
              <TextInput id="glossary-name" {...input} labelText="Glossary Name" placeholder="Unique Name" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <Field name="glossary-description">
          {({ input, meta }) => (
            <div>
              <TextInput id="glossary-description" {...input} labelText="Description" placeholder="Description" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <Field name="glossary-qualified-name">
          {({ input, meta }) => (
            <div>
              <TextInput id="glossary-qualified-name" {...input} labelText="Qualified Name" placeholder="" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <div className="buttons">
          <Button
            type="button"
            onClick={form.reset}
            disabled={submitting || pristine}
          >
            Reset
          </Button>
          <Button type="submit" disabled={submitting || invalid}>
            Submit
          </Button>
        </div>
      </form>
    )}
  />
)

export default NewGlossary


//   let glossaryName, glossaryDescription, qualifiedName;

//   return (
//     <div>
//       <Form
//         onSubmit={e => {
//           e.preventDefault()
//           if (!glossaryName.value.trim()) {
//             return
//           }
//           dispatch(createGlossary({
//             glossaryName: glossaryName.value
//           }))
//           glossaryName.value = ''
//         }}
//       >
//         <FormGroup legendText="New Glossary">
//           <TextInput id="glossaryName" helperText="Name of the new Glossary" labelText="Name" placeholder="Fancy Words" ref={node => (glossaryName = node)} />
//           <TextInput id="glossaryDescription" helperText="Description of the new Glossary" labelText="Description" placeholder="All the best words" ref={node => (glossaryDescription = node)} />
//           <TextInput id="qualifiedName" helperText="?" labelText="Qualified Name" placeholder="" ref={node => (qualifiedName = node)} />
//           <Button type="submit">Create Glossary</Button>
//         </FormGroup>
//       </Form>
//     </div>
//   )
// }

// export default connect()(NewGlossary)