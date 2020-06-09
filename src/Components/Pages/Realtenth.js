import React from 'react'
import Header from '../Header'
import Paragraph from '../Paragraph'
import Docolor from '../Docolor'

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
              alignItems: 'left'
            }}
          >
            <div
              style={{
                borderRadius: '20',
                width: '20',
                height: '20',
                backgroundColor: '#6464F6',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
              onClick={() => alert('Yaay!')}
            >
              1
            </div>
            <div>
              <Paragraph>Create a schema that fits the required data</Paragraph>
            </div>
          </div>
          <div
            style={{
              alignItems: 'left'
            }}
          >
            <div
              style={{
                borderRadius: '20',
                width: '20',
                height: '20',
                backgroundColor: '#6464F6',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
              onClick={() => alert('Yaay!')}
            >
              2
            </div>
            <div>
              <Paragraph>
                Edit the data hierarchy in code or in the GUI
              </Paragraph>
            </div>
          </div>
          <div
            style={{
              alignItems: 'left'
            }}
          >
            <div
              style={{
                borderRadius: '20',
                width: '20',
                height: '20',
                backgroundColor: '#6464F6',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
              onClick={() => alert('Yaay!')}
            >
              3
            </div>
            <div>
              <Paragraph>
                Create a frontend that reads and writes the data{' '}
              </Paragraph>
            </div>
          </div>
          <div
            style={{
              alignItems: 'left'
            }}
          >
            <div
              style={{
                borderRadius: '20',
                width: '20',
                height: '20',
                backgroundColor: '#6464F6',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
              onClick={() => alert('Yaay!')}
            >
              4
            </div>
            <div>
              <Paragraph>Profit </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
