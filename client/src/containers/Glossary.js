import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from 'carbon-components-react'
import {
  fetchTermsIfNeeded,
  invalidateGlossary,
  selectGlossary
} from '../actions/glossary'
import GlossaryPicker from '../components/GlossaryPicker'
import ListOfTerms from '../components/ListOfTerms'

class Glossary extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectedGlossary } = this.props
    dispatch(fetchTermsIfNeeded(selectedGlossary))
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedGlossary !== prevProps.selectedGlossary) {
      const { dispatch, selectedGlossary } = this.props
      dispatch(fetchTermsIfNeeded(selectedGlossary))
    }
  }

  handleChange(nextGlossary) {
    this.props.dispatch(selectGlossary(nextGlossary))
    this.props.dispatch(fetchTermsIfNeeded(nextGlossary))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedGlossary } = this.props
    dispatch(invalidateGlossary(selectedGlossary))
    dispatch(fetchTermsIfNeeded(selectedGlossary))
  }

  handleNewGlossaryClick(e) {
    e.preventDefault()

    
  }

  render() {
    const { selectedGlossary, terms, isFetching, lastUpdated } = this.props
    return (
      <div class="bx--grid">
        <GlossaryPicker
          value={selectedGlossary}
          onChange={this.handleChange}
          options={['reactjs', 'frontend']}
        />
        <div class="bx--row">
          <div class="bx--col">
            <p>
              {!isFetching && (
                <Button onClick={this.handleRefreshClick}>Refresh</Button>
              )}
            </p>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--col">
            {isFetching && terms.length === 0 && <h2>Loading...</h2>}
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--col">
            {!isFetching && terms.length === 0 && <h2>Empty.</h2>}
          </div>
        </div>
        {terms.length > 0 && (
          <div class="bx--row" style={{ opacity: isFetching ? 0.5 : 1 }}>
            <div class="bx--col">
              <ListOfTerms terms={terms} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

Glossary.propTypes = {
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

export default connect(mapStateToProps)(Glossary)