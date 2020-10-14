var mailList = ['xyz@gmail.com', 'asd@gmail.com', 'qwerty@gmail.com' ];

var userMail;
var x;

userMail = prompt(' inserire qui la vostra email : ');

// ciclo for che verifica se la lunghezza della mail inserita è compatibile con una nell'array

for (var i = 0; i < mailList.length; i++) {
    if ( userMail == mailList[i] ) {
        x = 1;
    }
    else {
        x = 0;
    }
}

if (x = 1) {
    document.getElementById('chkmail').innerHTML = ' mail presente';
     }
else {
    document.getElementById('chkmail').innerHTML = ' spiacenti, mail non presente';
}
