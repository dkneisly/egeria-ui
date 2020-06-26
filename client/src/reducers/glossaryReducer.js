import {
  SELECT_GLOSSARY,
  INVALIDATE_GLOSSARY,
  REQUEST_TERMS,
  RECEIVE_TERMS,
  RECEIVE_GLOSSARIES,
  REQUEST_GLOSSARIES
} from '../actions/glossary'

export function fetchGlossaries(state, action) {
  switch (action.type) {
    case RECEIVE_GLOSSARIES:
      return Object.assign({}, state, {
        user: action.user,
        server: action.server,
        glossaries: action.glossaries,
      }, action.glossaries.map((g) => {
        return {
          [g.name]: glossaries(state[g], action) // stopped here - unsure of what gets returned
        }
      }))
    case REQUEST_GLOSSARIES:
      return Object.assign({}, state, {
        user: action.user,
        server: action.server,
      })
    default:
      return state
  }
}

function glossaries(
  state = {
    isFetching: false,
    didInvalidate: false,
    glossaries: []
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
        glossaries: action.glossaries,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function selectedGlossary(state = '', action) {
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