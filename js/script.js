// --------------------  -------------------- 
    // 
    $(window).scroll(function() {     
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".header-nav").addClass("active");
        }
        else {
            $(".header-nav").removeClass("active");
        }
    });
    
    // 
    function homeOpen() {
        document.getElementById("home-menu").style.display = "flex";
    }
    function homeClose() {
        document.getElementById("home-menu").style.display = "none";
    }    
    // -------------------- 
//  -------------------- -------------------- --------------------   





// --------------------  -------------------- 
    //
    // [Popular Item] - Horizontal mouse wheel
    const policyContainer = document.getElementById("policy-section-con");
    // where "container" is the id of the container
    policyContainer.addEventListener("wheel", function (e) {
            if (e.deltaY > 0) {
                policyContainer.scrollLeft += 100;
            e.preventDefault();
            // prevenDefault() will help avoid worrisome 
            // inclusion of vertical scroll 
        }
        else {
            policyContainer.scrollLeft -= 100;
            e.preventDefault();
        }
    });
    // That will work perfectly
    // -------------------- 
//  -------------------- -------------------- --------------------  





// --------------------  -------------------- 
    // 
    function About() {
        document.getElementById("about-us").style.display = "flex";
        document.getElementById("terms").style.display = "none";
        document.getElementById("privacy-policy").style.display = "none";
        document.getElementById("conditions").style.display = "none";
        document.getElementById("commitment").style.display = "none";
        document.getElementById("legal").style.display = "none";

        document.getElementById("underline1").style.borderBottom = "2px solid var(--yellow-background)";
        document.getElementById("underline2").style.borderBottom = "2px solid transparent";
        document.getElementById("underline3").style.borderBottom = "2px solid transparent";
        document.getElementById("underline4").style.borderBottom = "2px solid transparent";
        document.getElementById("underline5").style.borderBottom = "2px solid transparent";
        document.getElementById("underline6").style.borderBottom = "2px solid transparent";
    }
    // --------------------
     
    // 
    function Terms() {
        document.getElementById("about-us").style.display = "none";
        document.getElementById("terms").style.display = "flex";
        document.getElementById("privacy-policy").style.display = "none";
        document.getElementById("conditions").style.display = "none";
        document.getElementById("commitment").style.display = "none";
        document.getElementById("legal").style.display = "none";

        document.getElementById("underline1").style.borderBottom = "2px solid transparent";
        document.getElementById("underline2").style.borderBottom = "2px solid var(--yellow-background)";
        document.getElementById("underline3").style.borderBottom = "2px solid transparent";
        document.getElementById("underline4").style.borderBottom = "2px solid transparent";
        document.getElementById("underline5").style.borderBottom = "2px solid transparent";
        document.getElementById("underline6").style.borderBottom = "2px solid transparent";
    }
    // --------------------
     
    // 
    function Policy() {
        document.getElementById("about-us").style.display = "none";
        document.getElementById("terms").style.display = "none";
        document.getElementById("privacy-policy").style.display = "flex";
        document.getElementById("conditions").style.display = "none";
        document.getElementById("commitment").style.display = "none";
        document.getElementById("legal").style.display = "none";

        document.getElementById("underline1").style.borderBottom = "2px solid transparent";
        document.getElementById("underline2").style.borderBottom = "2px solid transparent";
        document.getElementById("underline3").style.borderBottom = "2px solid var(--yellow-background)";
        document.getElementById("underline4").style.borderBottom = "2px solid transparent";
        document.getElementById("underline5").style.borderBottom = "2px solid transparent";
        document.getElementById("underline6").style.borderBottom = "2px solid transparent";
    }
    // --------------------
     
    // 
    function Conditions() {
        document.getElementById("about-us").style.display = "none";
        document.getElementById("terms").style.display = "none";
        document.getElementById("privacy-policy").style.display = "none";
        document.getElementById("conditions").style.display = "flex";
        document.getElementById("commitment").style.display = "none";
        document.getElementById("legal").style.display = "none";

        document.getElementById("underline1").style.borderBottom = "2px solid transparent";
        document.getElementById("underline2").style.borderBottom = "2px solid transparent";
        document.getElementById("underline3").style.borderBottom = "2px solid transparent";
        document.getElementById("underline4").style.borderBottom = "2px solid var(--yellow-background)";
        document.getElementById("underline5").style.borderBottom = "2px solid transparent";
        document.getElementById("underline6").style.borderBottom = "2px solid transparent";
    }
    // --------------------
     
    // 
    function Commitment() {
        document.getElementById("about-us").style.display = "none";
        document.getElementById("terms").style.display = "none";
        document.getElementById("privacy-policy").style.display = "none";
        document.getElementById("conditions").style.display = "none";
        document.getElementById("commitment").style.display = "flex";
        document.getElementById("legal").style.display = "none";

        document.getElementById("underline1").style.borderBottom = "2px solid transparent";
        document.getElementById("underline2").style.borderBottom = "2px solid transparent";
        document.getElementById("underline3").style.borderBottom = "2px solid transparent";
        document.getElementById("underline4").style.borderBottom = "2px solid transparent";
        document.getElementById("underline5").style.borderBottom = "2px solid var(--yellow-background)";
        document.getElementById("underline6").style.borderBottom = "2px solid transparent";
    }
    // --------------------
     
    // 
    function Legal() {
        document.getElementById("about-us").style.display = "none";
        document.getElementById("terms").style.display = "none";
        document.getElementById("privacy-policy").style.display = "none";
        document.getElementById("conditions").style.display = "none";
        document.getElementById("commitment").style.display = "none";
        document.getElementById("legal").style.display = "flex";

        document.getElementById("underline1").style.borderBottom = "2px solid transparent";
        document.getElementById("underline2").style.borderBottom = "2px solid transparent";
        document.getElementById("underline3").style.borderBottom = "2px solid transparent";
        document.getElementById("underline4").style.borderBottom = "2px solid transparent";
        document.getElementById("underline5").style.borderBottom = "2px solid transparent";
        document.getElementById("underline6").style.borderBottom = "2px solid var(--yellow-background)";
    }
    // --------------------
//  -------------------- -------------------- --------------------  





// --------------------  -------------------- 
    // 
    
    // -------------------- 

    //  

    // -------------------- 
//  -------------------- -------------------- -------------------- 