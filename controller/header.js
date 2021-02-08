/* window.onscroll 사이트가 스크롤 실행할때마다 myfunction은 실행이 된다*/
window.onscroll = () => myfunction();

const header = document.getElementById("navigatorBar");
const HomeBtn = document.getElementById("HomeBtn");
const AboutBtn = document.getElementById("AboutBtn");
const SkillBtn = document.getElementById("SkillBtn");
const ProjectBtn = document.getElementById("ProjectBtn");
const ContactBtn = document.getElementById("ContactBtn");
/* 헤더의 윗쪽 픽셀 를 저장 */
const sticky = header.offsetTop;




function f1(n){
  const t = document.getElementsByClassName("menuTitle")[n].offsetTop;
  if(window.scrollY > sticky){
    window.scrollTo({
      top:t-55,
      behavior: 'smooth'
    })
  }else{
    window.scrollTo({
      top:t-119,
      behavior: 'smooth'
    })
  }
}
function scrollto1(){
  const t = document.getElementsByClassName("menuTitle")[0].offsetTop;
  if(window.scrollY > sticky){
    window.scrollTo({
      top:t-46,
      behavior: 'smooth'
    })
  }else{
    window.scrollTo({
      top:t-104,
      behavior: 'smooth'
    })
  }

}
function scrollto2(){
 f1(1);
}
function scrollto3(){
  f1(2);
}
function scrollto4(){
  f1(3);
}
HomeBtn.addEventListener('click',(event)=> window.scrollTo({
  top:0,
  behavior: 'smooth'
}) );
AboutBtn.addEventListener('click', scrollto1);
SkillBtn.addEventListener('click', scrollto2);
ProjectBtn.addEventListener('click', scrollto3);
ContactBtn.addEventListener('click',scrollto4 );

t1=document.getElementsByClassName("menuTitle")[0].offsetTop-55;
t2=document.getElementsByClassName("menuTitle")[1].offsetTop-55;
t3=document.getElementsByClassName("menuTitle")[2].offsetTop-55;
t4=document.getElementsByClassName("menuTitle")[3].offsetTop-55;
function ToggleHeader(currentPosValue)
{
  if(currentPosValue<940){
    HomeBtn.style.color="#f7941f";
    AboutBtn.style.color="#FEFEFE";
    SkillBtn.style.color="#FEFEFE";
    ProjectBtn.style.color="#FEFEFE";
    ContactBtn.style.color="#FEFEFE";
  }else{
    if(currentPosValue<t2-60){   
    HomeBtn.style.color="#FEFEFE";
    AboutBtn.style.color="#f7941f";
    SkillBtn.style.color="#FEFEFE";
    ProjectBtn.style.color="#FEFEFE";
    ContactBtn.style.color="#FEFEFE";
    }else{
      if(currentPosValue<t3-60){
        HomeBtn.style.color="#FEFEFE";
        AboutBtn.style.color="#FEFEFE";
        SkillBtn.style.color="#f7941f";
        ProjectBtn.style.color="#FEFEFE";
        ContactBtn.style.color="#FEFEFE";
      }else
      {
        if(currentPosValue<t4-550){
        HomeBtn.style.color="#FEFEFE";
        AboutBtn.style.color="#FEFEFE";
        SkillBtn.style.color="#FEFEFE";
        ProjectBtn.style.color="#f7941f";
        ContactBtn.style.color="#FEFEFE";
      }else{
        HomeBtn.style.color="#FEFEFE";
        AboutBtn.style.color="#FEFEFE";
        SkillBtn.style.color="#FEFEFE";
        ProjectBtn.style.color="#FEFEFE";
        ContactBtn.style.color="#f7941f";
      }
      }
    }
  }  
}
const myfunction = () => {
    /* window.scrollY좌표가 sticky보다 클때 생성하기  */
   /* console.log("scrollY :",window.scrollY);
    console.log("t3",t3);
    console.log("t2",t2);*/
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (window.scrollY > sticky){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
    ToggleHeader(scrollPosition);

    }
