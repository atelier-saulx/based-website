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
          backgroundColor: 'black',
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
          <div>
            <Header>
              That’s where
              <div
                style={{
                  display: 'inline-block',
                  paddingRight: '10'
                }}
              >
                <img
                  style={{
                    height: '50',

                    display: 'inline-block'
                  }}
                  src="public/2.png"
                ></img>
                based
              </div>
              comes in.
            </Header>
          </div>
          <div>
            <Header>We make real time infrastructure easy, at scale.</Header>
          </div>
        </div>
      </div>
    </>
  )
}
