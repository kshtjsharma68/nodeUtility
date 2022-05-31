const express = require('express');
const app = express();


//PORT declaration
const port = process.env.PORT ?? 8081;

app.listen(port, _ => console.log('server running on port: '+port))