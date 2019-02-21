import reducer from './authReducer';
import * as actionTypes from '../actions/actionTypes';

describe('Auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      error: null,
      loading: false,
      isLogged: false
    });
  });
  it('should store the token upon login', () => {
    expect(reducer({
      token: null,
      error: null,
      loading: false,
      isLogged:false
    }, {
      type: actionTypes.AUTH_SUCCESS, 
      idToken: 'some-token'
    })).toEqual({
      token: 'some-token',
      error: null,
      loading: false,
      isLogged:true
    })
  })

})