  function ouvrirPage(){
    var a = document.getElementById("search").value;

    if(a === "souris"){
      window.open("vente_souris.html","_self");
    }
     else if(a === "Souris"){
      window.open("vente_souris.html","_self");
    }
    else if(a === "Clavier"){
      window.open("vente_clavier.html","_self");
    }
    else if(a === "clavier"){
      window.open("vente_clavier.html","_self");
    }
    else if(a === "ecran"){
      window.open("vente_ecran.html","_self");
    }
    else if(a === "Ecran"){
      window.open("vente_ecran.html","_self");
    }  
    else if(a === "écran"){
      window.open("vente_ecran.html","_self");
    }
    else if(a === "processeur"){
      window.open("vente_proco.html","_self");
    }
    else if(a === "Processeur"){
      window.open("vente_proco.html","_self");
    }
    else alert("Le produit n'a pas été trouvé !")
   }
   
  /* <input type="search" id="search" value="" onchange="ouvrirPage()" placeholder="Rechercher..." required> */

  

