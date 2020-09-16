import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars'
import SwaggerUI from "swagger-ui-react"
import swaggerData from './swaggerData'
import "swagger-ui-react/swagger-ui.css"

// eslint-disable-next-line
class App extends React.Component {
  render() {
    return (
      	<Scrollbars>
        		<SwaggerUI spec={swaggerData} />
        </Scrollbars>
    );
  }
}

export default App;