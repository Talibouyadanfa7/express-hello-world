//
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

        // Récupérer les valeurs du formulaire
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;
        const level = document.getElementById('level').value;
        const language = "Francais"
        const time = document.getElementById('time').value;
        const price = document.getElementById('price').value;
        const fullDescription = document.getElementById('fullDescription').value;

        // Récupérer les fichiers
        const imageFile = document.getElementById('image').files[0];

        const videoFile = document.getElementById('inputGroupFile01').files[0]; // Assuming only one file is selected

        // Créer un objet FormData pour envoyer les données du formulaire et les fichiers
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('level', level);
        formData.append('language', language);
        formData.append('duration', time);
        formData.append('price', price);
        formData.append('fullDescription', fullDescription);
        formData.append('image', imageFile);
        formData.append('videoResume', videoFile);

        const  headers = {"x-access-token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM0YjVlMGRmMWJhMzJjYzA5YWRhZGUiLCJleHAiOjE3MDc5NDMxMjIsImlhdCI6MTcwNzkxNDMyMn0.eKQ6WOTe09TshNou44HKa1z3xcOzme32kl9JCUFkX8CFcUoDaFFuQFvoZcmg9kdCBiVPmobO13vtwsXpayycsFMiOWAZ2kg6XXu40zneaVEzUnZ6qjqgfkTxknIgrnM4ha2sZNbbK1CBTCqoTlFAhWJyRfUJtdK8lPuBqK_RKyxOEefDQY0B0ibnj4uBV_wLAGeBfB9E6DbCfqiCyKTZZYoNaIodQQQT7XLSSRvSXdz3ymyih_jY_FqLMMcV5KDq2TPJ9Bn_nfKcCOQe3gplhRHwbJlFrNTmy1LSEyax0U_fTReqsErvriz6INUGYV6xambmqWnpVz-Pz2TSeNY9LA"}

        const apiURL2="http://localhost:3020/api"
        // Envoyer les données au serveur Express.js via une requête HTTP POSTE
        fetch(`${apiURL2}/courses/createCoursesByAdmin`, {
            method: 'POST',
            body: formData,
            headers:headers

        })
            .then(response => response.text())
            .then(data => {
                console.log(1); // Afficher la réponse du serveur dans la console
                // Vous pouvez effectuer ici toute action supplémentaire après la soumission réussie du formulaire
            })
            .catch(error => {
                console.error('Erreur lors de la soumission du formulaire:', error);
            });
    });
});
