
var firebaseConfig = {
    apiKey: "AIzaSyBurtQMw9EHCOwl4TsEPipqNBl1Nr9G1uk",
    authDomain: "internship-task-6d0b0-default-rtdb.firebaseapp.com",
    databaseURL: "https://internship-task-6d0b0-default-rtdb.firebaseio.com/",
    projectId: "internship-task-6d0b0",
    messagingSenderId: "484107956860",

};
firebase.initializeApp(firebaseConfig);

function checkInput() {

    const url = "https://internship-task-6d0b0-default-rtdb.firebaseio.com/user.json";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.responseText);

    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function InputFunction() {
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var q = queryString.split("=");
    var email = q[1];
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var hometown = document.getElementById("hometown").value;
    var phone = document.getElementById("phone").value;
    submitOK = "true";
    const url = "https://internship-task-6d0b0-default-rtdb.firebaseio.com/user.json";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            location.assign("home.html" + "?email=" + email);
        }
    };
    var data = JSON.stringify({
        fname,
        lname,
        email,
        dob,
        hometown,
        phone
    });
    xhr.send(data);

}
