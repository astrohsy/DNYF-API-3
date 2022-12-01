# DNYF Contacts Services

This is the contacts service for the Study Buddy App. The contacts serivce keeps track of user's contact information such as phone number, email, and their verification status.

## Installation

### Building Image

The service will be installed using Docker container.

Please make sure you are at the root level of this project and follow the following commands:

```
docker build . -t <image name>

docker run -d -p 5005:5005 --name <container name>  -e DB_HOST='<DB host url>' -e DB_PORT='<DB port>' -e DB_USER='<DB username>' -e DB_PASSWORD='<DB password>' -e DB_NAME='<DB name>' <image name>

```

### Setup Testing Env

```
docker-compose build
docker-compose up
```

### Tearing Down Testing Env
```
docker-compose down
docker-compose down --volumes
```


## Entrypoints

```
GET /contacts/{uid}/phone

Response (array of phone numbers)
{
	data:
		[
			str // phone numbers
		]
}
```

```
POST /contacts/{uid}/phone

Request body
{

	phone: str

}

Response
{
	data: {
		uid: int
		phone: str
		verified: str
	}

}
```

```
GET  /contacts/{uid}/email

Response (array of emails)
{
	data:
	[
		str // emails
	]
}
[
	str // emails
]
```

```
POST /contacts/{uid}/email

Request body
{
	email: str
}

Response
{

	data: {
		uid: int
		email: str
		verified: bool
	}

}
```

```
GET /contacts/email/status (get user email verification status)

Request body
{
	email: str
}

Response
{
	data: {
		verified: bool
	}
}
```

```
PUT /contacts/{uid}/email/status (verify user email)

Request body
{
	email: str
	status: bool
}

Response: status code 200
```

```
GET /contacts/phone/status (get user phone number verification status)

Request body
{
	phone: str
}

Response
{
	data: {
		verified: bool
	}
}
```

```
PUT /contacts/phone/status (verify user phone number)

Request body
{
	phone: str
	status: bool
}

Response: status code 200
```
