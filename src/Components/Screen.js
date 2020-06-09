import React from 'react'
import { useHub, Link, useRpc } from '@saulx/hub'

const Button = props => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '10%',
        alignItems: 'center'
      }}
    >
      <Link
        style={{
          fontSize: 20,
          backgroundColor: 'red',
          padding: 10
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
        border: '1px solid red',
        backgroundColor: 'blue',
        display: 'flex'
      }}
    >
      <img
        style={{
          position: 'absolute',
          padding: '10'
        }}
        src="public/4.png"
      ></img>
      <Button to={prev}>{<img src="public/1.png"></img>}</Button>
      <div
        style={{
          width: '100%',
          margin: 10,
          padding: 10,
          border: '1px solid yellow'
        }}
      >
        {children}
      </div>
      <Button to={next}>{<img src="public/1.png"></img>}</Button>
    </div>
  )
}
