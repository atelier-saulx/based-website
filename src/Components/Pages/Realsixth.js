import React from 'react'
import Header from '../Header'
import Paragraph from '../Paragraph'
import Biggerparagraph from '../Biggerparagraph'

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
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {' '}
        <div
          style={{
            alignSelf: 'flex-start',
            padding: '100',
            position: 'absolute'
          }}
        >
          <Biggerparagraph>even though most applications...</Biggerparagraph>
        </div>
        <div
          style={{
            alignItems: 'left',
            position: 'absolute'
          }}
        >
          <Header>Database</Header>
          <Paragraph>
            <span style={{ color: '#6464F6' }}>+</span> Search
          </Paragraph>
          <Paragraph>
            <span style={{ color: '#6464F6' }}>+</span> State management
          </Paragraph>
          <Paragraph>
            <span style={{ color: '#6464F6' }}>+</span> User management
          </Paragraph>
          <Paragraph>
            <span style={{ color: '#6464F6' }}>+</span> Native frameworks
          </Paragraph>
        </div>
        <div
          style={{
            fontSize: '180',
            alignSelf: 'flex-end'
          }}
        >
          🧟‍♂️
        </div>
      </div>
    </>
  )
}
