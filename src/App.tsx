import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import { NavBar, ToolBar } from 'views/components'

const Transactions = lazy(() => import('./views/Transactions'))
const Report = lazy(() => import('./views/Report'))
const Budget = lazy(() => import('./views/Budget'))

const App = (): JSX.Element => {
  return (
    <>
      <ToolBar />
      <NavBar />
      <Switch>
        <Suspense fallback={() => <div>Error</div>}>
          <Route exact path="/" component={Transactions} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/budget" component={Budget} />
        </Suspense>
      </Switch>
    </>
  )
}

export default App
