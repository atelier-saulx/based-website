import React from 'react'

export default ({ children }) => {
  return (
    <div
      style={{
        borderRadius: '50%',
        border: '1px solid blue',
        width: '200',
        height: '200',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '20',
        color: 'white',
        fontFamily:
          'San Fransisco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      }}
    >
      {children}
    </div>
  )
}
