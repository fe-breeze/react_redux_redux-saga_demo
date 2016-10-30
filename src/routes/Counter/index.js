import { injectReducer } from '../../store/reducers'
import { injectSagas } from '../../store/sagas'

export default (store) => ({
  path: 'counter',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/CounterContainer').default
      const reducer = require('./modules/counter').default
      const sagas = require('./modules/counter').sagas

      injectReducer(store, { key: 'counter', reducer })
      injectSagas(store, { key: 'counter', sagas })

      cb(null, Counter)

    }, 'counter')
  }
})
