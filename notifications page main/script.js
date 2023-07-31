const read = document.getElementById("read");
const number = document.getElementById("number_text");
const circle = document.getElementById("circle");
const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const wrapper = document.getElementById("wrapper");
const wrapper1 = document.getElementById("wrapper1");
const wrapper2 = document.getElementById("wrapper2");
// console.log(read);

read.addEventListener('click', function(){
    // console.log("I was clicked");
    number.textContent = "0";
    circle.style.display= "none";
    circle1.style.display= "none";
    circle2.style.display= "none";
    wrapper.style.backgroundColor = "white";
    wrapper1.style.backgroundColor = "white";
    wrapper2.style.backgroundColor = "white";
});