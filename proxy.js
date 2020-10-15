var proxy = require('redbird')({port: 80});

// Route to any global ip
proxy.register("test.dev.local", "http://localhost:31361");