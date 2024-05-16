function  removeClass(arr){
   for (const item of arr) {
      item.classList.remove('active')
   }
}

const tabs = () => {
   const btns = document.querySelectorAll('.tabs .buttons span')
   const contents = document.querySelectorAll('.tabs .content')
   for (const btn of btns) {
      btn.addEventListener('click', () => {
         removeClass(btns)
         removeClass(contents)
         contents[btn.dataset.item].classList.add('active')
         btn.classList.add('active')
      })
   }
}
const galary = () =>{
   const btns = document.querySelectorAll('.slider .btns span')
   const images = document.querySelectorAll('.slider img')
   for (const btn of btns) {
      btn.addEventListener('click', () => {
         if(btn.dataset.id !== undefined){
          removeClass(images)
         images[btn.dataset.id].classList.add('active')
         removeClass(btns)
         btn.classList.add('active')
         }
         
      })
   }
}

galary()
tabs()