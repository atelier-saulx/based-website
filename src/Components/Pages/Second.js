import React from 'react'
import { Link } from '@saulx/hub'
import Header from '../Header'

export default () => {
  return (
    <>
      <Header>How things online work now</Header>
      <div
        style={{
          display: 'flex'
        }}
      >
        <div
          style={{
            border: '1px solid red',
            textAlign: 'justify',
            width: '20%',
            padding: 20,
            margin: 50
          }}
        >
          Data change
        </div>
        <div
          style={{
            width: '50%'
          }}
        >
          {' '}
        </div>
        <div
          style={{
            border: '1px solid red',
            textAlign: 'justify',
            width: '20%',
            padding: 20,
            margin: 50
          }}
        >
          Data change
        </div>
      </div>
      <div
        style={{
          border: '1px solid green',
          margin: 50,
          padding: 20
        }}
      >
        Database
      </div>
      <div
        style={{
          border: '1px solid yellow',
          margin: 80,
          padding: 20
        }}
      >
        Frontend
      </div>
      <div
        style={{
          borderRadius: '100%',
          border: '1px solid black',
          width: 200,
          height: 200,
          padding: 30,
          paddingTop: 80,
          textAlign: 'center',
          margin: 50
        }}
      >
        {' '}
        Consumer
      </div>
    </>
  )
}
