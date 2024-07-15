function Validate(){

    let name = document.getElementById("name").value
    var mailformat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    var emailValue = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    let preferences = document.getElementById("preferences").checked
    let preference = document.getElementById("preference").checked
    let male = document.getElementById("male").checked
    let female = document.getElementById("female").checked

    if (!name) {
        alert("All field must be filled!!")
    }
    else if(!male && !female){
        alert("Choose one of the gender!!")
    }
    else if (!emailValue.match(mailformat)){
        alert("Invalid email address!");
    }
    else if(!phone){
        alert("Please fill in your phone number")

    }
    else if (!phone.match(/^\d+/)){
        alert("Phone number can only contain numeric character!")
    }
    else if (!preferences && !preference){
        alert("Please choose your product preference!!")
    }
    else{
        confirm("Sign Up Completed")
    }
   
}