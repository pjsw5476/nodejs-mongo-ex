require('dotenv').config();
require('./db/conn');
const express = require("express");
//FIXME 세션
const session = require('express-session');
const bodyParser = require("body-parser");

//FIXME SWAGGER
const swaggerJSDoc = require('swagger-jsdoc');  
const swaggerUI = require('swagger-ui-express')
// const YAML = require('yamljs');
// const swaggerDocument = YAML.load('./swagger.yaml');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');


const app = express();
const port = process.env.PORT;

app.use(express.json({ limit: '10MB' }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

//FIXME 세션
app.use(session({
    secret: 'mobidoo!@#$',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// PASSPORT Middleware
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/', userRoutes)
app.use('/', productRoutes)
//FIXME SWAGGER START
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'onboarding_API',
            version: '1.0.0'
        }
    },
    apis:['api.js']
}
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));
//http://localhost:5000/api-docs/#/
//FIXME SWAGGER END

// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
//session 밑에 passport 옵션이나 미들웨어를 넣어준다
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});



