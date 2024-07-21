
var flag=0;
document.querySelector("button").addEventListener("click",function(){
    if(flag==0)
        {
            document.querySelector("h4").innerHTML = "Request Sent"
            document.querySelector("h4").style.color = "Green"
            document.querySelector('h5').innerHTML="Add Friend"
            flag=1   
    }
    else{
        document.querySelector("h4").innerHTML = "Cancel Request?"
        document.querySelector("h4").style.color = "Red"
        document.querySelector('h5').innerHTML="Remove Friend"
        flag=1 
    }
} )