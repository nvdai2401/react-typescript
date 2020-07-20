import React, { lazy, Suspense } from 'react'
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom'

import { NavBar, ToolBar } from 'views/components'

const Transactions = lazy(() => import('./views/Transactions'))
const Report = lazy(() => import('./views/Report'))
const Budget = lazy(() => import('./views/Budget'))
const Auth = lazy(() => import('./views/Auth'))

const App = (props: RouteComponentProps<any>): JSX.Element => {
  const { location } = props
  return (
    <>
      {location.pathname !== '/auth' ? (
        <>
          <ToolBar />
          <NavBar />
        </>
      ) : null}
      <Switch>
        <Suspense fallback={() => <div>Error</div>}>
          <Route exact path="/" component={Transactions} />
          <Route path="/report" component={Report} />
          <Route path="/budget" component={Budget} />
          <Route path="/auth" component={Auth} />
        </Suspense>
      </Switch>
    </>
  )
}

export default withRouter(App)
