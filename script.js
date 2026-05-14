/* Loader */

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {

    loader.style.display = "none";

  }, 1800);

});

/* Counter Animation */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const count = +counter.innerText;

    const increment = target / 120;

    if(count < target){

      counter.innerText = `${Math.ceil(count + increment)}`;

      setTimeout(updateCounter, 20);

    }else{

      counter.innerText = target;

    }

  };

  updateCounter();

});

/* Scroll Reveal */

const hiddenElements = document.querySelectorAll(".hidden");

const revealElements = () => {

  hiddenElements.forEach(el => {

    const top = el.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if(top < windowHeight - 100){

      el.classList.add("show");

    }

  });

};

window.addEventListener("scroll", revealElements);

revealElements();

/* Mouse Glow */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";

});

/* Character Modal */

const modal = document.getElementById("characterModal");

const closeModal = document.querySelector(".close-modal");

const characterCards = document.querySelectorAll(".character-card");

characterCards.forEach(card => {

  card.addEventListener("click", () => {

    const title = card.querySelector("h3").innerText;

    const image = card.querySelector("img").src;

    document.getElementById("modalTitle").innerText = title;

    document.getElementById("modalImage").src = image;

    modal.style.display = "flex";

  });

});

closeModal.addEventListener("click", () => {

  modal.style.display = "none";

});

window.addEventListener("click", (e) => {

  if(e.target === modal){

    modal.style.display = "none";

  }

});