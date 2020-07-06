import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import './App.scss'

const Transactions = lazy(() => import('./views/Transactions'))

const App = (): JSX.Element => {
  return (
    <Switch>
      <Suspense fallback={() => <div>Error</div>}>
        <Route exact path="/" component={Transactions} />
      </Suspense>
    </Switch>
  )
}

export default App
