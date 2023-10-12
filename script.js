let imageArray = [
  'assets/photo/1.jpg',
  'assets/photo/2.jpg',
  'assets/photo/3.jpg'
]

window.number = '0'
let imageCount = imageArray.length

function image(num){
  if (num == 1) {
    if (number < imageCount - 1) {
      number++
      document.getElementById('images').src = imageArray[number];
      // document.getElementById('num_img').innerHTML = number + 1 + `/`
      //  '' + imageCount;
    }
  } else {
    if (number > 0) {
      number--
      document.getElementById('images').src = imageArray[number];
      // document.getElementById('num_img').innerHTML = number + 1 + `/`
      //  '' + imageCount;
    }
  }
}

function btn_show() {
  if (number != 0) {
    document.getElementById('left').style.display = 'block'
  }
  if (number != imageCount - 1) {
    document.getElementById('right').style.display = 'block'
  }
}

function btn_noshow() {
  document.getElementById('left').style.display = 'none'
  document.getElementById('right').style.display = 'none'
}

// // document.write('<img id="images" src="' + imageArray[0] +'">');

const photoWrap = document.querySelector('.photo_wrap')
      img = document.createElement('img')
img.src = imageArray[0]
img.id = 'images'
photoWrap.appendChild(img)