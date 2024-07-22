
// let p=document.getElementById("h");

// const xhr=new XMLHttpRequest();
// xhr.open("GET","KBP1.txt",true);
// xhr.onreadystatechange=function()
// {
//     if(xhr.readyState===4){
//      if(xhr.status===200)
//      {
//         console.log(xhr);
//         console.log(xhr.responseText);
//         p.innerText=xhr.responseText;
//      }
//      else{
//         console.log("problem with request");
//      }
//     }
// }
// xhr.send();

document.getElementById("b1").addEventListener("click" ,display);

let data=document.getElementById("h");
const xhttp=new XMLHttpRequest();
xhttp.open("GET","KBP1.txt",true);
function display()
{
   xhttp.onload=()=>{
      if(xhttp.status===200)
      {
         data.innerText=xhttp.responseText;
      }
      else
      {
         data.innerText="Error....";
      }
   };
   xhttp.send();
}
