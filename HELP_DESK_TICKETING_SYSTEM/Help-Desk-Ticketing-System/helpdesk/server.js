 const mysql = require('mysql2');
   const connection = mysql.createConnection({
       host: 'localhost',
       user: 'root', 
       password: '', 
       database: 'helpdesk'
   });
   connection.connect((err) => {
       if (err) throw err;
       console.log('Connected to MySQL database.');
   });