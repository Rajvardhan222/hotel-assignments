import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
export const app = express();

app.use(cors(
    {
        origin: process.env.BASE_URL,
        credentials: true
    }
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
    
    app.use(express.json({limit : "20kb"}))
    app.use(express.static("public")); 

import hoteladmin from '../routes/hoteladmin.routes.js';
app.use('/api/v1/hoteladmin',hoteladmin)

import guest from '../routes/guest.routes.js';
app.use('/api/v1/guest',guest)


import guestAdmin from '../routes/guestAdmin.routes.js';
app.use('/api/v1/guestAdmin',guestAdmin)

import auth from '../routes/auth.routes.js';
app.use('/api/v1/auth',auth)


