let display=document.getElementById("display");

function appendValue(value){
display.value+=value;
}

function clearDisplay(){
display.value="";
}

function calculate(){
display.value=eval(display.value);
}

function showSection(id){
document.querySelectorAll(".section").forEach(section=>{
section.classList.add("hidden");
});
document.getElementById(id).classList.remove("hidden");
}

function calculateAge(){
let dob=new Date(document.getElementById("dob").value);
let today=new Date();
let age=today.getFullYear()-dob.getFullYear();
document.getElementById("ageResult").innerHTML="Age: "+age+" years";
}

let selected="";

function openConversion(type){
selected=type;
document.getElementById("conversionButtons").classList.add("hidden");
document.getElementById("conversionPage").classList.remove("hidden");

let title={
mlL:"ML → L",
Lml:"L → ML",
kmM:"KM → M",
Mkm:"M → KM",
cmM:"CM → M",
cmKm:"CM → KM",
cF:"°C → °F",
Fc:"°F → °C"
};

document.getElementById("conversionTitle").innerHTML=title[type];
}

function doConversion(){

let value=Number(document.getElementById("conversionInput").value);
let result;

if(selected=="mlL") result=value/1000+" L";
if(selected=="Lml") result=value*1000+" ML";
if(selected=="kmM") result=value*1000+" M";
if(selected=="Mkm") result=value/1000+" KM";
if(selected=="cmM") result=value/100+" M";
if(selected=="cmKm") result=value/100000+" KM";
if(selected=="cF") result=(value*9/5)+32+" °F";
if(selected=="Fc") result=((value-32)*5/9).toFixed(2)+" °C";

document.getElementById("conversionResult").innerHTML=result;
}

function backConversion(){
document.getElementById("conversionPage").classList.add("hidden");
document.getElementById("conversionButtons").classList.remove("hidden");
}