# DNYF Contacts Services

This is the contacts service for the Study Buddy App. The contacts serivce keeps track of user's contact information such as phone number, email, and their verification status.

## Installation

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


### Building and Running individually

```
docker build . -t <image name>

docker run -d -p 5005:5005 --name dynf_contacts_api \
	-e DB_HOST='<DB host url>' \
	-e DB_PORT='<DB port>' \
	-e DB_USER='<DB username>' \
	-e DB_PASSWORD='<DB password>' \
	-e DB_NAME='<DB name>' \
	dynf_contacts_api
```


## Entry Points

### Email

Get the email of a given user id:

```
GET  /contacts/{uid}/email

Response:
{
	data: {
		email: str
	}
}
```

Get the uid of a given email:

```
GET  /contacts/email/uid

Request Body:
{
	email: str
}

Response:
{
	data: {
		uid: str
	}
}
```

Get the verification status of an email:

```
GET /contacts/email/status

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

Post an email:

```
POST /contacts/{uid}/email

Request body
{
	email: str
}

Response
{
	data: {
		uid: str
		email: str
		verified: bool
	}
}
```

Update the email of a given uid:

```
PUT /contacts/{uid}/email

Request body
{
	email: str
}

Response: HTTP Status Code 200
```

Update the verification status of an email

```
PUT /contacts/email/status

Request body:
{
	email: str
	status: bool
}

Response: HTTP Status Code 200
```

Delete the email of the given user:

```
DELETE /contacts/{uid}/email

Response: Response: HTTP Status Code 200
```

### Phone Number

Get the phone number of a given user id:

```
GET  /contacts/{uid}/phone

Response:
{
	data: {
		phone_number: str
	}
}
```

Get the uid of a given phone number:

```
GET  /contacts/phone/uid

Request Body:
{
	phone: str
}

Response:
{
	data: {
		uid: str
	}
}
```

Get the verification status of a phone number:

```
GET /contacts/phone/status

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

Post a phone number:

```
POST /contacts/{uid}/phone

Request body
{
	phone: str
}

Response
{
	data: {
		uid: str
		phone_number: str
		verified: bool
	}
}
```

Update the phone number of a given uid:

```
PUT /contacts/{uid}/phone

Request body
{
	phone: str
}

Response: HTTP Status Code 200
```

Update the verification status of a phone number

```
PUT /contacts/phone/status

Request body:
{
	phone: str
	status: bool
}

Response: HTTP Status Code 200
```

Delete the email of the given user:

```
DELETE /contacts/{uid}/phone

Response: Response: HTTP Status Code 200
```

### Zip Code

Get the zip code of a given user id:

```
GET  /contacts/{uid}/zip

Response:
{
	data: {
		zip_code: str
	}
}
```

Get uids of a given zip code:

```
GET  /contacts/zip/uid

Request Body:
{
	zip_code: str
}

Response:
{
	data: {
		uid: [str]
	}
}
```

Get the zip code verification status of an **user**:

```
GET /contacts/{uid}/zip/status

Response
{
	data: {
		verified: bool
	}
}
```

Post a zip code for an user:

```
POST /contacts/{uid}/zip

Request body
{
	zip_code: str
}

Response
{
	data: {
		uid: str
		zip_code: str
		verified: bool
	}
}
```

Update the zip code of a given uid:

```
PUT /contacts/{uid}/zip

Request body
{
	zip_code: str
}

Response: HTTP Status Code 200
```

Update the verification status of a user's zip code

```
PUT /contacts/{uid}/zip/status

Request body:
{
	zip_code: str
	status: bool
}

Response: HTTP Status Code 200
```

Delete the zip code of the given user:

```
DELETE /contacts/{uid}/zip

Response: Response: HTTP Status Code 200
```

### Combined Record

Insert all contact info at once

```
POST /contacts

Request body:
{
	"uid": str, 
	"email": str, 
	"phone": str, 
	"zip_code": str
}

Response:
{
	"uid": str, 
	"email": str, 
	"phone": str, 
	"zip_code": str
}
```

## Swagger API Document

Please use entry point `/api-doc` to see the Swagger API document.

## Known Issues

For `POST /contacts` route, if any of the contact info DB is out of sync, for example, an uid exists in the ZipCode table, but not Phone table, the server will delete rows with the same uid as the request body in all tables. 

For example, if there are is a row with `uid: 123` in the `Email` table, but not in `Phone` or `ZipCode` table, and the request body's `uid` field is also `123`, then the existing row with `uid: 123` will be deleted from the `Email` table.

### Cause
This is caused by the solution to partially successful row insertion. `POST /contacts` route uses the insertion strategy in `/db/*-*-queries.js`. However, in the case of **not** all three contact information fields are successully inserted, the rows that are successfully inserted in the same session needs to be removed and the row deletion is based on the `uid` field. Therefore, in the case of duplicated `uid` in the request body, the route will delete the row with duplicated `uid`.