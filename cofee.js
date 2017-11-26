
window.onload=function(){

    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "https://raw.githubusercontent.com/Samvel1987/cofee/master/cofee.css");
    document.getElementsByTagName("head")[0].appendChild(element);


    var d='<div class="landing_main">'+
        '<div>'+
        '<h1>Get into you dream school</h1>'+
    '</div>'+
    '<div class="h1p1">'+
        'Get connected to students, alumni and professional from your dream school'+

    '</div>'+
    '<div class="advisor_div">'+
        '<button>Find Your Advisor   </button>'+

    '</div>'+
    '</div>';
    var o = document.createElement("div");
    o.innerHTML = d;

    var parentElem = document.querySelector('section');
    // document.body.appendChild(d);

    insertAfter(o, parentElem);

}


function insertAfter(el, referenceNode) {
    if(referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);

    }
}



function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}

function load_home() {
    document.getElementById("content").innerHTML='<object type="text/html" data="https://cdn.rawgit.com/Samvel1987/cofee/master/load.html" ></object>';
}