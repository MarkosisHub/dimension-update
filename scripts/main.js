window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const myNav = document.getElementById('my-nav')
  const logo = document.getElementById('logo')
  // const navbarDropdown1 = document.getElementById('navbarDropdown1')
  // const navbarDropdown2 = document.getElementById('navbarDropdown2')
  const navLink = document.querySelectorAll('.nav-link')

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    myNav.style.padding = "25px 0px";
    myNav.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    myNav.style.borderBottom = "1px solid #1B275B";
    myNav.style.fontSize = '14px'
    myNav.style.color = '#fff'

    // navbarDropdown1.style.color = '#000'
    // navbarDropdown2.style.color = '#000'

    logo.style.width = "33rem";

    navLink.forEach(link => {
      link.style.color = "#000"
    })
  } else {
    myNav.style.backgroundColor = "transparent";
    myNav.style.borderBottom = "0";
    myNav.style.padding = "50px 0px";

    logo.style.width = "35rem";

    // navbarDropdown1.style.color = '#fff'
    // navbarDropdown2.style.color = '#fff'


    navLink.forEach(link => {
      link.style.color = "#fff"
    })
  }
}


// const boxes = document.querySelectorAll('.box')

// window.addEventListener('scroll', checkBoxes)

// checkBoxes()

// function checkBoxes() {
//   const triggerBottom = window.innerHeight / 5 * 4

//   boxes.forEach(box => {
//     const boxTop = box.getBoundingClientRect().top

//     if (boxTop < triggerBottom) {
//       box.classList.add('show')
//     } else {
//       box.classList.remove('show')
//     }
//   })
// }

// Loader
const loader = document.getElementById('loader')

window.addEventListener('load', function() {
  loader.style.display = 'none'
})