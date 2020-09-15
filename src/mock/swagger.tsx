<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React from 'react';
>>>>>>> feat: eslint,router finished
import { Scrollbars } from 'react-custom-scrollbars'
import SwaggerUI from "swagger-ui-react"
import swaggerData from './swaggerData'
import "swagger-ui-react/swagger-ui.css"

<<<<<<< HEAD
class App extends Component {
=======
// eslint-disable-next-line
class App extends React.Component {
>>>>>>> feat: eslint,router finished
  render() {
    return (
      	<Scrollbars>
        		<SwaggerUI spec={swaggerData} />
        </Scrollbars>
    );
  }
}

export default App;