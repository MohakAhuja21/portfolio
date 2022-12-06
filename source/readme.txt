<!-- source code for wifi detection -->

<!-- html part  -->
        <div class="internetCon">
          <div class="left-con">
              <div class="iContent">
                  <div class="icon online-icon"></div>
                  <span></span>
                  <hr class="hrI">
                  <p></p>
              </div>
              <div class="right-con">
              <div class="icon cancel-icon"><i class='bx bx-x'></i></div>
              </div>
          </div>
      </div>

<!--css part   -->

.left-con{
    display: flex;
    justify-Content: space-between;
}
@keyframes show_con{
    0%{
        transform: translateX(-100%);
    }
}
.internetCon.hide{
    animation: hide_con 1s ease-in-out forwards;
}
@keyframes hide_con{
    100%{
        transform: translateX(100%);
    }
}
.internetCon{
    animation: show_con 1s ease-in-out forwards;
    z-index: 10;
    position: fixed;
    top: 7px;
    right: 10px;
    box-shadow: 1px 0 6px rgba(0, 0, 1, 0.459);
    padding: 5px;
    border-left: 5px solid rgb(2, 221, 2);
    width: 100%;
    max-width: fit-Content;
    background: whitesmoke;
    border-radius: 5px;
}
.internetCon.offline{
    border-color: rgba(255, 0, 0, 0.574);
}
.icon{
    color: gray;
    font-size: 20px;
    /* margin-bottom: 5px; */
}
.online-icon{
    margin-bottom: 2px;
    color: white !important;
    background: rgb(2, 221, 2);
    width: fit-Content;
    border-radius: 50%;
}
.internetCon.offline .online-icon{
    background: rgba(255, 0, 0, 0.574);
    color: #ccc;
}
.online-icon i{
    padding: 6px;
}
.cancel-icon{            
    border-radius: 50%;
    cursor: pointer;
}
.iContent .hrI{
    margin-top: 1px;
    margin-inline: 0;
    background: rgb(2, 221, 2);
    border: 0.2px solid transparent;
}
.internetCon.offline .iContent .hrI{
    background: rgba(255, 0, 0, 0.574);
}
.iContent p{
    color: gray;
    margin-top: 3px;
}

<!--javascript part -->
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
<!-- source code for wifi detection ends here ! -->
