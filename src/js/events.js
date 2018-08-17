
window.onscroll = function(){hideShow()};
window.onload   = function(){formHide()};

function hideShow(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        document.getElementById("hideShow").className = "slideUp";
    }else{
        document.getElementById("hideShow").className = "";
    }

    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.getElementById("hideShow2").className = "slideUp";
    }else{
        document.getElementById("hideShow2").className = "";
    }

    if(document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400){
        document.getElementById("hideShowArticle").className = "slideUp1";
    }else{
        document.getElementById("hideShowArticle").className = "";
    }
}

function formHide(){
        document.getElementById("form").className = "slideUp1";
}

function  barraForm(n){
    if(n.value.length == 2)
        n.value += "/";
    if(n.value.length == 5)
        n.value += "/";
}


