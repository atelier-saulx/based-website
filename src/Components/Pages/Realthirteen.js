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
        <div style={{}}>
          <Header>Core features</Header>
        </div>
        <div style={{}}>
          <Paragraph>
            <span style={{ color: '#6464F6' }}>+</span> Real-time engine
          </Paragraph>
          <br></br>
          <Paragraph>
            <span style={{ color: '#6464F6' }}>+</span> Subscription model
            ensures scaling over multiple servers
          </Paragraph>
          <br></br>
          <Paragraph>
            <span style={{ color: '#6464F6' }}>+</span> Intuitive GUI provides
            insight and easy manipulation of data and queries
          </Paragraph>
          <br></br>
          <Paragraph>
            <span style={{ color: '#6464F6' }}>+</span> Persistence layer
            allowing backups every 5 minutes and access to all versions of the
            data available at all times
          </Paragraph>
          <br></br>
          <Paragraph>
            <span style={{ color: '#6464F6' }}>+</span> JSON-LD schemas enforce
            data types with built-in validation
          </Paragraph>
          <br></br>
          <Paragraph>
            <span style={{ color: '#6464F6' }}>+</span> JSON-based DSL for
            complex queries
          </Paragraph>
          <br></br>
          <Paragraph>
            <span style={{ color: '#6464F6' }}>+</span> Optional indexes
            optimised for graph data structure
          </Paragraph>
          <br></br>
          <Paragraph>
            <span style={{ color: '#6464F6' }}>+</span> Notification system,
            I18n, and full text search included
          </Paragraph>
        </div>
      </div>
    </>
  )
}
