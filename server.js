
const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();


app.use(express.static(path.join(__dirname, 'bolya_front')));
app.use('/script',express.static(path.join(__dirname, "script")));
app.use('/model',express.static(path.join(__dirname, "model")));
app.use(express.json()); // Middleware pour parser les requêtes JSON
const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));
const SignUpData = require('./model/signupData.js');
const SignInData = require('./model/signupData.js');
const port = process.env.PORT || 3000;

const apiURL="http://localhost:3010/api/auth"

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'bolya_front/index.html'));
});

app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, 'bolya_front/sign-up.html'));
});

app.get('/sign-in', function(req, res) {
    res.sendFile(path.join(__dirname, 'bolya_front/sign-in.html'));
});

app.get('/home', function(req,res) {
    res.sendFile(path.join(__dirname, 'bolya_front/index.html'));
});

// Endpoint pour la connexion (signin)
app.post('/signin', async (req, res) => {
    try {
        // Récupérer les données du corps de la requête
        const { phoneNumber, password } = req.body;
        const signInData = new SignInData( phoneNumber, password);


        // Effectuer une requête POST à l'API pour la connexion
        const response = await axios.post(`${apiURL}/signup`, signInData);

        // Si la connexion est réussie, renvoyer les données de l'utilisateur
        res.json(response.data);
    } catch (error) {
        console.error('Erreur lors de la connexion :', error.response.data);
        // Renvoyer une erreur avec le code d'erreur de l'API
        res.status(error.response.status).json(error.response.data);
    }
});

// Endpoint pour l'inscription (signup)
app.post('/signup', async (req, res) => {
    try {
        // Récupérer les données du corps de la requête

        const {firstname,lastname, phoneNumber, password,accountChoice } = req.body;
        console.log(req.body)
        const signUpData = new SignUpData(firstname,lastname, phoneNumber, password,accountChoice);

        // Effectuer une requête POST à l'API pour l'inscription
        const response = await axios.post(`${apiURL}/signup`, signUpData);
        console.log(1)
        // Si l'inscription est réussie, renvoyer les données de l'utilisateur
        res.json(response.data);
    } catch (error) {
        console.error('Erreur lors de l\'inscription dd :', error.response.data);
        // Renvoyer une erreur avec le code d'erreur de l'API
        res.status(error.response.status).json(error.response.data);
    }
});

// Démarrez le serveur
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
