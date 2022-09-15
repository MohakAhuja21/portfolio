 // calling internet connectivity classes
 const internetCon= document.querySelector('.internetCon');
 const title= document.querySelector('.iContent span');
 const subTitle= document.querySelector('.iContent p');
 const onlineIcon= document.querySelector('.online-icon');
 const closeIcon =document.querySelector('.cancel-icon');

 // using ajax i will send a get request to see url is sending any data as response code 200 or not. using onError-length and status code we will be able to determine it. If not then it is not connected to internet and message will display offline.
 window.onload=()=>{
     function ajax(){
         let xhr= new XMLHttpRequest(); //creating new XML object
         xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true); //sending get request to this url ->JSON PLACEHOLDER
         xhr.onload=()=>{ //once AJAX is loaded
             if (xhr.status==200 && xhr.status<300) { //user is online and getting response code as 200 or less than 300.
                 // console.log("online");
         internetCon.classList.remove('offline');
         title.innerHTML="internet connected";
         subTitle.innerHTML="you are online";
         onlineIcon.innerHTML="<i class='bx bx-wifi'></i>";

         closeIcon.onclick=()=>{
             internetCon.classList.add('hide');
         }
             }
             else{ //user is not online
                 offline(); //calling offline function   
             }
         }
         xhr.onerror=()=>{ //if passed url is incorrect or returning other error like '404'.
             // console.log("offline");
             offline();  //calling offline function
         }
         xhr.send();
     }
     function offline(){
         internetCon.classList.add('offline');
         title.innerHTML="internet disconnected";
         subTitle.innerHTML="you are offline";
         onlineIcon.innerHTML="<i class='bx bx-wifi-off'></i>";
     } 
     setInterval(()=>{ //using setInterval because it will autoRefresh the message itself without reloading the page after 100ms.
         ajax(); //calling AJAX function
     },100); //100ms;
 }



// removing cross icon from page
document.querySelector('.cross').style.display="none";
// script to toggle sidebar 
function toggleSidebar(){
    document.querySelector(".sidebar").classList.toggle("sidebarGo"); 
    if (document.querySelector(".sidebar").classList.contains("sidebarGo")){
        // removing/replacing an element
        document.querySelector(".ham").style.display='inline'
        document.querySelector(".cross").style.display='none'
    }
    else{
        // removing/replacing an element
        document.querySelector(".ham").style.display='none'
        document.querySelector(".cross").style.display='inline'
    }
}

//side navigation bar close if clicking anywhere on the page.
const con=document.getElementById('container');
const sidebar=document.querySelector('.sidebar')
container.onclick=function(){
    console.log("working");
    if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
        (sidebar.classList.contains("sidebarGo"))
        sidebar.classlist.remove("sidebarGo");
    }
       else{
        document.querySelector(".sidebar").classList.toggle("sidebarGo"); 
        document.querySelector(".ham").style.display='inline'
        document.querySelector(".cross").style.display='none'     
       }
    }, true;

// script for download CV button
let button = document.querySelector(".button");
button.addEventListener("click",()=>{ 
    button.classList.add("active");
    setTimeout(()=>{
        button.classList.remove("active");
        document.querySelector("i").classList.replace('bx-cloud-download','bx-check-double');
        // replace text
        document.querySelector(".btn-text").innerHTML="completed";
        // download will start automatically after animation will be done !
        let download_href="source/CV/blank pdf.pdf";
        window.location.href=download_href;
        // alert
        alert("download completed in background. check notification !");
    },6000)//it will remove active button class after 6s.
})

// function to bring to the top of website
const toTop=document.querySelector('.to-top');
window.addEventListener('scroll',()=>{
    if (window.pageYOffset>100) {
        toTop.classList.add('active');        
    }
    else{
        toTop.classList.remove('active');
    }
})

// function to open a specific page when someone search through input[search] 
function openPage(){
    var x= document.getElementById('search').value;
// if someone search for email it will open contact.html page
    if (x=='email') {
        window.open('/contact.html')
    }
    if (x=='graduation') {
        window.open('/skills.html')
    }
    else{
        // alert("cannot find. Try typing 'graduation' or 'email'")
        var notyf = new Notyf();
notyf.error("cannot find. Try typing 'graduation' or 'email'");
    }
}

// dark mode/theme
var icon= document.getElementById('icon');
icon.onclick=function(){
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme','dark');
        // notification when user clicks on flicker to enable dark theme by notyf.js
        var notyf = new Notyf();
        notyf.success("we will remember your theme preference");
}
    else{
        localStorage.setItem('theme','light');
    }
}
// local storage for setting the theme as default that is set by user
 //if localStorage theme value is null it will check and add this theme
 if (localStorage.getItem('theme')==null) { 
    localStorage.setItem('theme','light')  // value->light
}
// local data
let localData= localStorage.getItem('theme'); //local data value will be light by default

if (localData=="light") {
    document.body.classList.remove("dark-theme"); //whenever localData value is light it will remove dark theme 
}
else if (localData=='dark') {
    document.body.classList.add("dark-theme"); 
}

// contact form validation starts here....
//  textarea/message validation
function myFunc(){
    var a= document.getElementById('textMessage').value;

    // if message is empty
    if (a=="") {
        document.getElementById('message').innerHTML="any message u want to give ?";
        document.getElementById('message').style.color='white';
        return false;
    }
    // if message is less than 1 digits
    if (a.length<2) {
        document.getElementById('message').style.color="red";
        document.getElementById('message').innerHTML="please type more than 1 character";
        return false;
    }
    // if message length is more than 30 characters show an error.
    if (a.length>30) {
        document.getElementById('message').innerHTML="oops! not more than 30 characters";
        document.getElementById('message').style.color="red";
        return false;
    // }
}
// name validation
function validateName(){
    var name= document.getElementById('Fname').value;

    // if name is not written give a error.
    if (name.length==0) {
        document.getElementById('name-error').innerHTML="Name is required";
        return false;
    }
    // expression->1st character should be alphabet after that there will be a space and then another alphabet character. If value does not match the expression then give an error message and return
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        document.getElementById('name-error').innerHTML="please type your full name"
        return false;
    }
    // if all conditions are true. user may proceed.
    document.getElementById('name-error').innerHTML="<i class='bx bx-user-check'></i>";
    return true;
}
//phone validation
function validatePhone(){
    var phone= document.getElementById('phone').value;

    if (phone.length==0) {
        document.getElementById('phone-error').innerHTML='phone number required';
        return false;
    }
    if (phone.length!==10) {
        document.getElementById('phone-error').innerHTML="phone number should be of 10 digits.";
        return false;    
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        document.getElementById('phone-error').innerHTML="please type numbers!";
        return false;
    }
    document.getElementById('phone-error').innerHTML="<i class='bx bx-user-check'></i>";
    return true;
}
// email validation
function validateEmail(){
    var email= document.getElementById('email').value;

    if (email=="") {
        document.getElementById('email-error').innerHTML="email address is required";
    document.getElementById("email").removeAttribute("required");

        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        document.getElementById('email-error').innerHTML="email invalid";
    return false;
    }
    document.getElementById('email-error').innerHTML="<i class='bx bx-user-check'></i>";
    return true;
}

// preloader
var loader=document.getElementById('preloader');
window.addEventListener('load',vanish);

function vanish(){
    loader.classList.add('disappear');
}

// wave surfer.js




