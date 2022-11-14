


    let counter = true;
    let navbarHide = ()=>{

        const hideitem = document.querySelector('.small-nav');
        if(counter == true){
            hideitem.style.top  =  "60px";

            counter = false;
         }else{

            hideitem.style.top  = "-500px";
            counter = true;
         }
    }