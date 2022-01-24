let myLeads=[]
const savetBtn= document.getElementById("save-btn")
const inputEl=document.getElementById("text-el")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
let saveTabBtn=document.getElementById("saveTab-btn")
const leads =  JSON.parse(localStorage.getItem("myLeads"))
if(leads){
  myLeads=leads
  renderLeads()
}
savetBtn.addEventListener("click",function () 
{
     myLeads.push(inputEl.value)
     inputEl.value=""
     localStorage.setItem("myLeads",JSON.stringify(myLeads))
     renderLeads()
})
function renderLeads(){
  let lsitItems =""
  for(let i =0 ;i<myLeads.length;i++){

  lsitItems += "<li><a target='_blank' href='"+myLeads[i] +"'>"+myLeads[i]+"</a></li>"
   }
  ulEl.innerHTML=lsitItems
}
deleteBtn.addEventListener("dblclick",function(){
localStorage.clear(myLeads)
myLeads=[]
renderLeads()
})
 saveTabBtn.addEventListener("click",function () {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   myLeads.push(tabs[0].url)
   localStorage.setItem("myleads",JSON.stringify(myLeads))
   renderLeads()
 })

})
