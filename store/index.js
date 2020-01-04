import { createStore, applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'

const initialMakeup = {
  cards : [],
  card : null
}

function tarotCard (state = initialMakeup, action) {
  switch (action.type) {
    case 'SET_CARDS' : 
    return {
      ...state,
      cards: action.cards
    }
    case 'SET_CARD' :
      return {
        ...state,
        card: action.card
      }
    default : 
      return state
  }

}

let store = createStore(tarotCard, applyMiddleware(Thunk))

export default store