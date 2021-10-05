'use strict'
const sections=document.querySelectorAll('.section')
const btns=document.querySelectorAll('.btns')
const monthly=document.querySelector('.monthly')
const annual=document.querySelector('.annual')
const mains=document.querySelectorAll('.main')
const month=document.querySelector('.month')
const anual=document.querySelector('.anual')
const original=[19.99,24.99,39.99]
const values=[199.99,249.99,399.99]

annual.addEventListener('click',()=>{
    monthly.classList.remove('active')
    annual.classList.add('active') 
    anual.classList.add('scale') 
    month.classList.remove('scale') 
    mains.forEach((main,index) => {
        main.innerHTML=`$${values[index]}`
    });
})
monthly.addEventListener('click',()=>{
    annual.classList.remove('active')
    monthly.classList.add('active')
    month.classList.add('scale') 
    anual.classList.remove('scale') 
    mains.forEach((main,index) => {
        main.innerHTML=`$${original[index]}`
    }); 
})
