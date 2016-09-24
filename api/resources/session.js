exports.get = {
	"tags": ["session"],
	"description": "Метод получает авторизационную сессию",

	"responses": {
		"200": {
			"schema": {
				"$ref": "#/definitions/Session"
			},
			"description": "Id сессии"
		},
		"401": {
			"description": "Ошибка"
		}
	}
};
exports.post = {
	"tags": ["session"],
	"description": "Метод логина пользователя",
	"parameters": [
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
		"400": {
			"description": "Ошибка при выполнении запроса"
		}
	}
};
exports.delete = {
	"tags": ["session"],
	"description": "Метод логаута пользователя",

	"responses": {
		"200": {
			"description": "Успешный запрос"
		},
		"400": {
			"description": "Ошибка при выполнении запроса"
		}
	}
};
