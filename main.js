// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll(".like-glyph");
const errorNotification = document.querySelector("#modal");

for (const button of likeButtons) button.addEventListener("click", like);

function like(event) {
  const button = event.target;
  if (button.innerText == EMPTY_HEART) {
    mimicServerCall()
      .then(response => {
        button.innerText = FULL_HEART;
        button.classList.add("activated-heart");
      })
      .catch(error => {
        errorNotification.classList.remove("hidden");
        setTimeout(() => errorNotification.classList.add("hidden"), 3000);
      });
  } else {
    button.innerText = EMPTY_HEART;
    button.classList.add("activated-heart");
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
