# REST API description file

### Hello message
route: /api <br> 
method: GET <br>
gets: [] <br>
returns: { message: "Hello from server" } <br>

### Email submition
route: /api/submit/:email <br>
method: POST <br>
gets: [email] <br>
returns: { status: 'ok', message: email } <br>
if fails: { status: 'error' } <br>