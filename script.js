function countalpha(){
    var userinput = document.getElementById('userinput').value;
    var alphacount = userinput.length;
    if(alphacount===7){
        document.getElementById('result').innerHTML= userinput + " is thala for a reason!";
        displayvideo();
    }
    else{
        document.getElementById('result').innerHTML= userinput + " is not thala for a reason.";
        alert("You have entered wrong number of characters!");
        hidevideo();
    }
}
function displayresult() {
    countalpha();
}
function displayvideo(){
    document.getElementById('videocontainer').innerHTML="<video width='500' height='400' controls autoplay><source src='thalavdo.mp4' type='video/mp4'> Your browser does not support the video tag.</video>";
}
function hidevideo() {
    document.getElementById('videocontainer').innerHTML = "";
}