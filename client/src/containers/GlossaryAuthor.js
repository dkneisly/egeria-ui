import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  createGlossary
} from '../actions/glossary'
import NewGlossary from '../components/NewGlossary'

class GlossaryAuthor extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    
  }

  componentDidUpdate(prevProps) {
    
  }

  handleSubmit(newGlossary) {
    this.props.dispatch(createGlossary(newGlossary))
  }

  render() {
    return (
      <div>
        <NewGlossary
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

GlossaryAuthor.propTypes = {
  selectedGlossary: PropTypes.string.isRequired,
  terms: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedGlossary, termsByGlossary } = state
  const { isFetching, lastUpdated, items: terms } = termsByGlossary[
    selectedGlossary
  ] || {
    isFetching: true,
    items: []
  }

  return {
    selectedGlossary,
    terms,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(GlossaryAuthor)