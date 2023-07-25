const form= document.getElementById('form');
const email= document.getElementById('email');
const username= document.getElementById('form');
const password= document.getElementById('password');
const errorElement = document.getElementById('error')

form.addEventListener('submit', e =>{
    let messages = []
    
    if (username.value === '' || username.value== null ) {
        messages.push('Name is required')
    }

    if (password.value.length<=6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (messages.length> 0) {
        e.preventDefault();
        errorElement.innerText= messages.join(',')
    }
    console.log('User name has been created, welcome'+ ($="username"))
    alert('User has been created successfully')

});

