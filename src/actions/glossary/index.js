import axios from 'axios'

export const CREATE_GLOSSARY = 'CREATE_GLOSSARY'
export const REQUEST_GLOSSARY = 'REQUEST_GLOSSARY'
export const RECEIVE_GLOSSARY = 'RECEIVE_GLOSSARY'
export const REQUEST_TERMS = 'REQUEST_TERMS'
export const RECEIVE_TERMS = 'RECEIVE_TERMS'
export const SELECT_GLOSSARY = 'SELECT_GLOSSARY'
export const INVALIDATE_GLOSSARY = 'INVALIDATE_GLOSSARY'

function requestGlossary(glossary) {
  return {
    type: REQUEST_GLOSSARY,
    glossary
  }
}

function receiveGlossary(glossary, json) {
  return {
    type: RECEIVE_GLOSSARY,
    glossary,
    receivedAt: Date.now()
  }
}

export function createGlossary(newGlossary) {
  return dispatch => {
    dispatch(requestGlossary(newGlossary))
    // axios call
    return axios.post('')
      .then(response => {
        console.log(response)
        return response
      })
      .then(() => dispatch(receiveGlossary(glossary)))
  }
}

export function selectGlossary(glossary) {
  return {
    type: SELECT_GLOSSARY,
    glossary
  }
}

export function invalidateGlossary(glossary) {
  return {
    type: INVALIDATE_GLOSSARY,
    glossary
  }
}

function requestTerms(glossary) {
  return {
    type: REQUEST_TERMS,
    glossary
  }
}

function receiveTerms(glossary, json) {
  return {
    type: RECEIVE_TERMS,
    glossary,
    terms: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchTerms(glossary) {
  return dispatch => {
    dispatch(requestTerms(glossary))
    return axios.get(`https://www.reddit.com/r/${glossary}.json`)
      .then(response => {
        console.log({response})
        return response.data
      })
      .then(terms => dispatch(receiveTerms(glossary, terms)))
  }
}

function shouldFetchTerms(state, glossary) {
  console.log({state, glossary})
  const terms = state.termsByGlossary[glossary]
  if (!terms) {
    return true
  } else if (terms.isFetching) {
    return false
  } else {
    return terms.didInvalidate
  }
}

export function fetchTermsIfNeeded(glossary) {
  return (dispatch, getState) => {
    if (shouldFetchTerms(getState(), glossary)) {
      return dispatch(fetchTerms(glossary))
    }
  }
}