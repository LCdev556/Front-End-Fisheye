const firstnameTag = document.getElementById('first');
const lastnameTag = document.getElementById('last');
const emailTag = document.getElementById('email');
const messageTag = document.getElementById('message');
const photographerNameTitle = document.getElementById('photographe-name')




 function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function formDataReader() {
    console.log(firstnameTag.value + lastnameTag.value + emailTag.value );
}

function isValidFirstname(firstnameValue) {
    const firstNameContainer = firstnameTag.parentNode;
    if (firstnameValue >= 2) {
      firstNameContainer.setAttribute('data-error-visible', 'false');
      
      return true;
      
    }
    firstNameContainer.setAttribute('data-error-visible', 'true');
    
  };

  function isValidLastname(lastnameValue) {
    const lastNameContainer = lastnameTag.parentNode;
  
    if (lastnameValue >= 2) {
      lastNameContainer.setAttribute('data-error-visible', 'false');
      return true;
    }
    lastNameContainer.setAttribute('data-error-visible', 'true');
  }
  
  function isValidEmail(emailValue) {
    const emailContainer = emailTag.parentNode;
    if ((new RegExp("[a-z._-]+@[a-z._-]+\\.[a-z._-]+")).test(emailValue)) {
      emailContainer.setAttribute('data-error-visible', 'false');
      return true;
    };
    emailContainer.setAttribute('data-error-visible', 'true');
  }

  function isValidMessage(messageValue) {
    const messageContainer = messageTag.parentNode;
    if (messageValue >= 2) {
      messageContainer.setAttribute('data-error-visible', 'false');
      
      return true;
      
    }
    messageContainer.setAttribute('data-error-visible', 'true');
    
  };

firstnameTag.addEventListener('focusout', (event) => {
    isValidFirstname(firstnameTag.value.length);
});

lastnameTag.addEventListener('focusout', (event) => {
    isValidLastname(lastnameTag.value.length);
});

 emailTag.addEventListener("focusout", (event) => {
    isValidEmail(emailTag.value);
});

messageTag.addEventListener("focusout", (event) => {
    isValidMessage(messageTag.value.length);
});

window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {
      
      case "Escape":
        closeModal();
      break;
    }})