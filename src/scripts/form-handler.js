function init() {
  const signupBtn = document.getElementById("signupBtn");
  const signinBtn = document.getElementById("signinBtn");

  signupBtn?.addEventListener("click", () => {
    const container = document.querySelector(".container");
    console.log;
    if (container) {
      container.classList.toggle("active");
    }
  });

  signinBtn?.addEventListener("click", () => {
    const container = document.querySelector(".container");
    if (container) {
      container.classList.toggle("active");
    }
  });
}

init();

document.addEventListener("astro:after-swap", init);
