/ Initialize Firebase
var config = {
   apiKey: "AIzaSyBK_CUraaMhvELqZS1ev2zE2dChioqXyyg",
   authDomain: "spoon-ea8a3.firebaseapp.com",
   databaseURL: "https://spoon-ea8a3.firebaseio.com",
   projectId: "spoon-ea8a3",
   storageBucket: "",
   messagingSenderId: "254543320278"
};
firebase.initializeApp(config);

// elementos

var txtEmail = document.getElementById("txt-email");
var txtPassword = document.getElementById("txt-password");
var login = document.getElementById("login");
var signUp = document.getElementById("sign-up");

// añadir eventos
login.addEventListener("click", e => {
   // obtener email y contraseña
   var email = txtEmail.value;
   var pass = txtPassword.value;
   var auth = firebase.auth();
   // autenticar
   var declaration = auth.signInWithEmailAndPassword(email, pass);
   declaration.catch(e => console.log(e.message));
});

// registro
signUp.addEventListener("click", e => {
   var email = txtEmail.value;
   var pass = txtPassword.value;
   var auth = firebase.auth();
   // autenticar
   var declaration = auth.createUserWithEmailAndPassword(email, pass);
   declaration.catch(e => console.log(e.message));
});

// agregar un usuario
firebase.auth().onAuthStateChanged(firebaseUser => {
   if (firebase) {
       console.log(firebaseUser);
   } else{
       console.log("no registrado");
   }
});
