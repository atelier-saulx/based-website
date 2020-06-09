import React from 'react'
import { useHub, Link, useRpc } from '@saulx/hub'

const Button = props => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '10%',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Link
        style={{
          fontSize: 30,
          color: 'white'
          // backgroundColor: 'red'
        }}
        {...props}
      />
    </div>
  )
}

export default ({ children, pages }) => {
  const history = useRpc('device.history')

  let currentIndex = pages.findIndex(v => v.path === history)

  if (currentIndex === -1) {
    currentIndex = pages.findIndex(v => v.path === '/')
  }

  const prev =
    currentIndex === 0
      ? pages[pages.length - 1].path
      : pages[currentIndex - 1].path

  const next =
    currentIndex === pages.length - 1
      ? pages[0].path
      : pages[currentIndex + 1].path

  console.log(next, prev)

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        // border: '1px solid red',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <img
        style={{
          position: 'absolute',
          padding: '10'
        }}
        src="public/4.png"
      ></img>
      <Button to={prev}>{'⍇'}</Button>
      <div
        style={{
          width: '100%',
          margin: 10,
          padding: 10
        }}
      >
        {children}
      </div>
      <Button to={next}>{'⍈'}</Button>
    </div>
  )
}
