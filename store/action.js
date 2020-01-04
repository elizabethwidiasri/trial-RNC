export const getCards = () => async dispatch => {
  const response = await fetch(`https://rws-cards-api.herokuapp.com/api/v1/cards`)
  const responseJSON = await response.json()
  const data = responseJSON.cards.filter(data => data.type === 'major').sort((a, b) => (a.value_int > b.value_int) ? 1 : -1 )
  dispatch({
    type: 'SET_CARDS',
    cards: data
  })
}

// export const getCard = (id) => async dispatch => {
//   // setMakeup(null)
//   const response = await fetch(`https://rws-cards-api.herokuapp.com/api/v1/cards/search?name_short=ar00`)
//   const responseJSON = await response.json()
//   const makeup = responseJSON.cards.filter(data => String(data.id) === String(id))[0]  
//   dispatch({
//     type: 'SET_CARD',
//     makeup
//   })
// }

export const setMakeup = (value) => dispatch => {
  dispatch({
    type: 'SET_MAKEUP',
    makeup: value
  })
}