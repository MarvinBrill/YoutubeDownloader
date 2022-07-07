import express, { json } from 'express';
import http from 'http';
import cors from 'cors';
import corsMiddleware from './web/middleware/corsMiddleware';
import router from './web/Router';

const main = async () => {
    const app = express();
    const server = http.createServer(app);

    app.use(
        cors(),
        corsMiddleware,
        json(),
        router
    )

    server.listen(8000, () => {
        console.log(`Server started`);
    });
}

main();