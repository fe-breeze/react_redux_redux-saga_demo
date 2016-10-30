import { take, put, select } from 'redux-saga/effects'

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE = 'COUNTER_DOUBLE'

export function increment (value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

export function double () {
  return {
    type: COUNTER_DOUBLE
  }
}

export const actions = {
  increment,
  double
}

const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload
}

const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export function *doubleAsync () {
  while (true) {
    yield take(COUNTER_DOUBLE)
    const state = yield select()
    yield asyncWait()
    yield put(increment(state.counter))
  }
}

// Simulate an async call
const asyncWait = () => new Promise((resolve) => {
  setTimeout(() => resolve(), 300)
})

export const sagas = [
  doubleAsync
]
