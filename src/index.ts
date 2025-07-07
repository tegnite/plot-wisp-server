import express from 'express';
import connect_db from '@app/config/db.config';
import user_routes from '@app/modules/users/users.routes';
import { error_middleware } from '@app/middlewares/error.middleware';

const app = express();
const port = 8000;

const start_server = async () => {
    // Connect to database
    await connect_db();

    // Middleware to parse JSON bodies
    app.use(express.json());

    app.use('/api/users', user_routes);

    app.get('/', (req, res) => {
        res.send('Hello world! form plot-wisp backend!');
    });

    // Error handling middleware
    app.use(error_middleware);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

start_server().catch((error) => {
    console.error('Failed to connect to the database or start the server:', error);
    process.exit(1); // Exit if database connection fails
});
