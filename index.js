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

// experimental-> to be removed if not perfect //side navigation bar closing if closing anywhere on the page.
const con=document.getElementById('container');
container.onclick=function(){
    console.log("working");
    if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
        (document.querySelector(".sidebarGo").classList.remove("sidebar"));
       }
       else{
        document.querySelector(".sidebar").classList.toggle("sidebarGo"); 
       }
    }, true;
// }

// script for animating download CV button
let button = document.querySelector(".button");

button.addEventListener("click",()=>{ 
    button.classList.add("active");

    setTimeout(()=>{
        button.classList.remove("active");
        document.querySelector("i").classList.replace('bx-cloud-download','bx-check-double');
        document.querySelector(".btn-text").innerHTML="completed";
        // download will start automatically after animation will be done !
        let download_href="source/CV/blank pdf.pdf";
        window.location.href=download_href;
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
        alert("cannot find. Try typing 'graduation' or 'email'")
    }
}

// dark mode button
// var icon= document.getElementById('icon');
// icon.onclick=function(){
//     document.body.classList.toggle("dark-theme");
// }
