// console.log("ndnf")
// document.querySelector('.cross').style.dispaly ='none';
document.querySelector('.cross').style.display='none';
document.querySelector('.hambuger ').addEventListener("click", ()=>{
 document.querySelector('.sidebar').classList.toggle('sidebargo');
   if (document.querySelector('.sidebar').classList.contains('sidebargo' ) ) {
    setTimeout(()=>{
      document.querySelector('.ham') . style .display=' inline'
      
    },300);
    
    document.querySelector('.cross') . style .display=' none'
   }
   else
   {
    
                        document.querySelector('.ham') . style .display=' none'
                        setTimeout(()=>{
                          document.querySelector('.cross') . style .display=' inline'
                        },298);
                       
  }
})
let arr =[ 'bd', 'a', 'b','c','d'];
let t=document.getElementsByTagName("body")[0];
t.className=arr[0];
function color(){
let id=Math.floor(Math.random()*arr.length);
t.className=arr[id];

}
setInterval(color, 2000);
