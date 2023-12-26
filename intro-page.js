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




      function getPageList(totalPages, page, maxLength){
        function range(start, end){
            return Array.from(Array(end - start + 1), (_, i) => i + start);
        }


        var sideWidth = maxLength < 9 ? 1 : 2;
        var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
        var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;


        if(totalPages <= maxLength){
            return range(1, totalPages);
        }

        if(page <= maxLength - sideWidth - 1 - rightWidth){
            return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
        }


        if(page >= totalPages - sideWidth - 1 - rightWidth){
            return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
        }


        return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
      }


      $(function(){
        var numberOfItems = $(".box-containing .box").length;
        var limitPerPage = 6; //how many items visible per page
        var totalPages = Math.ceil(numberOfItems / limitPerPage);
        var paginationSize = 4; //how many page elements visible in the pagination
        var currentPage;

        function showPage(whichPage){
            if(whichPage < 1 || whichPage > totalPages) return false;

            currentPage = whichPage;

            $(".box-containing .box").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

            $(".pagination li").slice(1, -1).remove();

            getPageList(totalPages, currentPage, paginationSize).forEach(item => {
                $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
                .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(item ||"...")).insertBefore(".next-page");
            });

            $(".previous-page").toggleClass("disable", currentPage === 1);
            $(".next-page").toggleClass("disable", currentPage === totalPages);
            return true;
        }

        $(".pagination").append(
            $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Prev")),
            $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Next"))
        );


        $(".box-containing").show();
        showPage(1);

        $(document).on("click", ".pagination li.current-page:not(.active)", function(){
            return showPage(+$(this).text());
        });

        $(".next-page").on("click", function(){
            return showPage(currentPage + 1);
        });

        
        $(".previous-page").on("click", function(){
            return showPage(currentPage - 1);
        });
      });


      document.getElementById('searchForm').onsubmit = function() {
        window.location = 'http://www.google.comsearch?q=site:yourdomainname' + document.getElementById('test').value;
        return false;
      };



      
    //.load-more
    const loadmore = document.querySelector('.load-more');

    let currentItems = 3;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.post li')];
        e.target.classList.add('show-loader');

        for (let i = currentItems; i < currentItems + 3; i++) {
            setTimeout( function() {
                e.target.classList.remove('show-loader');
                if (elementList[i]) {
                    elementList[i].style.display = 'flex';
                }
            }, 4000)
        }
        currentItems += 3;

        //hide load button after contents reach
        if (currentItems >= elementList.length) {
            event.target.classList.add('loaded')
        }
    })


    //time ago

    jQuery(document).ready(function() {
        jQuery("time.timeago").timeago();
      });