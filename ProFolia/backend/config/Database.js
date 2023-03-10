import { Sequelize } from "sequelize"; //represent data as objects

const db = new Sequelize('login_career', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;