


document.addEventListener('DOMContentLoaded',()=>{

myBtn = document.querySelector('button')

myForm = document.querySelector('form')

myInput = document.querySelector('.input')

myBtn.disabled = true

document.addEventListener('keyup',()=>{
    if(myInput.value.length>6){
        myBtn.disabled=false;
    }else if (myInput.value.length<6){
        myBtn.disabled=true
    }
    
})



})

document.addEventListener('submit',(e)=>{

    e.preventDefault();
    myBtn = document.querySelector('button')

    myForm = document.querySelector('form')
    
    myInput = document.querySelector('.input')

    myDiv = document.querySelector('div')

    myOl = document.querySelector('.test1')

    

    let myHeading = document.createElement('li')
    let myCloseBtn = document.createElement('button')
    let myCloseText = document.createTextNode('x')

    let myText = document.createTextNode(myInput.value)

    myHeading.appendChild(myText);

    myCloseBtn.appendChild(myCloseText)

    myOl.appendChild(myHeading);
    myOl.appendChild(myCloseBtn)

    myOl.appendChild(myCloseBtn).setAttribute('class','close')
    myOl.appendChild(myHeading).setAttribute('class','test2')

    myInput.value='';
    myBtn.disabled=true

    myCloseBtn.addEventListener('click',()=>{


        myOl.removeChild(myHeading);

        myOl.removeChild(myCloseBtn);


        


    })

   



    

    



   



})




