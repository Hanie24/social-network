//views for followers, followings and spoons

function view(option) {
    var i;
    var x = document.getElementsByClassName("tablas");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    document.getElementById(view).style.display = "block";
}
