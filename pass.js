// generate password function
function getPassword(){
    const use="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";

    let passwordLength=14;
    let password="";

    for(let i=0; i<=passwordLength; i++){
        let random=Math.floor(Math.random()* use.length);
        password += use.substring(random, random+1);
    }
    document.getElementById("password").value=password;
}
// copy password
function copyPass(){
    const c=document.getElementById('password');
    c.select();
    c.setSelectionRange(0,99999);
    navigator.clipboard.writeText(c.value);
    // to replace text from copy to copied !
    document.querySelector('.btn-text').innerHTML="copied";
}