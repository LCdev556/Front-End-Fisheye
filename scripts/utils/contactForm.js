const firstnameTag = document.getElementById('first');
const lastnameTag = document.getElementById('last');
const emailTag = document.getElementById('email');
const messageTag = document.getElementById('message');
const photographerNameTitle = document.getElementById('photographe-name')
const form = document.querySelector('form');
const main  = document.querySelector('main')



/**
 * Ouverture de la modal de contact
 */
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
  main.setAttribute("inert","")
  
}

/**
 * Fermeture de la modal de contact
 */
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    main.removeAttribute("inert","")
}

/**
 * Affichage dans la console des valeurs entrées dans le fomulaire
 */
const formeSendButton = document.getElementsByClassName('contact_button');




/**
 * Verification de la valeur du champs "prenom"
 * @param {*} firstnameValue 
 * @returns 
 */
function isValidFirstname(firstnameValue) {
    const firstNameContainer = firstnameTag.parentNode;
    if (firstnameValue >= 2) {
      firstNameContainer.setAttribute('data-error-visible', 'false');
      
      return true;
      
    }
    firstNameContainer.setAttribute('data-error-visible', 'true');
    
  };

/**
 * Verification de la valeur du champs "Nom"
 * @param {*} lastnameValue 
 * @returns 
 */
function isValidLastname(lastnameValue) {
  const lastNameContainer = lastnameTag.parentNode;
  
  if (lastnameValue >= 2) {
    lastNameContainer.setAttribute('data-error-visible', 'false');
    return true;
  }
  lastNameContainer.setAttribute('data-error-visible', 'true');
}

/**
 * Verification de la valeur du champs "email"
 * @param {*} emailValue 
 * @returns 
 */
function isValidEmail(emailValue) {
  const emailContainer = emailTag.parentNode;
  if ((new RegExp("[a-z._-]+@[a-z._-]+\\.[a-z._-]+")).test(emailValue)) {
    emailContainer.setAttribute('data-error-visible', 'false');
    return true;
  };
  emailContainer.setAttribute('data-error-visible', 'true');
}

/**
 * Verification de la valeur du champs "message"
 * @param {*} messageValue 
 * @returns 
 */
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
      return; 
    }

    switch (event.key) {
      
      case "Escape":
        closeModal();
      break;
    }})

    form.addEventListener("submit", (event) => {
      
      event.preventDefault();
    
      console.log("Firstname: " + firstnameTag.value + " Lastname: " + lastnameTag.value + " Email: " + emailTag.value );
    });


    
  