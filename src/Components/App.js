import React from 'react'
import { createClient, Provider, Route, Switch } from '@saulx/hub'
import Home from './Pages/Home'
import Second from './Pages/Second'
import Third from './Pages/Third'
import Screen from './Screen'

const hub = createClient({})

const pages = [
  {
    path: '/2',
    component: Second
  },
  {
    path: '/3',
    component: Third
  },
  {
    path: '/4',
    component: () => {
      return <div>ewfpwiehfweoifh</div>
    }
  },
  {
    path: '/',
    component: Home
  }
]

export default () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh'
      }}
    >
      <Provider hub={hub}>
        <Screen pages={pages}>
          <Switch>
            {pages.map(v => {
              return (
                <Route key={v.path} path={v.path} component={v.component} />
              )
            })}
          </Switch>
        </Screen>
      </Provider>
    </div>
  )
}
