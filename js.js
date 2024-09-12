

    let btn=document.querySelector("#btn1");
    let btn2=document.querySelector("#btn2");
    let btn3=document.querySelector("#btn3");
    let btn4=document.querySelector("#btn4");
    let btn5=document.querySelector("#btn5");
    let btn6=document.querySelector("#btn6");
    let img=document.querySelector("img");
    let p=document.querySelector("p");
btn.addEventListener("click", () => {
    p.innerText="mada mada mada mada mada";
});

btn2.addEventListener("click", () => {
    p.style=`font-size:${16+5}px`
  });
  btn3.addEventListener("click", () => {
    p.style=`font-size:${16-5}px`
  });
  btn4.addEventListener("click", () => {
    p.style=`color:red`;
  });
  btn5.addEventListener("click", () => {
    p.style=`background-color: pink;`;
  });

  btn6.addEventListener("click", () => {
    img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQescwjzmLdMj-ZssWeXha0PzAYSFjd_TFcA&s";
  });