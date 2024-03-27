﻿// redirect to home page if user logged in
window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}

const loader = document.querySelector('.loader');

// select inputs 
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-cond') || null;
const notification = document.querySelector('#notification') || null;

submitBtn.addEventListener('click', () => {
    if(name!=null){ //sign up page
        if(name.value.length < 3){
            return res.json({'alert': 'name must be 3 letters long'});
        } else if(!email.length){
            return res.json({'alert': 'enter your email'});
        } else if(password.length < 8){
            return res.json({'alert': 'password should be 8 letters long'});
        } else if(!number.length){
            return res.json({'alert': 'enter your phone number'});
        } else if(!Number(number) || number.length < 10){
            return res.json({'alert': 'invalid number, please enter valid one'});
        } else if(!tac){
            return res.json({'alert': 'you must agree to our terms and conditions'});
        }
    }
    else{
        //login page
        if(!email.value.length || !password.value.length){
            showAlert('fill all the inputs');
        }
    }
    })

    //send data
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
        .then(response => {
            processData(response);
        })
}

const processData = (data) => {
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    } else if(data.name){
        // create authToken
        data.authToken = generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}



    //alert function
    const showAlert = (msg) => {
        let alertBox = document.querySelector('.alert-box');
        let alertMsg = document.querySelector('.alert-msg');
        alertMsg.innerHTML = msg;
        alertBox.classList.add('show');
        setTimeout(() => {
            alertBox.classList.remove('show');
        }, 3000);
    
    
    }
})
