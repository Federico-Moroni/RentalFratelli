const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
require('dotenv').config(); // Te conectas al archivo .env

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// FORM // 

app.post('/api/forma', (req, res) => {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        host:process.env.REACT_APP_HOST, //process.env.REACT_APP_nombreDeLaVariable =>process.env para ingresar a .env, REACT_APP porque en react las variables se declaran asi en .env.
        port:465,
        secure:true,
        auth:{
            user:process.env.REACT_APP_MAIL,
            pass:process.env.REACT_APP_PASS
        }
    });

    let mailOptions={
        from: data.name,
        to:process.env.REACT_APP_MAIL, // Recordar autenticar verificacion de 2 pasos y despues generar contrasena de aplicaciones en gestionar cuenta, seguridad. 
        subject:`Message from ${data.name}`,
        html:`
        <h3>You have a new message!</h3>
        <ul>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Phone:</strong> ${data.phone}</li>
            <li><strong>Check-In:</strong> ${data.CheckIn}</li>
            <li><strong>Check-Out:</strong> ${data.CheckOut}</li>
        </ul>
    <h3>Message:</h3>
    <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, res)=>{
        if(error) {
            res.send(error)
        }
        else {
            res.status(200).send('Success')
        }
    })
    smtpTransport.close();
    })

    app.listen(PORT, ()=>{
    console.log(`Server starting at port ${PORT}`);
    });