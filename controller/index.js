const pageAbout = document.getElementsByClassName("Btn_pageAbout")[0];

pageAbout.addEventListener('click',(event)=>{
    window.scrollTo({
        top:document.getElementsByClassName("menuTitle")[0].offsetTop-107,
        behavior: 'smooth'
      })
})

