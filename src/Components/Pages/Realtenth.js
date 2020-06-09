import React from 'react'
import Header from '../Header'
import Paragraph from '../Paragraph'
import Smalltext from '../Smalltext'
import Docolor from '../Docolor'

export default () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            alignSelf: 'baseline'
          }}
        >
          <Header>
            Setting up takes{' '}
            <span style={{ color: '#6464F6' }}>just three steps</span>
          </Header>
        </div>
        <br></br>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center'
          }}
        >
          <div
            style={{
              alignItems: 'left',
              width: '25%'
            }}
          >
            <div>
              <Paragraph>
                <span style={{ color: '#6464F6' }}>1.</span> Create a schema
                that fits the required data
              </Paragraph>
            </div>
          </div>
          <div
            style={{
              width: '25%',

              alignItems: 'left'
            }}
          >
            <div>
              <Paragraph>
                <span style={{ color: '#6464F6' }}>2.</span> Edit the data
                hierarchy in code or in the GUI
              </Paragraph>
            </div>
          </div>
          <div
            style={{
              width: '25%',

              alignItems: 'left'
            }}
          >
            <div>
              <Paragraph>
                <span style={{ color: '#6464F6' }}>3.</span> Create a frontend
                that reads and writes the data{' '}
              </Paragraph>
            </div>
          </div>
          <div
            style={{
              width: '25%',

              alignItems: 'left'
            }}
          >
            {/* <div>
              <Paragraph>
                <span style={{ color: '#6464F6' }}>(</span>Profit
                <span style={{ color: '#6464F6' }}>)</span>{' '}
              </Paragraph>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
