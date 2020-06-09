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
          display: 'flex'
        }}
      >
        <div
          style={{
            padding: '50',
            alignSelf: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '15%'
            }}
          >
            <img src="public/2.png"></img>
            <Header>based</Header>
          </div>
          <div
            style={{
              fontFamily: 'San Francisco',
              fontSize: '20',
              paddingTop: '10'
            }}
          >
            <Paragraph>Build real time applications, faster</Paragraph>
          </div>
        </div>
      </div>
    </>
  )
}
