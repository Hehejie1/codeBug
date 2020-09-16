# React-Swagger
A simple React wrapper of Swagger API in Material design.

## Demo
![alt text](https://github.com/HastingsYoung/react-swagger-ui/raw/master/screenshots/react-swagger.gif "demo")

## Usage
```sh
npm i --save react-swagger
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwaggerUI from 'react-swagger';
import 'react-swagger/dist/index.css';

const models = [
  {
    name: 'Model 01',
    attributes: {
      id: {
        type: 'integer',
        default: 0,
      },
      quantity: {
        type: 'integer',
        default: 0,
      },
      status: {
        type: 'string',
        default: '',
      },
      complete: {
        type: 'boolean',
        default: false,
      },
    },
  },
  {
    name: 'Model 02',
    attributes: {
      id: {
        type: 'integer',
        default: 0,
      },
      quantity: {
        type: 'integer',
        default: 0,
      },
      status: {
        type: 'string',
        default: '',
      },
      complete: {
        type: 'boolean',
        default: false,
      },
    },
  },
]

const entries = [
  {
    type: 'get',
    api: '/model',
    desc: 'The description of model api',
    deprecated: true,
  },
  {
    type: 'post',
    api: '/model',
    desc: 'The description of model api',
  },
  {
    type: 'put',
    api: '/model',
    desc: 'The description of model api',
  },
  {
    type: 'delete',
    api: '/model',
    desc: 'The description of model api',
  },
  {
    type: 'get',
    api: '/model',
    desc: 'The description of model api',
  },
]

const entriesGroup = [
  {
    groupName: 'Model APIs',
    groupDesc: 'The description of Model APIs',
    entries,
  },
]
const modelsGroup = [
  {
    groupName: 'Models',
    groupDesc: 'The description of Models',
    models,
  },
]

const base = {
  title: "Swagger Example API",
  subTitle: "[ Base URL: example.swagger.io/v2 ]"
}



ReactDOM.render(
  <ReactSwaggerUI entries={entriesGroup} models={modelsGroup} base={base}>
    This is a sample server Swagger UI. You can find out more about Swagger at http://swagger.io or on
    irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.
  </ReactSwaggerUI>,
  document.getElementById('root')
)

```

## License
Copyright 2017 Hastings Yeung

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
