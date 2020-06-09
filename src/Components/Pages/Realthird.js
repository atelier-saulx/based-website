import React from 'react'
import Header from '../Header'
import Paragraph from '../Paragraph'

export default () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid red',
          backgroundColor: 'blue',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around'
          }}
        >
          <Header>
            Real time updates will soon be the{' '}
            <span style={{ color: '#6464F6' }}>norm</span> online
          </Header>
          <div>
            <Header>
              But that type of infrastructure is hard to build - especially at
              scale.
            </Header>
          </div>
        </div>
      </div>
    </>
  )
}
