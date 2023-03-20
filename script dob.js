var input=document.createElement("input");
input.setAttribute("type","date");
input.setAttribute("id","dob");

var button=document.createElement("button");
button.innerHTML="display data";
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",displaydata);

var div=document.createElement("div");
div.setAttribute("id","dispaly");


function displaydata(){
    var inputs=document.getElementById("dob").value;
    console.log(typeof(inputs));
    if (Date.parse(inputs)){
        var inputdate=new Date(inputs);
        console.log(inputdate);
        var currentdate=new Date();
        console.log(currentdate);

        //Milliseconds diff
        var millisecdiff=currentdate.getTime()-inputdate.getTime();
        console.log(millisecdiff);

        //Seconds Diff
        var secondsdiff=mathfloor(millisecdiff,1000);
        console.log(secondsdiff);

        //Minutes diff
        var Minutesdiff=mathfloor(secondsdiff,60);
        console.log(Minutesdiff);

        //Hours diff
        var Hoursdiff=mathfloor(Minutesdiff,60);
        console.log(Hoursdiff);

        //day diff
        var daydiff=mathfloor(Hoursdiff,24);
        console.log(daydiff);

        //year diff
        var yeardiff=getyears(inputdate,currentdate);
        console.log(yeardiff);

        //months diff
        var monthdiff=getmonths(inputdate,currentdate);
        console.log(monthdiff);

        div.innerHTML=`
        Given input data is ${inputs} <br>
        year ${yeardiff} <br>
        months ${monthdiff} <br>
        days ${daydiff} <br>
        hour ${Hoursdiff} <br>
        minute ${Minutesdiff} <br>
        seconds ${secondsdiff} <br>
        millisec ${millisecdiff} <br>
        `;

       
    }
    



}

function mathfloor(value1,value2){
    return Math.floor(value1/value2);
}
function getyears(value1,value2){
    var d1=new Date(value1);
    var d2=new Date(value2);
    return d2.getFullYear()-d1.getFullYear();
}
function getmonths(value1,value2){
    var year=getyears(value1,value2);
    var months=(year*12)+(value2.getMonth()-value1.getMonth());
    return months;
}
 document.body.append(input,button,div);
