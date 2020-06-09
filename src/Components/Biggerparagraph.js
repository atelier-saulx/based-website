import React from 'react'

export default ({ children }) => {
  return (
    <div
      style={{
        fontWeight: 'bold',
        paddingLeft: '15',
        fontSize: '30',
        color: 'white',
        textAlign: 'left',
        fontFamily:
          'San Fransisco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      }}
    >
      {children}
    </div>
  )
}
