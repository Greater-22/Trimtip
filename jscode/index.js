const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
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

      searchToggle.addEventListener("click" , () =>{
      searchToggle.classList.toggle("active");
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

      //for the search box
      const search = () => {
        const searchbox = document.getElementById("search-item").value.toUpperCase();
        const storeitems = document.getElementById("product-list")
        const product = document.querySelectorAll(".box, .boxes")
        const pname = document.getElementsByTagName("h3")

        for (var i = 0; i < pname.length; i++) {
            let match = product[i].getElementsByTagName('h3')[0];

            if (match) {
                let textvalue = match.textContent || match.innerHTML

                if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                    product[i].style.display = "";
                } else {
                    product[i].style.display = "none";
                }
            }
        }
      };









            //for video slider navigation
            let items = document.querySelectorAll('.slider .list .item');
            let next = document.getElementById('next');
            let prev = document.getElementById('prev');
            let thumbnails = document.querySelectorAll('.thumbnail .item');

            let countItem = items.length;
            let itemActive = 0;

            next.onclick = function(){
                itemActive = itemActive + 1;
                if(itemActive >= countItem){
                    itemActive = 0
                }
                showSlider();
            }

            //event prev click
            prev.onclick = function(){
                itemActive = itemActive - 1;
                if(itemActive < 0){
                    itemActive = countItem - 1;
                }
                showSlider(); 
            }

            //auto run slider
            let refreshInterval = setInterval(() => {
                next.click();
            }, 6000)

            
            function showSlider(){
                //remove item active old
                let itemActiveveOld = document.querySelector('.slider .list .item.active');
                let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
                itemActiveveOld.classList.remove('active');
                thumbnailActiveOld.classList.remove('active');

                //active new item
                items[itemActive].classList.add('active');
                thumbnails[itemActive].classList.add('active');
            }


            thumbnails.forEach((thumbnail, index) => {
                thumbnail.addEventListener('click', () => {
                    itemActive = index;
                    showSlider();
                });
            });


           


            //first load-more button//
            let loadMoreBtn = document.querySelector('#Load-more');
            let currentItem = 6;

            loadMoreBtn.onclick = () =>{
                let boxed = [...document.querySelectorAll('.contains .box-contain .boxes')];
                for (var i = currentItem; i < currentItem + 4; i++){
                    boxed[i].style.display = 'inline-block';
                }
                currentItem += 4;

                if(currentItem >= boxed.length){
                    loadMoreBtn.style.display = 'none';
                };
            };





            //time ago

            jQuery(document).ready(function() {
                jQuery("time.timeago").timeago();
              });




              const loadmore = document.querySelector('.load-more');

    let currentItemed = 5;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.post li')];
        e.target.classList.add('show-loader');

        for (let i = currentItemed; i < currentItemed + 5; i++) {
            setTimeout( function() {
                e.target.classList.remove('show-loader');
                if (elementList[i]) {
                    elementList[i].style.display = 'flex';
                }
            }, 3000)
        }
        currentItemed += 5;

        //hide load button after fully load
        if (currentItemed >= elementList.length) {
            event.target.classList.add('loaded')
        }
    });



