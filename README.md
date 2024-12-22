
#  Hotel Management

This is a project assignment which can be used as a hotel management tool for small scale business.
The owner of this assignment is [rajvardhan](https://github.com/rajvardhan222)



## Features

- Add a hotel
- Add a guest
- edit a guest
- print the details of the guests
- register user by scanning qr code.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Add this to client/hotel

`VITE_SERVER_URL=http://localhost:8845`

Add this to /server

`PGHOST=localhost`

`PGPORT=5432`

`PGDATABASE=hotelmanagement`

`PGUSER=postgres`

`PGPASSWORD=*******`

`CLOUDINARY_CLOUD_NAME=******`

`CLOUDINARY_API_KEY=******`

`CLOUDINARY_API_SECRET=*******`

`ACCESS_TOKEN_SECRET=***********`

`ACCESS_TOKEN_EXPIRES_IN = 10d`

`BASE_URL=http://localhost:8845`

`CLIENT_URL=http://localhost:5173`


## Run Locally

- Clone the project
- **Uncomment** the code in `server\index.js` to create tables and relations in database
- Run the server (find command to run below)
- **Comment** the code in `server\index.js` again to not loose database records


```bash
  git clone https://github.com/Rajvardhan222/hotel-assignments.git
```

## Client

Go to the project directory

```bash
  cd client/hotel
```

Install dependencies

```bash
  npm install
```

Run the react dev server

```bash
  npm run dev
```
## Server

Go to the project directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Dependencies
#### Following are Dependencies used in the project with their usage.

### Client
- `@tanstack/react-table` - To Display the data in tables.
- `axios` - For making http request to server
- `react-hook-form` - For handling Forms 

### server
- `bcrypt` - For hashing password before storing it in DB
- `cloudinary` - For storing the hotel logo and qr code images
- `jsonwebtoken` - For checking user authentication
- `multer` - For decoding the files from form before processing it
- `pg` - For interacting with the database
- `qrcode` - For creating a qr code with the supplied text


## Usage/Examples

- Domain to list hotels
  - /list
- Domain to list guests
  - /guestAdmin/list

**NOTE** : I did not provide a link in the page as i thought both task will be done by seprate users

**SECURITY NOTE** : Both adding a hotel and editing and listing a guest can be done by someone who has access to the login password so this should be noted as both are linked to same user account

## Screenshots
- Login Page

![Login Page](https://github.com/Rajvardhan222/hotel-assignments/blob/main/screenshots/Screenshot%202024-12-22%20095303.png?raw=true "Login Page")
- List of Hotels

![List Of Hotels](https://github.com/Rajvardhan222/hotel-assignments/blob/main/screenshots/Screenshot%202024-12-22%20095532.png?raw=true "List of Hotels")
- Adding a new Hotel


![Adding a Hotel](https://github.com/Rajvardhan222/hotel-assignments/blob/main/screenshots/Screenshot%202024-12-22%20095548.png?raw=true "Adding a new hotel")

- QR Code to register guests

![QR Code to register Guests](
  https://github.com/Rajvardhan222/hotel-assignments/blob/main/screenshots/Screenshot%202024-12-22%20095612.png?raw=true "QR Code to register new guests to this hotel"
)
- List of guests in our all hotels

![List of Guests](
  https://github.com/Rajvardhan222/hotel-assignments/blob/main/screenshots/Screenshot%202024-12-22%20095650.png?raw=true "List of guests in out all hotels who are active"
)

- Printing the details of guests

![Printing the details of guests](
  https://github.com/Rajvardhan222/hotel-assignments/blob/main/screenshots/Screenshot%202024-12-22%20095708.png?raw=true "Printing the details fo the guests"
)

- Editing guest details

![Editing Guest Details](
  https://github.com/Rajvardhan222/hotel-assignments/blob/main/screenshots/Screenshot%202024-12-22%20095732.png?raw=true "Editing the details of the guest"
)

- Guest Checkin Form

![Checkin details](
  https://github.com/Rajvardhan222/hotel-assignments/blob/main/screenshots/Screenshot%202024-12-22%20100018.png?raw=true "guest checkin form"
)

- Thankyou Page

![Thankyou page](
  https://github.com/Rajvardhan222/hotel-assignments/blob/main/screenshots/Screenshot%202024-12-22%20100003.png?raw=true "Thankyou Page"
)


