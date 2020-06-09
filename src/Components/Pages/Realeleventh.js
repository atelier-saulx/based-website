import React from 'react'
import Header from '../Header'
import Paragraph from '../Paragraph'
import Smalltext from '../Smalltext'

export default () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          display: 'flex',
          //   justifyContent: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
          //   alignItems: 'flex-start'
        }}
      >
        <div
          style={{
            alignSelf: 'baseline',
            paddingBottom: '15'
          }}
        >
          <Header>
            Setting up takes{' '}
            <span style={{ color: '#6464F6' }}>just three steps</span>
          </Header>
          <div>
            <br></br>
            <Paragraph>
              Imagine you're setting up a{' '}
              <span style={{ color: '#6464F6' }}>voting application</span> for
              television shows
            </Paragraph>
          </div>
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
              width: '25%'
            }}
          >
            <div>
              <Paragraph>
                <span style={{ color: '#6464F6' }}>1.</span> Create a schema
                that fits the required data
              </Paragraph>
            </div>
            <br></br>
            {/* <div
              style={{
                fontWeight: 'bold',
                paddingLeft: '15',
                fontSize: '15',
                textAlign: 'left',
                fontFamily:
                  'San Fransisco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
              }}
            >
              <div>Create data types with corresponding fields:</div>
              <br></br>
              <div><span style={{ color: '#6464F6' }}>‣</span> Programs</div>
              <div><span style={{ color: '#6464F6' }}>‣</span> Votes</div>
              <div><span style={{ color: '#6464F6' }}>‣</span> Content</div>
              <div><span style={{ color: '#6464F6' }}>‣</span> Users</div>
            </div> */}
          </div>
          <div
            style={{
              alignItems: 'left',
              width: '25%'
            }}
          >
            <div>
              <Paragraph>
                <span style={{ color: '#6464F6' }}>2.</span> Edit the data
                hierarchy in code or in the GUI
              </Paragraph>
            </div>
            {/* <div
              style={{
                fontWeight: 'bold',
                paddingLeft: '15',
                fontSize: '15',
                textAlign: 'left',
                fontFamily:
                  'San Fransisco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
              }}
            >
              <br></br>
              <div>
                Create content items and drag and drop them in 'folders':
              </div>
              <br></br>
              <div><span style={{ color: '#6464F6' }}>‣</span> Love Island</div>
              <div
                style={{
                  paddingLeft: '15'
                }}
              >
                <span style={{ color: '#6464F6' }}>‣</span> Who should go?
              </div>
              <div
                style={{
                  paddingLeft: '30'
                }}
              >
                <span style={{ color: '#6464F6' }}>‣</span> Bart
              </div>
              <div
                style={{
                  paddingLeft: '30'
                }}
              >
                <span style={{ color: '#6464F6' }}>‣</span> Eric
              </div>
              <div
                style={{
                  paddingLeft: '30'
                }}
              >
                <span style={{ color: '#6464F6' }}>‣</span> Karen
              </div>
              <br></br>
              <br></br>
              <div><span style={{ color: '#6464F6' }}>‣</span> Users</div>
              <div
                style={{
                  paddingLeft: '15'
                }}
              >
                <span style={{ color: '#6464F6' }}>‣</span> Becky
              </div>
              <div
                style={{
                  paddingLeft: '30'
                }}
              >
                <span style={{ color: '#6464F6' }}>‣</span> Votes for Karen
              </div>
            </div> */}
          </div>
          <div
            style={{
              alignItems: 'left',
              width: '25%'
            }}
          >
            <div style={{}}>
              <Paragraph>
                <span style={{ color: '#6464F6' }}>3.</span> Create a frontend
                that reads and writes the data
              </Paragraph>
            </div>
            <br></br>
            {/* <div
              style={{
                fontWeight: 'bold',
                paddingLeft: '15',
                fontSize: '15',
                textAlign: 'left',
                fontFamily:
                  'San Fransisco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
              }}
            >
              <div>
                Using any frontend framework, access the real time updated data:
              </div>
              <br></br>
              <div><span style={{ color: '#6464F6' }}>‣</span> Voting UI</div>
              <br></br>
              <div><span style={{ color: '#6464F6' }}>‣</span> Results dashboard</div>
            </div> */}
          </div>

          <div
            style={{
              alignItems: 'left',
              width: '25%'
            }}
          >
            <div>
              <Paragraph>
                <span style={{ color: '#6464F6' }}>(</span> Profit{' '}
                <span style={{ color: '#6464F6' }}>)</span>{' '}
              </Paragraph>
            </div>

            {/* <div
              style={{
                fontWeight: 'bold',
                paddingLeft: '15',
                fontSize: '15',
                textAlign: 'left',
                fontFamily:
                  'San Fransisco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
              }}
            >
              <div>Add monetization:</div>
              <br></br>
              <div><span style={{ color: '#6464F6' }}>‣</span> Ads</div>
              <div><span style={{ color: '#6464F6' }}>‣</span> Sponsors</div>
              <div><span style={{ color: '#6464F6' }}>‣</span> Subscribers</div>
              <div><span style={{ color: '#6464F6' }}>‣</span> PPV</div>
            </div> */}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center'
          }}
        >
          <div
            style={{
              width: '25%',

              fontWeight: 'bold',
              paddingLeft: '15',
              fontSize: '15',
              color: 'white',
              textAlign: 'left',
              fontFamily:
                'San Fransisco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            }}
          >
            <div>Create data types with corresponding fields:</div>
            <br></br>
            <div>
              <span style={{ color: '#6464F6' }}>
                <span style={{ color: '#6464F6' }}>‣</span>
              </span>{' '}
              Programs
            </div>
            <div>
              <span style={{ color: '#6464F6' }}>‣</span> Votes
            </div>
            <div>
              <span style={{ color: '#6464F6' }}>‣</span> Content
            </div>
            <div>
              <span style={{ color: '#6464F6' }}>‣</span> Users
            </div>
          </div>
          <div
            style={{
              width: '25%',

              fontWeight: 'bold',
              paddingLeft: '15',
              fontSize: '15',
              color: 'white',
              textAlign: 'left',
              fontFamily:
                'San Fransisco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            }}
          >
            <div>Create content items and drag and drop them in 'folders':</div>
            <br></br>
            <div>
              <span style={{ color: '#6464F6' }}>‣</span> Love Island
            </div>
            <div
              style={{
                paddingLeft: '15'
              }}
            >
              <span style={{ color: '#6464F6' }}>‣</span> Who should go?
            </div>
            <div
              style={{
                paddingLeft: '30'
              }}
            >
              <span style={{ color: '#6464F6' }}>‣</span> Bart
            </div>
            <div
              style={{
                paddingLeft: '30'
              }}
            >
              <span style={{ color: '#6464F6' }}>‣</span> Eric
            </div>
            <div
              style={{
                paddingLeft: '30'
              }}
            >
              <span style={{ color: '#6464F6' }}>‣</span> Karen
            </div>
            <br></br>
            <br></br>
            <div>
              <span style={{ color: '#6464F6' }}>‣</span> Users
            </div>
            <div
              style={{
                paddingLeft: '15'
              }}
            >
              <span style={{ color: '#6464F6' }}>‣</span> Becky
            </div>
            <div
              style={{
                paddingLeft: '30'
              }}
            >
              <span style={{ color: '#6464F6' }}>‣</span> Votes for Karen
            </div>
          </div>
          <div
            style={{
              width: '25%',

              fontWeight: 'bold',
              paddingLeft: '15',
              fontSize: '15',
              textAlign: 'left',
              color: 'white',
              fontFamily:
                'San Fransisco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            }}
          >
            <div>
              Using any frontend framework, access the real time updated data:
            </div>
            <br></br>
            <div>
              <span style={{ color: '#6464F6' }}>‣</span> Voting UI
            </div>
            <br></br>
            <div>
              <span style={{ color: '#6464F6' }}>‣</span> Results dashboard
            </div>
          </div>
          <div
            style={{
              width: '25%',
              fontWeight: 'bold',
              paddingLeft: '15',
              fontSize: '15',
              color: 'white',
              textAlign: 'left',
              fontFamily:
                'San Fransisco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            }}
          >
            <div>Add monetization:</div>
            <br></br>
            <div>
              <span style={{ color: '#6464F6' }}>‣</span> Ads
            </div>
            <div>
              <span style={{ color: '#6464F6' }}>‣</span> Sponsors
            </div>
            <div>
              <span style={{ color: '#6464F6' }}>‣</span> Subscribers
            </div>
            <div>
              <span style={{ color: '#6464F6' }}>‣</span> PPV
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
