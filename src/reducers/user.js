import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: 'teste@gmail.com',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case (LOGIN): {
    return (action.payload);
  }
  default:
    return state;
  }
};

export default user;
