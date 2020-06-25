import {
  SELECT_GLOSSARY,
  INVALIDATE_GLOSSARY,
  REQUEST_TERMS,
  RECEIVE_TERMS
} from '../actions/glossary'

export function selectedGlossary(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_GLOSSARY:
      return action.glossary
    default:
      return state
  }
}

function terms(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_GLOSSARY:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_TERMS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_TERMS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.terms,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function termsByGlossary(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_GLOSSARY:
    case RECEIVE_TERMS:
    case REQUEST_TERMS:
      return Object.assign({}, state, {
        [action.glossary]: terms(state[action.glossary], action)
      })
    default:
      return state
  }
}