function getPercentage()
{
var ReportCard = document.querySelector("#Result")
var Top = document.querySelector("#Top");
var Percentage = document.querySelector("#Average");
var Body = document.querySelector("#DisplayBody");



var Name = document.querySelector("#name").value;
var Class = document.querySelector("#class").value;
var RollNo = document.querySelector("#rollNo").value;

var m1 = parseFloat(document.getElementById("mark1").value);    
var m2 = parseFloat(document.getElementById("mark2").value);
var m3 = parseFloat(document.getElementById("mark3").value);
var Average = parseInt((m1 + m2 + m3)/3);

ReportCard.style.border= "dotted white 3px";
ReportCard.style.padding="7% 15%";
ReportCard.style.textAlign = "center";

Top.style.color= "Gray";
Top.style.fontSize = "xx-large";
Body.style.color= "White";
Body.style.fontSize= "large";

Top.innerText = "REPORT CARD";
Body.innerHTML=  Name + " of Class " + Class + " with RollNo : " + RollNo + " has scored ";
Percentage.innerText= Average + " PERCENTAGE";

if(Average<40)
    {
         Percentage.style.color="red"; 
         document.getElementById("image").src = "https://media.giphy.com/media/mGPYIgOrNEGIqtd8FP/giphy.gif";
         
    }

else if(Average<70)
    {
        Percentage.style.color="green";
        document.getElementById("image").src = "https://media.giphy.com/media/Q8apqDkk7CeUB3gfh4/giphy.gif";
    }
else
    { 
        Percentage.style.color="white"; 
        document.getElementById("image").src = "https://media.giphy.com/media/5T06ftQWtCMy0XFaaI/giphy.gif"; 
    }


}