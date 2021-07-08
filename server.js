const expree = require('express');
const routes = require('./routes');


//import sequelize connection
const config = require('./config/connection.js');
const {sequelize} = require('./models/Product');


const app = exprees();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(exprees.urlencoded({extended: true}));

app.use(routes);


//sync sequelize models to the database, then turn on the server

sequelize.sync({force: false}).then(() => {
app.listen(PORT, () => {
    console.log('app listening on port ${PORT}');
});
});