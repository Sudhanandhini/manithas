// Entry point for cPanel's Node.js Selector (Phusion Passenger), which starts
// the app by running this file directly rather than `next start` - Passenger
// expects a plain Node HTTP server listening on process.env.PORT.
const { createServer } = require("http");
const next = require("next");

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        handle(req, res);
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on port ${port}`);
    });
});
