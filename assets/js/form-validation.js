function validateForm() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    let submitBtn = document.getElementById('submit');

    if (name.value == "") {
        document.getElementById('name-error').innerHTML = '<span style="color:red;">This field is required.</span>';
        name.focus(); 
        return false; 
    } else{
        document.getElementById('name-error').innerHTML = '';
    }

    if (email.value == "") {
        document.getElementById('email-error').innerHTML = '<span style="color:red;">This field is required.</span>';
        email.focus(); 
        return false; 
    } else{
        document.getElementById('email-error').innerHTML = '';
    }

    if (email.value.indexOf("@", 0) < 0) { 
        document.getElementById('email-error').innerHTML = '<span style="color:red;">Enter a valid email address.</span>';
        email.focus(); 
        return false; 
    }  else{
        document.getElementById('email-error').innerHTML = '';
    }

    if (email.value.indexOf(".", 0) < 0) { 
        document.getElementById('email-error').innerHTML = '<span style="color:red;">Enter a valid email address.</span>';
        email.focus(); 
        return false; 
    }  else{
        document.getElementById('email-error').innerHTML = '';
    }

    if (message.value == ""){
        document.getElementById('message-error').innerHTML = '<span style="color:red;">This field is required.</span>';
        message.focus(); 
        return false; 
    } else{
        document.getElementById('message-error').innerHTML = '';
    }

    return true;
  }




// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('message');
// const submit-btn = document.getElementById('submit');
// const form = document.querySelector("form");
  
// email.addEventListener('keyup', function (event) {
//   let isValidEmail = email.checkValidity();
  
//   if ( isValidEmail ) {
//     submit-btn.disabled = false;
//   } else {
//     submit-btn.disabled = true;
//   }
// });
  
// submit-btn.addEventListener('click', function (event) {
//   form.submit();
// });