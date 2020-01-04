export const getCards = () => async dispatch => {
  const response = await fetch(`https://rws-cards-api.herokuapp.com/api/v1/cards`)
  const responseJSON = await response.json()
  
  dispatch({
    type: 'SET_CARDS',
    cards: responseJSON.cards.filter(data => data.type === 'major')
  })
}

// export const getCard = (id) => async dispatch => {
//   // setMakeup(null)
//   const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique`)
//   const responseJSON = await response.json()
//   const makeup = responseJSON.cards.filter(data => String(data.id) === String(id))[0]  
//   dispatch({
//     type: 'SET_MAKEUP',
//     makeup
//   })
// }

export const setMakeup = (value) => dispatch => {
  dispatch({
    type: 'SET_MAKEUP',
    makeup: value
  })
}