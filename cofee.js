
window.onload=function(){

    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "https://cdn.rawgit.com/Samvel1987/cofee/master/cofee.css");
    document.getElementsByTagName("head")[0].appendChild(element);


    var d=document.createElement('div');

    var parentElem = document.querySelector('section');
    // document.body.appendChild(d);

    insertAfter(d, parentElem);

}


function insertAfter(el, referenceNode) {
    if(referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
        // load_home();

    }
}



function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}

function load_home() {
    document.getElementById("content").innerHTML='<object type="text/html" data="https://cdn.rawgit.com/Samvel1987/cofee/master/load.html" ></object>';
}