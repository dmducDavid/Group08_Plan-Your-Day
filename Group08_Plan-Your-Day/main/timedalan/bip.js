/*
mobiscroll.datepicker('#range', {
  controls: ['date']
});*/

var wrapper, content, test;
var more = '<div style="height:1000px; background:#EEE;"></div>';
/*
// this is the scroll event handler
function scroller() {
  // print relevant scroll info
  test.innerHTML = wrapper.scrollTop + " + " + wrapper.offsetHeight + " + 100 > " + content.offsetHeight;

  // add more contents if user scrolled down enough
  if (wrapper.scrollTop + wrapper.offsetHeight + 100 > content.offsetHeight) {
    content.innerHTML += more; // NK: Here you can make an Ajax call and fetch content to append to content.innerHTML
  }
}

wrapper = document.getElementById("wrapper");
content = document.getElementById("content");
test = document.getElementById("test");

content.innerHTML = more;

// hook the scroll handler to scroll event
if (wrapper.addEventListener) // NK: Works on all new browsers
  wrapper.addEventListener("scroll", scroller, false);

else if (wrapper.attachEvent) // NK: Works on old IE
  wrapper.attachEvent("onscroll", scroller);*/

  const container = document.querySelector('.container');

  const URL = 'https://dog.ceo/api/breeds/image/random'
  
  // get the images
  
  function loadImages(numImages = 10){
     let i=0;
      while(i < numImages){
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(response=>response.json())
      .then(data=>{
      // console.log(data.message)
      const img =  document.createElement('img');
      img.src = `${data.message}`
      container.appendChild(img)
      })
      i++;
      }   
      }
  
  loadImages();
  
  
  
  // listen for scroll event and load more images if we reach the bottom of window
  window.addEventListener('scroll',()=>{
      console.log("scrolled", window.scrollY) //scrolled from top
      console.log(window.innerHeight) //visible part of screen
      if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
          loadImages();
      }
  })