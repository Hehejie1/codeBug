// import Store from '@store'
import swaggerDataBase from './swaggerDataBase'

// const token = Store.getState().getIn(['user', 'token'])
// let Authorization = 'Bearer ' + token

//安全配置和备份管理
let security = {
  //备份管理--分页查找
  "/baidu/system/backup": {
    "get": {
      "tags": ["baidu_systemset"],
      "summary": "备份管理--分页查找",
      "description": "备份管理--分页查找",
      "operationId": "backup",
      "produces": ["application/xml", "application/json"],
      "parameters": [
        {
          "name": "Authorization",
          "in": "header",
          "description": "Authorization",
          "required": false,
          "type": "string",
          value: Authorization,
          "collectionFormat": "1"
        },
        {
          "name": "type",
          "in": "query",
          "description": "系统备份：system， 日志备份：log",
          "required": true,
          "type": "string",
          value:'system',
          "collectionFormat": "multi"
        }, 
        {
          "name": "page",
          "in": "query",
          "description": "页码",
          "required": true,
          "type": "string",
          value:'1',
          "collectionFormat": "multi"
        },  
        {
          "name": "search",
          "in": "query",
          "description": "搜索字段",
          "required": false,
          "type": "string",
          value:'',
          "collectionFormat": "multi"
        },         
      ],
      "responses": {
        "200": {
          "description": "successful operation",
          "schema": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/Pet"
            }
          }
        },
        "400": {
          "description": "Invalid status value"
        }
      },
      "security": [{
        "petstore_auth": ["write:pets", "read:pets"]
      }]
    },    
  },  
}

//get post put delete
let role = {
  //角色管理
  "/baidu/role": {
    "get": {
      "tags": ["baidu_systemset"],
      "summary": "角色管理--查询所有角色",
      "description": "角色管理--查询所有角色",
      "operationId": "get_role",
      "produces": ["application/xml", "application/json"],
      "parameters": [
        {
          "name": "Authorization",
          "in": "header",
          "description": "Authorization",
          "required": false,
          "type": "string",
          value: Authorization,
          "collectionFormat": "1"
        }
      ],
      "responses": {
        "200": {
          "description": "successful operation",
          "schema": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/Pet"
            }
          }
        },
        "400": {
          "description": "Invalid status value"
        }
      },
      "security": [{
        "petstore_auth": ["write:pets", "read:pets"]
      }]
    },
    "post": {
      "tags": ["baidu_systemset"],
      "summary": "角色管理--添加角色",
      "description": "角色管理--添加角色",
      "operationId": "add_role",
      "consumes": ["application/json", "application/xml"],
      "produces": ["application/xml", "application/json"],
      "parameters": [{
          "name": "Authorization",
          "in": "header",
          "description": "Authorization",
          "required": false,
          "type": "string",
          value: Authorization,
          "collectionFormat": "1"
        },
        {
          "in": "body",
          "name": "body",
          "description": "角色管理--添加角色",
          "required": true,
          "schema": {
            type: "object",
            properties: {
              role_name: {
                type: "string",
                "example": 'role1',
                description: '角色名称'
              },
              is_superuser: {
                type: "integer",
                "example": 0,
                description: '-1:访客 0:普通用户 1:系统管理员'
              },              
            }
          }
        }
      ],
      "responses": {
        "405": {
          "description": "Invalid input"
        }
      },
      "security": [{
        "petstore_auth": ["write:pets", "read:pets"]
      }]
    },
    "put": {
      "tags": ["baidu_systemset"],
      "summary": "角色管理--修改角色",
      "description": "角色管理--修改角色",
      "operationId": "put_role",
      "consumes": ["application/json", "application/xml"],
      "produces": ["application/xml", "application/json"],
      "parameters": [{
          "name": "Authorization",
          "in": "header",
          "description": "Authorization",
          "required": false,
          "type": "string",
          value: Authorization,
          "collectionFormat": "1"
        },
        {
          "in": "body",
          "name": "body",
          "description": "角色管理--修改角色",
          "required": true,
          "schema": {
            type: "object",
            properties: {
              role_id: {
                type: "integet",
                "example": 1,
                description: '角色id'
              },                  
              role_name: {
                type: "string",
                "example": 'role1',
                description: '角色名称'
              },
              is_superuser: {
                type: "integer",
                "example": 0,
                description: '-1:访客 0:普通用户 1:系统管理员'
              },                 
            }
          }
        }
      ],
      "responses": {
        "405": {
          "description": "Invalid input"
        }
      },
      "security": [{
        "petstore_auth": ["write:pets", "read:pets"]
      }]
    },
    "delete": {
      "tags": ["baidu_systemset"],
      "summary": "角色管理--删除角色",
      "description": "角色管理--删除角色",
      "operationId": "delete_role",
      "consumes": ["application/json", "application/xml"],
      "produces": ["application/xml", "application/json"],
      "parameters": [{
          "name": "Authorization",
          "in": "header",
          "description": "Authorization",
          "required": false,
          "type": "string",
          value: Authorization,
          "collectionFormat": "1"
        },
        {
          "in": "body",
          "name": "body",
          "description": "角色管理--删除角色",
          "required": true,
          "schema": {
            type: "object",
            properties: {
              role_id: {
                type: "integet",
                "example": 1,
                description: '角色id'
              }
            }
          }
        }
      ],
      "responses": {
        "405": {
          "description": "Invalid input"
        }
      },
      "security": [{
        "petstore_auth": ["write:pets", "read:pets"]
      }]
    }             
  },     
}

//动态url
let plugin = {
  //动态url
  "/baidu/component_info/{component_id}": {
    "get": {
      "tags": ["baidu_task"],
      "summary": "动态url",
      "description": "动态url",
      "operationId": "component_info",
      "produces": ["application/xml", "application/json"],
      "parameters": [
        {
          "name": "Authorization",
          "in": "header",
          "description": "Authorization",
          "required": false,
          "type": "string",
          value: Authorization,
          "collectionFormat": "1"
        },
        {
          "name": "component_id",
          "in": "path",
          "description": "id",
          "required": true,
          "type": "string",
          value: '495519',
        }        
      ],
      "responses": {
        "200": {
          "description": "successful operation",
          "schema": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/Pet"
            }
          }
        },
        "400": {
          "description": "Invalid status value"
        }
      },
      "security": [{
        "petstore_auth": ["write:pets", "read:pets"]
      }]
    },          
  },  
}

swaggerDataBase.paths = {
  ...swaggerDataBase.paths, 
  ...security, 
  ...role,
  ...plugin,
}

export default swaggerDataBase