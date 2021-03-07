import * as c from './ActionTypes';

export const nextQuestion = () => ({
    type: c.NEXT_QUESTION,
});

export const selectResponse = (id) => ({
  type: c.SELECT_RESPONSE,
  id,
});