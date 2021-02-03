var firebaseConfig = {
    apiKey: "AIzaSyBurtQMw9EHCOwl4TsEPipqNBl1Nr9G1uk",
    authDomain: "internship-task-6d0b0-default-rtdb.firebaseapp.com",
    databaseURL: "https://internship-task-6d0b0-default-rtdb.firebaseio.com/",
    projectId: "internship-task-6d0b0",
    messagingSenderId: "484107956860",
};
firebase.initializeApp(firebaseConfig);
async function createNewAccount() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(user.uid);
        location.assign("sign.html");
    } catch (error) {
        console.log(error.message);
        alert(error.message);
    }
}