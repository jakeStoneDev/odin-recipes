const left = document.getElementById('left');
const right = document.getElementById('right');
const slide = document.getElementById('slide');
var count = 0;

right.addEventListener('click', function () {
  if (count <= -200) {
    count = 0;
    slide.style.transform = 'translateX(' + count + '%)';
  } else {
    count -= 100;
  }
  slide.style.transform = 'translateX(' + count + '%)';
})

left.addEventListener('click', function () {
  if (count === 0) {
    count -= 200;
    slide.style.transform = 'translateX(' + count + '%)';
  } else {
    count += 100;
    slide.style.transform = 'translateX(' + count + '%)';
  }
})

for (var i = 1; i <= 9; i++) {
  let img = document.getElementById('img' + i);
  console.log(i);
  img.style.backgroundImage = 'url(images/coffee' + i + '.jpg)';
  img.style.maxWidth = "100%";
  img.style.maxHeight = "100%";
  console.log('images loaded');
}
