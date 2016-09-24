exports.post = {
  "tags": ["newuser"],
  "description": "Метод создания пользователя",

  "parameters": [
    {
      "name": "email",
      "description": "Логин пользователя",
      "type": "string",
      "format": "email",
      "required": true
    },
    {
      "name": "login",
      "description": "Логин пользователя",
      "type": "string",
      "required": true
    },
    {
      "name": "password",
      "description": "Пароль пользователя",
      "type": "string",
      "format": "password",
      "required": true
    }
  ],

  "responses": {
    "200": {
      "schema": {
        "$ref": "#/definitions/Session"
      },
      "description": "Id сессии"
    },
    "403": {
      "description": "Ошибка при выполнении запроса"
    }
  }
};
