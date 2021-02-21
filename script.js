const riview = [
   {
      name: 'dani',
      job: 'Pempek Developer',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien eget mi proin sed. ',
      image: 'https://img.icons8.com/nolan/64/user.png'

   },
   {
      name: 'vero',
      job: 'Galon Developer',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien eget mi proin sed. ',
      image: 'https://img.icons8.com/nolan/64/user-female.png'

   },
   {
      name: 'adit',
      job: 'Pangsit Developer',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien eget mi proin sed. ',
      image: 'https://img.icons8.com/nolan/64/camera-icon-with-face.png'

   }
]

const image = document.querySelector('.card-img-top')
const name = document.querySelector('.card-title')
const info = document.querySelector('.card-text')

const nextbtn = document.querySelector('.next-btn')
const prievbtn = document.querySelector('.prev-btn')
const suprise = document.querySelector('.suprise-btn')

let initialState = 0

window.addEventListener('load', function () {
   changePriview()
})

function changePriview() {
   state = riview[initialState]
   image.src = state.image
   name.textContent = state.name
   info.textContent = state.info
}

nextbtn.addEventListener('click', function () {
   initialState++
   if (initialState > riview.length - 1) {
      initialState = 0
   }
   changePriview()
})
prievbtn.addEventListener('click', function () {
   initialState--
   if (initialState < 0) {
      initialState = riview.length - 1
   }
   changePriview()
})

suprise.addEventListener('click', function () {
   initialState = Math.floor(Math.random() * riview.length)
   if (image.src == riview[initialState].image) {
      initialState++
      if (initialState > riview.length - 1) {
         initialState = 0
      }

   }
   console.log(initialState);
   changePriview()
})

