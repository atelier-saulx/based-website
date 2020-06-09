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
          <Paragraph>
            require{' '}
            <span style={{ color: '#6464F6' }}>
              more or less the same things
            </span>
            .
          </Paragraph>
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
          <Paragraph>
            <span style={{ color: '#6464F6' }}>+</span> SEO
          </Paragraph>
          <Paragraph>
            <span style={{ color: '#6464F6' }}>+</span> ...
          </Paragraph>
        </div>
        <div
          style={{
            fontSize: '350',
            alignSelf: 'flex-end'
          }}
        >
          🧟‍♂️
        </div>
      </div>
    </>
  )
}
