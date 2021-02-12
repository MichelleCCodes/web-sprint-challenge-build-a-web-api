const server = require('./api/server'); 
port=1234

server.listen(1234, () => {
    console.log(`Server is running on port ${port}`)
})