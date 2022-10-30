# DNYF Contacts Services

This is the contacts service for the Study Buddy App. The contacts serivce keeps track of user's contact information such as phone number, email, and their verification status. 

## Entrypoints

```
GET /contacts/{uid}/phone

Response (array of phone numbers)
[
	str // phone numbers
]
```

```
POST /contacts/{uid}/phone

Request body
{

	phone: str

}

Response
{

	uid: int
	phone: str
	verified: str

}
```

```
GET  /contacts/{uid}/email

Response (array of emails)
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

	uid: int
	email: str
	verified: bool

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
	verified: bool
}
```

```
POST /contacts/{uid}/email/status (verify user email)

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
	verified: bool
}
```

```
POST /contacts/phone/status (verify user phone number)

Request body
{
	phone: str
	status: bool
}

Response: status code 200
```