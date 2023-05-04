
const Pool = require("pg").Pool

export const pool = new Pool({
    user:"postgres",
    password:"Ayo1234$$",
    host:"localhost",
    port:5432,
    database:"perntodo"
})