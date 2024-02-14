
// Modèle pour les données d'identification (signin)
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
module.exports = SignUpData;
module.exports = SignInData;
