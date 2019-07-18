// firebase.auth().signInWithEmailAndPassword("umaruninawab321@gmail.com", "123456")
//     .then((user) => {
//         console.log("user==>", user.user.emailVerified)
//     })
//     .catch(function (error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log("Error==>", errorMessage)
//     });
// setTimeout(()=>{
//     var user = firebase.auth().currentUser;
    
//     user.sendEmailVerification()
//     .then(function () {
//         console.log("Verification Email Send")
//     }).catch(function (error) {
//         // An error happened.
//         console.log("Error")
//     });
// },2000)


Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);