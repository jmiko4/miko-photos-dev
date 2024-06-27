function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// if(localStorage.getItem("firstTime")==null){
//     alert("This is your first time on my website! Enjoy!");
//     localStorage.setItem("firstTime","done");
//  }