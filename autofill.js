// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyDj3vYaxIua6SEBCXU3EBkd0k8gVzsf248",
authDomain: "somesh-84c77.firebaseapp.com",
databaseURL: "https://somesh-84c77.firebaseio.com",
projectId: "somesh-84c77",
storageBucket: "somesh-84c77.appspot.com",
messagingSenderId: "783259032848",
appId: "1:783259032848:web:e5011328194314c7429995",
measurementId: "G-KT7XPS084Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();
  var ref = database.ref('customer');
  ref.on("value", gotData);
  function gotData(data){
    var s = data.val();
    var keys = Object.keys(data.val());

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var name = s[k].name;
      var status = s[k].status;
      var balance =s[k].blance
      if(status == "Active"){

      }
    }
  }
