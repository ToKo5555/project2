//price range function
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");

let priceGap = 100;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
// quantity
function increaseQuantity() {
  var quantityInput = document.getElementById('quantity');
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
  var quantityInput = document.getElementById('quantity');
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}
//cart menu
function openMenu() {
  document.getElementById('slideMenu').classList.add('open');
  document.getElementById('overlay').style.display = 'block';
}

function closeMenu() {
  document.getElementById('slideMenu').classList.remove('open');
  document.getElementById('overlay').style.display = 'none';
}

document.getElementById('overlay').onclick = function() {
  closeMenu();
};
//burger bar
const burger = document.getElementById('burger');
            const burgerMenus = document.querySelectorAll('.burger-menu');
        
            burger.addEventListener('click', () => {
                burger.classList.toggle('toggle');
                burgerMenus.forEach(burgerMenus => {
                    if (burgerMenus.style.display === 'flex') {
                        burgerMenus.style.display = 'none';
                    } else {
                        burgerMenus.style.display = 'flex';
                    }
                });
            });
            const swiper = new Swiper('.swipper-slider', {
              loop: true,
            
              // If we need pagination
              pagination: {
                el: '.swiper-pagination',
                grabCursor: true,
                spaceBetween: true,
              },
            
              // Navigation arrows
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
                dynamicBullets: true,
              },
              breakpoints: {
                0: {
                    slidesPerView:1
                },
                620: {
                    slidesPerView:2
                },
                900:{
                  slidesPerView:3
                },
                1000:{
                  slidesPerView:3
                },
                1024: {
                    slidesPerView:3
                },
                1300:{
                  slidesPerView:4
                },
                1440: {
                    slidesPerView:5
                },
                1540: {
                    slidesPerView:5
                },
            }
            
            });
            