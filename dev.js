var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}

// dropdown

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

// num counter - start
function animate(obj, initVal, lastVal, duration) {
   let startTime = null;

//get the current timestamp and assign it to the currentTime variable
let currentTime = Date.now();

//pass the current timestamp to the step function
const step = (currentTime ) => {

//if the start time is null, assign the current time to startTime
if (!startTime) {
   startTime = currentTime ;
}

//calculate the value to be used in calculating the number to be displayed
const progress = Math.min((currentTime - startTime)/ duration, 1);

//calculate what to be displayed using the value gotten above
obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

//checking to make sure the counter does not exceed the last value (lastVal)
if (progress < 1) {
   window.requestAnimationFrame(step);
} else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
   }
};
//start animating
   window.requestAnimationFrame(step);
}
let text1 = document.getElementById('0101');
let text2 = document.getElementById('0102');
let text3 = document.getElementById('0103');
const load = () => {
   animate(text1, 0, 511, 7000);
   animate(text2, 0, 232, 7000);
   animate(text3, 100, 25, 7000);
}
// num counter -  end
