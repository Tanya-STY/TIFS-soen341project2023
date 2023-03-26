import { Sequelize } from "sequelize"; //represent data as objects

const db = new Sequelize('registrations', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;