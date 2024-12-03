const { Pool } = require('pg');

// Hardcoded connection configuration
const con = {
    user: "ugtnawr05tigg",
    port: 5432,
    database: "dbse6goea2cz7o",
    host: "35.215.115.254",
    password: 'Amaranto1'
};

// Create the Pool instance
const pool = new Pool(con);

// Export the query function
module.exports = {
    query: (text, params) => pool.query(text, params)
};
