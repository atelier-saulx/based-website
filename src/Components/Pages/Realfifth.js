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
          backgroundColor: 'black',
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
          <Paragraph>to add capabilities and features...</Paragraph>
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
        </div>
        <div
          style={{
            fontSize: '80',
            alignSelf: 'flex-end'
          }}
        >
          🧟‍♂️
        </div>
      </div>
    </>
  )
}
