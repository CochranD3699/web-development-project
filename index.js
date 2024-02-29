

$(function() {

    $(".box").mouseenter(function(){
        $(".block").css({"visibility": "hidden"});
        $("p1").css({"visibility": "visible"});
        $(".movie").css({"visibility": "visible"});
    });
});

function peek() {
    var pic = $(".pictures");
    pic.animate({opacity: "0.1"},3000);
    pic.animate({opacity: "1"},9000);
    clearInterval(interval)
  }
  
  $(function() {
    $("button").click(function(){
       $("button").text("nobody's perfect, but I have to be damn close! What other Marine would be able to put up with the US Army for 15 years.");
    });
  });



function validateForm() {
    let x = document.forms["contactForm"]["firstName"].value;
    let y = document.forms["contactForm"]["lastName"].value;
    let z = document.forms["contactForm"]["mail"].value;
    let at = z.indexOf("@");
    let dot = z.indexOf(".");

    if (x == "") {
    alert("First Name must be filled out");
    return false;
    }
    else if (y == "") {
    alert("Last Name must be filled out"); 
    return false;
    }
    else if (z == "") {
    alert("I can't contact you without an email address");
    return false;
    }
    else if ((at <1) || (dot <at+2) || (dot+2>=z.length)){
        alert("Please input a valid email address!");
        return false;
    }

}
