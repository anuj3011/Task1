var firebaseConfig = {
    apiKey: "AIzaSyBurtQMw9EHCOwl4TsEPipqNBl1Nr9G1uk",
    authDomain: "internship-task-6d0b0-default-rtdb.firebaseapp.com",
    databaseURL: "https://internship-task-6d0b0-default-rtdb.firebaseio.com/",
    projectId: "internship-task-6d0b0",
    messagingSenderId: "484107956860",
};
firebase.initializeApp(firebaseConfig);
function LoginFunction() {
    var at = document.getElementById("email").valueOf("@");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    submitOK = "true";
    if (at == -1) {
        alert("Not a valid e-mail!");
        submitOK = "false";
    }
    if (submitOK == "false") {
        return false;
    } else {
        const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBurtQMw9EHCOwl4TsEPipqNBl1Nr9G1uk";
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            var queryString = "?email=" + email;
            if (xhr.readyState === 4 && xhr.status === 200) {
                window, location.assign("home.html" + queryString);
            }
        };
        var data = JSON.stringify({
            "email": email,
            "password": password
        });
        xhr.send(data);
    }
}
