export function validation(email,password){
    const validateEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validatePassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password);

    if(!validateEmail) return "Email is not valid";

    if(!validatePassword) return "Minimum eight characters, at least one uppercase, one lowercase, one number and one special character"

    return null;

}

