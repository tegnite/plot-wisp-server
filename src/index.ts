import connect_db from '@app/config/db.config';
import app from "@app/config/app.config";

const port = 8000;

const start_server = async () => {
    // Connect to database
    await connect_db();

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

start_server().catch((error) => {
    console.error('Failed to connect to the database or start the server:', error);
    process.exit(1); // Exit if database connection fails
});
