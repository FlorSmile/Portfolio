function displayHeader(nav_button) {
  document.querySelector("nav").innerHTML = `<a href="/"
          ><img
            class="logo d-none d-md-flex"
            src="images/logo.png"
            alt="Nadiia Logo"
            title="Homepage"
        /></a>
        <a href="/"
          ><img
            class="logo d-flex d-md-none"
            src="images/logo_small.png"
            alt="Nadiia Logo"
            title="Homepage"
        /></a>
        <ul>
          <li class="home"><a href="/index.html" title="Homepage">Home</a></li>
          <li class="work">
            <a href="/work.html" title="Nadiia's work">Work</a>
          </li>
          <li class="about"><a href="/about.html" title="About Nadiia">About</a></li>
          <li class="contact"><a href="/contact.html" title="Contact Nadiia">Contact</a></li>
        </ul>`;

  activeMenu();
}

function activeMenu() {
  document.querySelectorAll("nav ul a").forEach((el) => {
    if (window.location.pathname.indexOf(el.getAttribute("href")) > -1) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

function displayFooter() {
  document.querySelector(
    "footer"
  ).innerHTML = `<div class="contact-box mb-5 d-none d-md-flex justify-content-between">
          <div>
            <h3>Work Inquiry</h3>
            <p class="text-muted m-0">Let's work together</p>
          </div>
          <div>
            <a
              href="/contact.html"
              class="btn btn-branding"
              title="Contact Nadiia"
              >Contact me</a
            >
          </div>
        </div>

        <div class="d-flex justify-content-center mb-5">
          <a
            class="link-mail"
            href="mailto:nadezhda.lashtun@gmail.com"
            title="Mail to Nadiia"
          >
            nadezhda.lashtun@gmail.com
          </a>
        </div>

        <div class="link-social text-center">
          <a
            href="https://github.com/FlorSmile/Portfolio"
            target="_blank"
            title="GitHub Profile"
            ><i class="fa-brands fa-github"></i
          ></a>
          <a
            href="https://www.instagram.com/flor.smile/"
            target="_blank"
            title="Instagram Profile"
            ><i class="fa-brands fa-instagram"></i
          ></a>
          <a
            href="https://t.me/nlashtun"
            target="_blank"
            title="Telegram Profile"
            ><i class="fa-brands fa-telegram"></i
          ></a>
        </div>
        <p class="text-center mt-5">
          ✌️ This website was coded by Patricia Pereira, and is
          <a href="https://github.com/FlorSmile/Portfolio" target="_blank"
            >open-sourced</a
          >
        </p>`;
}

displayHeader();
displayFooter();

/*document.querySelector(".home").addEventListener("click", function () {
  displayHeader("home");
});
document.querySelector(".work").addEventListener("click", function () {
  displayHeader("work");
});
document.querySelector(".about").addEventListener("click", function () {
  displayHeader("about");
});
document.querySelector(".contact").addEventListener("click", function () {
  displayHeader("contact");
});*/
