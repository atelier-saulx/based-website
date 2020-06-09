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
          <div>
            <Header>
              Based is a <span style={{ color: '#6464F6' }}>platform</span> for{' '}
              <span style={{ color: '#6464F6' }}>platforms</span>.
            </Header>
            <br></br>
            <Paragraph>
              By packaging hard-to-build components for platforms that require
              real time capabilities at a massive scale, we’ve built a platform
              that makes it easy to build services for many different
              industries.
            </Paragraph>
          </div>
          <div
            style={{
              marginTop: '50',
              marginLeft: '20'
            }}
          >
            <Paragraph>
              <span style={{ color: '#6464F6' }}>
                <span style={{ color: '#6464F6' }}>
                  <span style={{ color: '#6464F6' }}>+</span>
                </span>
              </span>{' '}
              Real time data visualisation
            </Paragraph>
            <Paragraph>
              <span style={{ color: '#6464F6' }}>
                <span style={{ color: '#6464F6' }}>+</span>
              </span>{' '}
              Custom CRM
            </Paragraph>
            <Paragraph>
              <span style={{ color: '#6464F6' }}>
                <span style={{ color: '#6464F6' }}>+</span>
              </span>{' '}
              Online events platforms
            </Paragraph>
            <Paragraph>
              <span style={{ color: '#6464F6' }}>
                <span style={{ color: '#6464F6' }}>+</span>
              </span>{' '}
              IoT platforms
            </Paragraph>
            <Paragraph>
              <span style={{ color: '#6464F6' }}>
                <span style={{ color: '#6464F6' }}>+</span>
              </span>{' '}
              Real time geo APIs
            </Paragraph>
            <Paragraph>
              <span style={{ color: '#6464F6' }}>
                <span style={{ color: '#6464F6' }}>+</span>
              </span>{' '}
              Voting platforms
            </Paragraph>
            <Paragraph>
              <span style={{ color: '#6464F6' }}>
                <span style={{ color: '#6464F6' }}>+</span>
              </span>{' '}
              CMS platforms
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  )
}
