exports.get = {
  "tags": ["user"],
  "description": "Метод получения информации о пользователе",

  "parameters": [
    {
      "name": "id",
      "description": "Id сессии",
      "type": "integer",
      "in": "path",
      "required": true
    },
  ],

  "responses": {
    "200": {
      "schema": {
        "$ref": "#/definitions/User"
      },
      "description": "Информация о пользователе"
    },
    "401": {
      "description": "Ошибка при выполнении запроса"
    }
  }
};
exports.put = {
  "tags": ["user"],
  "description": "Метод изменения данных пользователя",

  "parameters": [
    {
      "name": "id",
      "description": "Id сессии",
      "type": "integer",
      "in": "path",
      "required": true
    },
    {
      "name": "email",
      "description": "Логин пользователя",
      "type": "string",
      "format": "email"
    },
    {
      "name": "login",
      "description": "Логин пользователя",
      "type": "string",
      "format": "login"
    },
    {
      "name": "password",
      "description": "Пароль пользователя",
      "type": "string",
      "format": "password"
    }
  ],

  "responses": {
    "200": {
      "schema": {
        "$ref": "#/definitions/Session"
      },
      "description": "Id  сессии"
    },
    "403": {
      "description": "Ошибка при выполнении запроса"
    }
  }
};
exports.delete = {
  "tags": ["user"],
  "description": "Метод удаления пользователя",

  "parameters": [
    {
      "name": "id",
      "description": "Id сессии",
      "type": "integer",
      "in": "path",
      "required": true
    },
  ],

  "responses": {
    "200": {
      "description": "Успешный запрос"
    },
    "403": {
      "description": "Ошибка при выполнении запроса"
    }
  }
};
