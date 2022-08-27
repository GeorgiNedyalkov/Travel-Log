# Full Stack Travel Log

TODO:

- Server setup

  - Install dependencies: express, cors, morgan, helmet

Morgan: Loger - automatically logs all incoming requests.
Helmet: Hides headers and makes the app more secure.
Cors: Any origin can request to our backend. In the browser only request coming from this browser can reach our backend.

- Install dev-dependencies: eslint, nodemon

Set up the basic express app. Configure the scripts in package.json.

- Install / Setup linter
- Setup Express App
- Setup Not Found and Error Middlewares

The main file is just basic setup middlewares, and error handlers. All other routes are in a separate files.

- Model DB

  - What should we store?

- Set Up Mongoose Model(s)

  - POST /logs
  - Create a new log entry

- GET /logs

  - list all the entries

- Setup Client
  - Create Form to add a new entry
  - Setup Map SDK on client
  - List all entries on Map

Database:

- Log Entry
- Title: Text
- Description: Text
- Rating - scale of 1 - 10
- Image: Text - Url
- Start Date: DateTime
- End Date: DateTime
- Latitude: Number
- Logitude: Number
- Created At: Datetime
- Updated At: Datetime
