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
        <div
          style={{
            alignSelf: 'flex-start',
            position: 'absolute',
            paddingTop: '20%'
          }}
        >
          <Header>This is what you get</Header>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around'
          }}
        >
          <div>
            <Header>Hands-off infrastructure</Header>
            <Paragraph>Based handles all the hard bits:</Paragraph>
            <div>
              <br></br>
              <Paragraph>‣ Scaling up and down</Paragraph>
              <Paragraph>‣ Flexible data structures</Paragraph>
              <Paragraph>‣ Real time connections</Paragraph>
            </div>{' '}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Header>Easy-to-use data</Header>
            <Paragraph>Anyone can work with data through Based's UI:</Paragraph>
            <div>
              <br></br>
              <Paragraph>‣ Scaling up and down</Paragraph>
              <Paragraph>‣ Flexible data structures</Paragraph>
              <Paragraph>‣ Real time connections</Paragraph>
            </div>{' '}
          </div>
        </div>
      </div>
    </>
  )
}
