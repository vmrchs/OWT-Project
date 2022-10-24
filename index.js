document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("buttonMenu");
  const navWrapper = document.getElementById("nav");
  const about = document.getElementById("about");

  var subscribe_button = document.querySelector(".subscribe_button");

  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("close");
    navWrapper.classList.toggle("show");
  });

  navWrapper.addEventListener("click", (e) => {
    if (e.target.id === "nav") {
      navWrapper.classList.remove("show");
      toggleButton.classList.remove("close");
    }
  });

  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    about.style.backgroundPositionY = offset * 0.7 + "px";
  });

  subscribe_button.addEventListener("click", function () {
    var subscribing = document.querySelector(".subscribing");
    var thanks = document.querySelector(".thanks");
    var login = document.querySelector(".login");

    subscribing.classList.add("subscribing_active");
    subscribe_button.classList.add("subscribe_button_active");
    setTimeout(function () {
      login.classList.add("login_active");
    }, 1200);
    setTimeout(function () {
      thanks.classList.add("thanks_active");
    }, 1400);

    setTimeout(function () {
      thanks.classList.remove("thanks_active");
      login.classList.remove("login_active");
      subscribing.classList.remove("subscribing_active");
      subscribe_button.classList.remove("subscribe_button_active");
    }, 4000);
  });
});
