import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import CounterRoute from './Counter'
import PageNotFound from './PageNotFound'
import Redirect from './PageNotFound/redirect'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    CounterRoute(store),
    PageNotFound(),
    Redirect
  ]
})

export default createRoutes
