// var reg = /[a-z]/gi; // regular expression which accept a - z, doesn't matter uppercase or lowercase.

// var reg2 = new RegExp(/[a-z]/, 'gi'); // Another way     g is for global flag and i is for case insensitive 

// Validation script 
const inputs = document.querySelectorAll('input');
const patterns = {
    telephone: /^\d{10}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

// Validation function 
function validate(field, regex) {
    // console.log(regex.test(field.value));
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});