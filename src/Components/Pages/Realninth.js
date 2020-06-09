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
        <div style={{}}>
          <div>
            <Header>
              Based is a <span style={{ color: '#6464F6' }}>platform</span> for{' '}
              <span style={{ color: '#6464F6' }}>platforms</span>.
            </Header>
            <br></br>
            <Paragraph>
              By packaging technology components for platforms that require real
              time capabilities at a massive scale, we’ve built a platform that
              makes it easy to build services for many different industries.
            </Paragraph>
          </div>
          <div
            style={{
              marginTop: '50',
              marginLeft: '20'
            }}
          >
            <Paragraph>+ Real time data visualisation</Paragraph>
            <Paragraph>+ Custom CRM</Paragraph>
            <Paragraph>+ Online events platforms</Paragraph>
            <Paragraph>+ IoT platforms</Paragraph>
            <Paragraph>+ Real time geo APIs</Paragraph>
            <Paragraph>+ Voting platforms</Paragraph>
            <Paragraph>+ CMS platforms</Paragraph>
          </div>
        </div>
      </div>
    </>
  )
}
