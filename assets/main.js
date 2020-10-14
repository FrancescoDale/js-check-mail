var mailList = ['xyz@gmail.com', 'asd@gmail.com', 'qwerty@gmail.com' ];

var userMail;
var isEmailFound = false;

userMail = prompt(' inserire qui la vostra email : ');

// asd@gmail.com

// ciclo for che verifica se la lunghezza della mail inserita è compatibile con una nell'array

for (var i = 0; i < mailList.length; i++) {

    // la mail inserita col prompt è uguale a quella che sto esaminando ora?
    if ( userMail == mailList[i] ) {
        isEmailFound = true;
    }
}

if (isEmailFound == true) {
    document.getElementById('chkmail').innerHTML = ' mail presente';
}
else {
    document.getElementById('chkmail').innerHTML = ' spiacenti, mail non presente';
}
