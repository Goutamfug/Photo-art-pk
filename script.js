async function removeBg(){

let file=document.getElementById("upload").files[0];

let formData=new FormData();
formData.append("image_file",file);
formData.append("size","auto");

let response=await fetch("https://api.remove.bg/v1.0/removebg",{
method:"POST",
headers:{
"X-Api-Key":"YOUR_API_KEY"
},
body:formData
});

let blob=await response.blob();
let url=URL.createObjectURL(blob);

document.getElementById("preview").src=url;
document.getElementById("download").href=url;

}
