
var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");

function opentab(tabname){

    for(tab of tablinks){
        tab.classList.remove("active-link");
    }

    for(tab1 of tabcontents){
        tab1.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");

}


