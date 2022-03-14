// slider
$(".autoplay").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  vertical: true,
  autoplaySpeed: 2000,
});

// // 1- Get window width 
// var windowWidth = $(window).width();
// console.log(windowWidth)

// // 2- For all devices under or at 768px, use horizontal orientation
// if(windowWidth <= 992) {
//   $(".autoplay").slick({
//     vertical: false,
//     slidesToShow: 1,
//   });
// } 
// // 3- For all devices over 768px, use vertical orientation
// else {
//   $('.autoplay').slick({
//     vertical: true,
//     slidesToShow: 3,
//   });
// }

(function () {
  const investorArr = [
    {
      name: "Select",
      value: "0"
    },
    {
      name: "Wealth creation",
      value: "1",
    },
    {
      name: "Money management",
      value: "2",
    },
    {
      name: "Investing",
      value: "3",
    },
    {
      name: "Superannuation",
      value: "4",
    },
    {
      name: "Personal insurance",
      value: "5",
    },
    {
      name: "Tax planning",
      value: "6",
    },
    {
      name: "Retirement planning",
      value: "7",
    },
    {
      name: "Aged care advice",
      value: "8",
    }
  ];
  let html = "";
  investorArr.forEach(
    investor =>
      (html += `
      <li class="dropdown-item" value='${investor.value}'> ${investor.name}</li>
    `)
  );
  document.getElementById("dropdown").innerHTML = html;

  const lists = document.getElementsByClassName("dropdown-item");
  [...lists].forEach(list =>
    list.addEventListener("click", e => {
      dropdownChange(e.target.innerText)
      openPage(e.target.value);
    })
  );
})();

function openPage(value) {
  const id = document.getElementById("go");
  if (value) {
    id.classList = 'button go'
    id.setAttribute("href", `service${value}.html`);
    id.removeAttribute("style")
  }
}

function dropdownChange(text) {
  document.getElementById('dropdownMenuButton2').innerText = text
}