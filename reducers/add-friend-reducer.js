import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { type, id, friendEmail, userId } = action;
  switch(type){
    case c.ADD_FRIEND:
      return {
        friendEmail,
        userId,
        id,
      }
    default:
      return state;
  }
}