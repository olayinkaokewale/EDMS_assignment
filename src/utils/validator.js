

export default class Validator {

    static isValidEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    static isValidPass = password => {
        return (password !== null && password !== undefined && String(password).trim().length >= 6); 
    }

    static isValidFullname = fullname => {
        const splitted = String(fullname).split(" ");
        return (splitted.length >= 2 && String(splitted[1]).trim().length > 1);
    }

    static isValidInput = input => {
        return (input !== null && input !== undefined && String(input).trim().length >= 3); 
    }

}