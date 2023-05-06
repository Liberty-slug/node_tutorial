const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to LibertyGist Page');
    }
    if(req.url === '/about'){
        res.end('Welcome to About web Page');
    }

    res.end(`
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h1> Oops!</h1>
            <p> This page could not be found</p>
            <a href='/'>Go Back</a>
        </div>
    `);
})

server.listen(5000);