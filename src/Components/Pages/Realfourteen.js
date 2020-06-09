import React from 'react'
import Header from '../Header'
import Paragraph from '../Paragraph'
import Button from '../Button'

export default () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div style={{}}>
          <Header>Based is currently invite-only</Header>
        </div>
        <br></br>
        <div
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              width: '30%'
            }}
          >
            <Paragraph>If you're interested, get in touch</Paragraph>
          </div>
          <div
            style={{
              paddingLeft: '20'
            }}
          >
            {' '}
            <Button>
              <a href="mailto:alejandro@saulx.com">Email us</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
