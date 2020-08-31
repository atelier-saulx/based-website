import React from 'react'
import { Link } from '@saulx/hub'
import Paragraph from '../Paragraph'
import Header from '../Header'
import Circle from '../Circle'

export default () => {
  return (
    <>
      {' '}
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Header>How things online work now</Header>
        <div
          style={
            {
              // display: 'flex',
              // flexDirection: 'column',
              // alignItems: 'center'
            }
          }
        >
          <div>
            <Paragraph>Data input</Paragraph>
          </div>
          <div
            style={{
              width: '0',
              height: '0',
              borderStyle: 'solid',
              borderWidth: '20 10 0 10',
              borderColor: 'white transparent transparent transparent'
            }}
          ></div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '50',
              marginBottom: '50'
            }}
          >
            <Circle>Database</Circle>
            <div
              style={{
                width: '0',
                height: '0',
                borderStyle: 'solid',
                borderWidth: '10 0 10 20',
                borderColor: 'transparent transparent transparent white'
              }}
            ></div>
            <Circle>Frontend</Circle>
            <div
              style={{
                width: '0',
                height: '0',
                borderStyle: 'solid',
                borderWidth: '10 0 10 20',
                borderColor: 'transparent transparent transparent white'
              }}
            ></div>
            <Paragraph>Consumer</Paragraph>
          </div>
          <div
            style={{
              width: '0',
              height: '0',
              borderStyle: 'solid',
              borderWidth: '0 10 20 10',
              borderColor: 'transparent transparent white transparent'
            }}
          ></div>
          <div>
            <Paragraph>Data change</Paragraph>
          </div>{' '}
        </div>
      </div>
    </>
  )
}
