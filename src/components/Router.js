import { Switch, Route } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

import HomePage from '../pages/home'

const Router = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={HomePage} />
    </Switch>
  )
}

export default Router
