import express from "express";
import cookieParser from "cookie-parser";
import auth_routes from "@app/modules/auth/auth.routes";
import {error_middleware} from "@app/middlewares/error.middleware";
import {auth_middleware} from "@app/middlewares/auth.middleware";
import user_routes from "@app/modules/users/users.routes";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(auth_middleware);

app.use('/api/auth', auth_routes);
app.use('/api/users', user_routes);

app.get('/', (_, res) => {
    res.send('Hello world! form plot-wisp backend!');
});

// Error handling middleware
app.use(error_middleware);
export default app;
