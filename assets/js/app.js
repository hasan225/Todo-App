const form = document.querySelector("form");
const input = document.querySelector("input");
const incomplete = document.querySelector(".incomplete");
const complete = document.querySelector(".complete");
const IcTitle = document.querySelector(".IcTitle");
const cTitle = document.querySelector(".cTitle");



form.addEventListener('submit',(e)=>{
e.preventDefault();

if(input.value==''){
  alert('Please Add a Title')
}
else{
  let checkWrap =document.createElement('div');
  checkWrap.className ='checkWrap';
  incomplete.appendChild(checkWrap)

  let checkbox =document.createElement('input');
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute('id','checkid')

  let ICTag=document.createElement('p')
 let conso = ICTag.innerHTML=input.value


 checkWrap.appendChild(ICTag)
 checkWrap.appendChild(checkbox)


 console.log(conso)
  

 let checkid=document.querySelectorAll('#checkid')
console.log(checkid)
for(checkids of checkid){

  checkids.addEventListener("click", myFunction);

function myFunction() {
  if (checkids.checked == true){
   alert('The Task Has Been Added to the Completion')
   
  let CompletedWrap = document.createElement('div')
  CompletedWrap.className='CompletedWrap';
  let CompletedTitle = document.createElement('p')
  complete.appendChild(CompletedWrap)
  CompletedWrap.appendChild(CompletedTitle)
  let checkWraps=document.querySelectorAll('.checkWrap')

  for(Check of checkWraps){
 console.log(checkWraps.innerHTML)
  CompletedTitle.innerText=Check.innerText
  }
 

  let DeteleTask =document.createElement('button');
  DeteleTask.className='DeteleTask'
  CompletedWrap.appendChild(DeteleTask)
  DeteleTask.innerHTML='Delete'
  let deleteBtn= document.querySelector('.DeteleTask')


deleteBtn.addEventListener('click',()=>{
 CompletedWrap.remove();
})

  } 
}
}


}



  
})


