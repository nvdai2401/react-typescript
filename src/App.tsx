import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import { NavBar } from 'views/components'

const Transactions = lazy(() => import('./views/Transactions'))

const App = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Switch>
        <Suspense fallback={() => <div>Error</div>}>
          <Route exact path="/" component={Transactions} />
        </Suspense>
      </Switch>
    </>
  )
}

export default App
