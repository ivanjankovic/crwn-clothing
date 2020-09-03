import CartActionTypes from './cart.types'

const ISTATE = {
  hiden: true
}

const cartReducer = (state = ISTATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}

export default cartReducer