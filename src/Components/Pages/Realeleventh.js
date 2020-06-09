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
          backgroundColor: 'blue'
          //   display: 'flex'
          //   justifyContent: 'center',
          //   flexDirection: 'column',
          //   alignContent: 'flex-start',
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
            style={
              {
                //   alignItems: 'left'
              }
            }
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
              <div>‣ Programs</div>
              <div>‣ Votes</div>
              <div>‣ Content</div>
              <div>‣ Users</div>
            </div> */}
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
              <div>‣ Love Island</div>
              <div
                style={{
                  paddingLeft: '15'
                }}
              >
                ‣ Who should go?
              </div>
              <div
                style={{
                  paddingLeft: '30'
                }}
              >
                ‣ Bart
              </div>
              <div
                style={{
                  paddingLeft: '30'
                }}
              >
                ‣ Eric
              </div>
              <div
                style={{
                  paddingLeft: '30'
                }}
              >
                ‣ Karen
              </div>
              <br></br>
              <br></br>
              <div>‣ Users</div>
              <div
                style={{
                  paddingLeft: '15'
                }}
              >
                ‣ Becky
              </div>
              <div
                style={{
                  paddingLeft: '30'
                }}
              >
                ‣ Votes for Karen
              </div>
            </div> */}
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
              <div>‣ Voting UI</div>
              <br></br>
              <div>‣ Results dashboard</div>
            </div> */}
          </div>
          <div
            style={{
              alignItems: 'left'
            }}
          ></div>
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
              <div>‣ Ads</div>
              <div>‣ Sponsors</div>
              <div>‣ Subscribers</div>
              <div>‣ PPV</div>
            </div> */}
          </div>
        </div>
        <div
          style={{
            display: 'flex'
          }}
        >
          <div
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
            <div>‣ Programs</div>
            <div>‣ Votes</div>
            <div>‣ Content</div>
            <div>‣ Users</div>
          </div>
          <div
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
            <div>Create content items and drag and drop them in 'folders':</div>
            <br></br>
            <div>‣ Love Island</div>
            <div
              style={{
                paddingLeft: '15'
              }}
            >
              ‣ Who should go?
            </div>
            <div
              style={{
                paddingLeft: '30'
              }}
            >
              ‣ Bart
            </div>
            <div
              style={{
                paddingLeft: '30'
              }}
            >
              ‣ Eric
            </div>
            <div
              style={{
                paddingLeft: '30'
              }}
            >
              ‣ Karen
            </div>
            <br></br>
            <br></br>
            <div>‣ Users</div>
            <div
              style={{
                paddingLeft: '15'
              }}
            >
              ‣ Becky
            </div>
            <div
              style={{
                paddingLeft: '30'
              }}
            >
              ‣ Votes for Karen
            </div>
          </div>
          <div
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
            <div>‣ Voting UI</div>
            <br></br>
            <div>‣ Results dashboard</div>
          </div>
          <div
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
            <div>‣ Ads</div>
            <div>‣ Sponsors</div>
            <div>‣ Subscribers</div>
            <div>‣ PPV</div>
          </div>
        </div>
      </div>
    </>
  )
}
