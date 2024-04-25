const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");

        let getMode = localStorage.getItem("mode");
            if(getMode && getMode === "dark-mode"){
                body.classList.add("dark");
            }

      //dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        //to keep the mode even after refreshed
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

      sidebarOpen.addEventListener("click" , () =>{
        nav.classList.add("active");
      });
      body.addEventListener("click" , e =>{
        let clickedElm = e.target;

        if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
            nav.classList.remove("active");
        }
      });
      

      
const loadmore = document.querySelector('.load-more');

let currentItems = 5;
loadmore.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.post li')];
    e.target.classList.add('show-loader');

    for (let i = currentItems; i < currentItems + 5; i++) {
        setTimeout( function() {
            e.target.classList.remove('show-loader');
            if (elementList[i]) {
                elementList[i].style.display = 'flex';
            }
        }, 3000)
    }
    currentItems += 5;

    //hide load button after fully load
    if (currentItems >= elementList.length) {
        event.target.classList.add('loaded')
    }
});



    //time ago

    jQuery(document).ready(function() {
        jQuery("time.timeago").timeago();
      });


