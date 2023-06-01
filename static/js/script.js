let btnVraag = document.getElementById("toggleVraag");
let btnCategorie = document.getElementById("container-categorie");
let content = document.getElementById("content");
let contentCategorie = document.getElementById("btnCategories");
let openzinOba = document.getElementById("vraagOba");


// Voeg een eventlistener toe aan de toggleButton
btnVraag.addEventListener("click", function() {
  // Controleer of de inhoud momenteel verborgen is
  if (content.style.display === "none") {
    // Toon de inhoud als deze verborgen is
    content.style.display = "block";
    openzinOba.style.display="block";
    contentCategorie.style.display = "none";
  
  } else {
    // Verberg de inhoud als deze wordt weergegeven
    content.style.display = "none";
  }
});

// Voeg een eventlistener toe aan de toggleButton
btnCategorie.addEventListener("click", function() {
    // Controleer of de inhoud momenteel verborgen is
    if (content.style.display === "none" && contentCategorie.style.display === "none") {
      // Toon de inhoud als deze verborgen is
      content.style.display = "block";
      contentCategorie.style.display = "block";
      openzinOba.style.display="none";

    
    } else {
      // Verberg de inhoud als deze wordt weergegeven
      content.style.display = "none";
      contentCategorie.style.display = "none";
    }
  });