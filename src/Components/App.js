import React from 'react'
import { createClient, Provider, Route, Switch } from '@saulx/hub'
import Home from './Pages/Home'
import Second from './Pages/Second'
import Third from './Pages/Third'
import Screen from './Screen'
import Realsecond from './Pages/Realsecond'
import Realthird from './Pages/Realthird'
import Realfourth from './Pages/Realfourth'
import Realfifth from './Pages/Realfifth'
import Realsixth from './Pages/Realsixth'
import Realseventh from './Pages/Realseventh'
import Realeighth from './Pages/Realeighth'
import Realninth from './Pages/Realninth'
import Realtenth from './Pages/Realtenth'
import Realeleventh from './Pages/Realeleventh'
import Realtwelfth from './Pages/Realtwelfth'
import Realthirteen from './Pages/Realthirteen'
import Realfourteen from './Pages/Realfourteen'

const hub = createClient({})

const pages = [
  {
    path: '/2',
    component: Realsecond
  },
  {
    path: '/3',
    component: Realthird
  },
  {
    path: '/4',
    component: Realfourth
  },
  {
    path: '/5',
    component: Realfifth
  },
  {
    path: '/6',
    component: Realsixth
  },
  {
    path: '/7',
    component: Realseventh
  },
  {
    path: '/8',
    component: Realeighth
  },
  {
    path: '/9',
    component: Realninth
  },
  {
    path: '/10',
    component: Realtenth
  },
  {
    path: '/11',
    component: Realeleventh
  },
  {
    path: '/12',
    component: Realtwelfth
  },
  {
    path: '/13',
    component: Realthirteen
  },
  {
    path: '/14',
    component: Realfourteen
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
