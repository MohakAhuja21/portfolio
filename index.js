// script to toggle sidebar 
document.querySelector('.cross').style.display="none";
function toggleSidebar(){
    document.querySelector(".sidebar").classList.toggle("sidebarGo"); 
    if (document.querySelector(".sidebar").classList.contains("sidebarGo")){
        document.querySelector(".ham").style.display='inline'
        document.querySelector(".cross").style.display='none'
    }
    else{
        document.querySelector(".ham").style.display='none'
        document.querySelector(".cross").style.display='inline'
    }
}
// script for closing side navigation bar by clicking anywhere on the page
