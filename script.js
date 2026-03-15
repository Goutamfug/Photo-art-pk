async function removeBg(){

let file=document.getElementById("upload").files[0];

if(!file){
alert("Please upload image");
return;
}

document.getElementById("loading").innerText="Processing image...";

let formData=new FormData();
formData.append("image_file",file);
formData.append("size","auto");

let response=await fetch("https://api.remove.bg/v1.0/removebg",{
method:"POST",
headers:{
"X-Api-Key":"xxK4DYpNsH3YcguAGorJMBxt"
},
body:formData
});

let blob=await response.blob();
let url=URL.createObjectURL(blob);

document.getElementById("preview").src=url;
document.getElementById("download").href=url;

document.getElementById("result").style.display="block";
document.getElementById("loading").innerText="";

}
