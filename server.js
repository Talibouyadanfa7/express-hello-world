
const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
// Importez le module bodyParser ici
const app = express();
const port = process.env.PORT || 3000;
const jwt_decode = require('jwt-decode');



// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, "bolya_front")));
app.use('/script',express.static(path.join(__dirname, "script")));
app.use('/model',express.static(path.join(__dirname, "model")));
app.use('/utils',express.static(path.join(__dirname, "utils")));
app.use(express.json()); // Middleware pour parser les requêtes JSON
app.use(express.urlencoded({ extended: true }));



const VideoData = require("./model/videoData");
const SignUpData = require("./model/signUpData");
const SignInData = require("./model/signUpData");
const apiURL2 = "https://seal-app-gysh7.ondigitalocean.app/api/auth"
//const apiURL2="http://localhost:3020/api/auth"


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'bolya_front', 'index.html'));
});



app.get('/sign-up', function(req, res) {
    res.sendFile(path.join(__dirname, 'bolya_front/sign-up.html'));
});

app.get('/sign-in', function(req, res) {
    res.sendFile(path.join(__dirname, 'bolya_front', 'sign-in.html'));
});

// Endpoint pour la page d'accueil (à vérifier, peut-être pas nécessaire si vous utilisez déjà '/')

app.get('/home', function(req,res) {
    res.sendFile(path.join(__dirname, 'bolya_front/index.html'));

});

app.get('/forget-password', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'forget-password.html'));
});

app.get('/admin-dashboard', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'admin-dashboard.html'));
});
app.get('/contact-us', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'contact-us.html'));
});

app.get('/empty-cart', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'empty-cart.html'));
});

app.get('/cart', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'cart.html'));
});
app.get('/checkout', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'checkout.html'));
});

app.get('/forgot-password', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'forgot-password.html'));
});

app.get('/nos-vendeurs', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'instructor-list.html'));
});
app.get('/un-vendeur', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'instructor-single.html'));
});
app.get('/dashboard-produits', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'admin-student-list.html'));
});
app.get('/admin-create-course', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'instructor-create-course.html'));
});

app.get('/verify-code', function(req, res) {
    res.sendFile(path.join(__dirname,  'bolya_front', 'verify-code.html'));
});



// Endpoint pour la connexion (signin)
app.post('/signin', async (req, res) => {
    try {
        // Récupérer les données du corps de la requête
        const { username, password } = req.body;
        class SignInData {
            constructor( username, password) {
                this.username = username;
                this.password = password;
            }
        }
        const signInData = new SignInData( username, password);

        console.log(signInData)
        // Effectuer une requête POST à l'API pour la connexion
        const response = await axios.post(`${apiURL2}/signin`, signInData);

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

        const {firstname,lastname, phoneNumber, password} = req.body;
        console.log(req.body)
        //const signUpData = new SignUpData(firstname,lastname, phoneNumber, password);
        const headers = {"Content-Type":"application/json"}
        // Effectuer une requête POST à l'API pour l'inscription
        //console.log(signUpData)
        const response = await axios.post(`${apiURL2}/signup`, req.body,{headers});


        res.json(response.data);


    } catch (error) {
        console.error('Erreur lors de l\'inscription dd :', error.response.data);
        // Renvoyer une erreur avec le code d'erreur de l'API
        res.status(error.response.status).json(error.response.data);
    }
});

app.post('/logout', async (req, res) => {
    try {
        const {token,user} = req.body;
        console.log(token)
        const headers = {"Content-Type":"application/json","x-access-token":token}
        // Effectuer une requête POST à l'API pour la connexion
        const response = await axios.post(`${apiURL2}/signout`, {token, user},{headers});

        // Si la connexion est réussie, renvoyer les données de l'utilisateur
        res.json(response.data);
    } catch (error) {
        console.error('Erreur lors de la connexion :', error.response.data);
        // Renvoyer une erreur avec le code d'erreur de l'API
        res.status(error.response.status).json(error.response.data);
    }
});


app.post('/verify-code', async (req, res) => {
    try {
        // Récupérer les données du corps de la requête

        const { phoneNumber, smsCode,token} = req.body;
        const  headers = {"x-access-token":token}
        console.log(req.body)
        const verifyData = {
            phoneNumber,
            smsCode
        };

        // Effectuer une requête POST à l'API pour l'inscription
        const response = await axios.post(`${apiURL2}/smsCodeVerification/${phoneNumber}`, verifyData,{headers});
        console.log(1)
        // Si l'inscription est réussie, renvoyer les données de l'utilisateur
        res.json(response.data);
    } catch (error) {
        console.error('Erreur lors de l\'inscription dd :', error.response.data);
        // Renvoyer une erreur avec le code d'erreur de l'API
        res.status(error.response.status).json(error.response.data);
    }
});



app.post('/admin-create-course', async (req, res) => {
    // Récupérer les données du formulaire depuis req.body
    const formData = req.body;
    console.log(req.body)
    const imageFile = req.files['image'][0];
    const videoFile = req.files['videoResume'][0];
    formData['image'] = imageFile;
    formData['videoResume'] = videoFile;
    const  headers = {"x-access-token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM0YjVlMGRmMWJhMzJjYzA5YWRhZGUiLCJleHAiOjE3MDc5NDMxMjIsImlhdCI6MTcwNzkxNDMyMn0.eKQ6WOTe09TshNou44HKa1z3xcOzme32kl9JCUFkX8CFcUoDaFFuQFvoZcmg9kdCBiVPmobO13vtwsXpayycsFMiOWAZ2kg6XXu40zneaVEzUnZ6qjqgfkTxknIgrnM4ha2sZNbbK1CBTCqoTlFAhWJyRfUJtdK8lPuBqK_RKyxOEefDQY0B0ibnj4uBV_wLAGeBfB9E6DbCfqiCyKTZZYoNaIodQQQT7XLSSRvSXdz3ymyih_jY_FqLMMcV5KDq2TPJ9Bn_nfKcCOQe3gplhRHwbJlFrNTmy1LSEyax0U_fTReqsErvriz6INUGYV6xambmqWnpVz-Pz2TSeNY9LA"}
    ////console.log(reponse); // Afficher les données reçues dans la console
    const response = await axios.post(`${apiURL2}/courses/createCoursesByAdmin`, formData, { headers
    });
    // Récupérer les fichiers soumis

    // Vous pouvez effectuer ici tout traitement nécessaire avec les données reçues
    res.send('Formulaire soumis avec succès!');
});





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


