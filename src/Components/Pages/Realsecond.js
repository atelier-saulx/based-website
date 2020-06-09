import React from 'react'
import Header from '../Header'

export default () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid red',
          backgroundColor: 'blue',
          display: 'flex'
        }}
      >
        <div
          style={{
            alignSelf: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              textSizeAdjust: '20',
              width: '100%'
            }}
          >
            <Header>
              Nobody wants to wait - <br></br> whether{' '}
              <span style={{ color: '#6464F6' }}>end-consumer</span> or{' '}
              <span style={{ color: '#6464F6' }}>data producer</span>.
            </Header>
          </div>
        </div>
      </div>
    </>
  )
}
