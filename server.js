const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser'); // Importez le module bodyParser ici

const app = express();
const port = process.env.PORT || 3000;


// Middleware pour parser les requêtes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, "bolya_front")));


app.use('/script',express.static(path.join(__dirname, "script")));
app.use('/model',express.static(path.join(__dirname, "model")));
app.use('/utils',express.static(path.join(__dirname, "utils")));



// Endpoint pour la page d'accueil

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'bolya_front', 'index.html'));
});
class SignInData {
    constructor(phoneNumber, password) {
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
}

// Modèle pour les données d'inscription (signup)
class SignUpData {
    constructor(firstname,lastname, phoneNumber, password,accountChoice) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.accountChoice = accountChoice
    }
}
// Endpoint pour la page d'inscription
app.get('/sign-up', function(req, res) {
    res.sendFile(path.join(__dirname, 'bolya_front', 'sign-up.html'));
});

// Endpoint pour la page de connexion
app.get('/sign-in', function(req, res) {
    res.sendFile(path.join(__dirname, 'bolya_front', 'sign-in.html'));
});

// Endpoint pour la page d'accueil (à vérifier, peut-être pas nécessaire si vous utilisez déjà '/')
app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'index.html'));
});

app.get('/forget-password', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'forget-password.html'));
});

app.get('/admin-dashboard', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'admin-dashboard.html'));
});
app.get('/dashboard-commandes', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'admin-earning.html'));
});

app.get('/dashboard-produits', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'admin-student-list.html'));
});
app.get('/admin-create-course', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'instructor-create-course.html'));
});

const apiURL = "http://localhost:3010/api/auth";

// Endpoint pour la connexion (signin)
app.post('/signin', async (req, res) => {
    try {
        // Récupérer les données du corps de la requête
        const { phoneNumber, password } = req.body;
        const signInData = new SignInData(phoneNumber, password);

        // Effectuer une requête POST à l'API pour la connexion
        const response = await axios.post(`${apiURL}/signin`, signInData);

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
        const { firstname, lastname, phoneNumber, password, accountChoice } = req.body;
        const signUpData = new SignUpData(firstname, lastname, phoneNumber, password, accountChoice);

        // Effectuer une requête POST à l'API pour l'inscription
        const response = await axios.post(`${apiURL}/signup`, signUpData);

        // Si l'inscription est réussie, renvoyer les données de l'utilisateur
        res.json(response.data);
    } catch (error) {
        console.error('Erreur lors de l\'inscription :', error.response.data);
        // Renvoyer une erreur avec le code d'erreur de l'API
        res.status(error.response.status).json(error.response.data);
    }
});
app.use('*', (req,res) => {
    res.json({
        at: new Date().toISOString(),
        method: req.method,
        hostname: req.hostname,
        ip: req.ip,
        query: req.query,
        headers: req.headers,
        cookies: req.cookies,
        params: req.params
    })
        .end()
})

// Démarrez le serveur
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
