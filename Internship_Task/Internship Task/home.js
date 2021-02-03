var firebaseConfig = {
  apiKey: "AIzaSyBurtQMw9EHCOwl4TsEPipqNBl1Nr9G1uk",
  authDomain: "internship-task-6d0b0-default-rtdb.firebaseapp.com",
  databaseURL: "https://internship-task-6d0b0-default-rtdb.firebaseio.com/",
  projectId: "internship-task-6d0b0",
  messagingSenderId: "484107956860",
};
firebase.initializeApp(firebaseConfig);
const url = "https://internship-task-6d0b0-default-rtdb.firebaseio.com/user.json";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("=");
    var flag = false;
    var jsondata;
    Object.values(JSON.parse(this.responseText)).forEach(item => {
      if (item.email === queries[1]) {
        jsondata = item
        flag = true;
        return;
      }
    });
    if (!flag) {
      window.location.href = "inputData.html" + "?email=" + queries[1];
    } else {
      var data = document.createElement('P');
      Object.values(jsondata).forEach(value => {
        data = document.createElement('P');
        data.innerHTML = value;
        document.getElementById("demo").appendChild(data);
      });
    }
  }
};
xhttp.open("GET", url, true);
xhttp.send();




function signout(){
  firebase.auth().signOut().then(function() {
    console.log('Signed Out');
    alert('Successfully Logged Out');
    location.assign("option.html");
  }, function(error) {
    console.error('Sign Out Error', error);
  });
}