const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Sirf in 3 button ke liye
let buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    console.log("Clicked: " + button.textContent);
  });
});

let form = document.getElementById("contactForm");
let msg = document.getElementById("formMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  msg.innerText = "Sending... Please wait";
  msg.style.color = "yellow";

  let formData = new FormData(form);

  fetch("https://formspree.io/f/xeagpagl", {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      msg.innerText = "Thank You! Your message has been sent.";
      msg.style.color = "#86efac";
      form.reset();
    } else {
      msg.innerText = "Oops! Kuch ghalat hua, dobara try karein.";
      msg.style.color = "red";
    }
  })
  .catch((error) => {
    msg.innerText = "Oops! Kuch ghalat hua, dobara try karein.";
    msg.style.color = "red";
  });
});
