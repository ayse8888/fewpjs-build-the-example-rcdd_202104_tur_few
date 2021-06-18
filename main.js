// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll(".like-glyph");
const errorNotification = document.querySelector("#modal");

for (const btn of likeButtons) btn.addEventListener("click", like);

function like(event) {
  const btn = event.target;
  if (btn.innerText == EMPTY_HEART) {
    mimicServerCall()
      .then(response => {
        btn.innerText = FULL_HEART;
        btn.classList.add("activated-heart");
      })
      .catch(error => {
        errorNotification.classList.remove("hidden");
        setTimeout(() => errorNotification.classList.add("hidden"), 3000);
      });
  } else {
    btn.innerText = EMPTY_HEART;
    btn.classList.add("activated-heart");
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
