// Chamando elementos
let body = document.querySelector("body");
let header = document.querySelector("header");
let footer = document.querySelector("footer");

let cards = document.getElementById("cards");
let titleForm = document.getElementById("titleForm");
let pictureForm = document.getElementById("pictureForm");
let descriptionForm = document.getElementById("descriptionForm");
let btnDeletePic = document.querySelectorAll("btnDeletePic");

let btnOpenForm = document.getElementById("btnAddCard");
let btnCloseForm = document.getElementById("btnCloseForm");
let extraDivFormImgs = document.getElementById("extraDivFormImgs");
let formImgs = document.getElementById("formImgs");

let btnContact = document.getElementById("btnContact")
let btnTeam = document.getElementById("btnTeam")
let favoriteIcon = document.querySelector(".favoriteIcon")
let darkMode = document.getElementById("btnDarkMode")
let darkModeIcon = document.querySelector(".darkModeIcon")
let btnText = document.getElementById("btnText")

let btnFavoriteIcon = document.getElementById("btnFavoriteIcon")

// Função para alternar entre os temas Dark Mode e Light Mode
darkMode.onclick = function () {
  let theme = document.getElementsByTagName('link')[0];
  if (theme.getAttribute('href') == './css/style.css') {
    theme.setAttribute('href', './css/styleDarkMode.css');
    darkModeIcon.setAttribute("src", "./imgs/sun.png");
    favoriteIcon.setAttribute("src", "./imgs/heart2.png");
    btnOpenForm.setAttribute("src", "./imgs/plusDarkMode.png");
    btnContact.setAttribute("src", "./imgs/btnContDarkMode.png");
    btnTeam.setAttribute("src", "./imgs/btnTeamDarkMode.png");
    btnCloseForm.setAttribute("src", "./imgs/btnCloseForm.png");
    btnText.innerHTML = "Light Mode"


  } else {
    theme.setAttribute('href', './css/style.css');
    darkModeIcon.setAttribute("src", "https://image.flaticon.com/icons/png/512/1415/1415431.png");
    favoriteIcon.setAttribute("src", "https://image.flaticon.com/icons/png/512/1077/1077035.png");
    btnOpenForm.setAttribute("src", "./imgs/plus.png");
    btnContact.setAttribute("src", "https://image.flaticon.com/icons/png/512/481/481659.png");
    btnTeam.setAttribute("src", "https://image.flaticon.com/icons/png/512/2058/2058768.png");
    btnCloseForm.setAttribute("src", "https://image.flaticon.com/icons/png/512/864/864393.png");
    btnText.innerHTML = "Dark Mode"
  }
}

let submitForm = document.getElementById("submitFormAddCard");

document.querySelector("form").onsubmit = function () { return false };

let extraDivContact = document.getElementById("extraDivContact");
let btnOpenContact = document.getElementById("btnOpenContact");

let extraDivTeam = document.getElementById("extraDivTeam");
let btnOpenTeam = document.getElementById("btnOpenTeam");


// Fechando e abrindo o Form para inserir cards
btnOpenForm.onclick = function () {
  if (extraDivFormImgs.style.display == "none") {
    extraDivFormImgs.style.display = "block";
  } else {
    extraDivFormImgs.style.display = "none";
  }
}

btnCloseForm.onclick = function () {
  extraDivFormImgs.style.display = "none";
}

// Função e validação para adicionar os cards
submitForm.addEventListener("click", function () {
  if ((titleForm.value == "") || (pictureForm.value == "") || (descriptionForm.value == "")) {
    titleForm.focus();

    document.querySelectorAll("input").forEach((item) => item.value = "");

    alert("Por favor, preencha os 3 campos!");

  } else {
    cards.style.height = "auto";

    // Criação dos cards após a validação
    let card = document.createElement("div");
    card.setAttribute("class", "card notFavCard");
    card.setAttribute("style", "display: inline-block");
    cards.appendChild(card);

    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "cardContent");
    card.appendChild(cardContent);

    cardContent.innerHTML += `<h2 class="cardTitle">${titleForm.value}</h2>`;
    cardContent.innerHTML += `<img src="${pictureForm.value}" class="cardPicture">`;
    cardContent.innerHTML += `<h4 class="cardDescription">${descriptionForm.value}</h4>`;

    // Adicionando o botão de deletar o card
    let divBtnDeletePic = document.createElement("div");
    divBtnDeletePic.setAttribute("class", "divBtnDeletePic");
    card.appendChild(divBtnDeletePic);

    let btnDeletePic = document.createElement("img");
    btnDeletePic.setAttribute("src", "./imgs/closeSub.png");
    btnDeletePic.setAttribute("class", "btnDeletePic");
    divBtnDeletePic.appendChild(btnDeletePic);
    btnDeletePic.addEventListener("click", function () { card.remove() });

    // Adicionando botão de favoritar e toggle entre favorito e não favorito
    let btnFav = document.createElement("img");
    btnFav.setAttribute("src", "https://image.flaticon.com/icons/png/512/1216/1216575.png");
    btnFav.setAttribute("class", "favorite");
    btnFav.setAttribute("id", "btnFav")
    card.appendChild(btnFav);
    // let favoritesList = [];
    btnFav.onclick = function () {
      if (btnFav.classList.contains("favorite")) {
        btnFav.setAttribute("src", "https://image.flaticon.com/icons/png/512/1216/1216649.png");
        btnFav.setAttribute("class", "favorite2");
        card.setAttribute("class", "card");
      } else {
        btnFav.setAttribute("src", "https://image.flaticon.com/icons/png/512/1216/1216575.png");
        btnFav.setAttribute("class", "favorite");
        card.setAttribute("class", "card notFavCard");
      }
    }

    // Evento mouseover para aparecer o botão de deletar o card
    card.addEventListener("mouseover", function () {
      divBtnDeletePic.style.display = "block";
    })
    card.addEventListener("mouseout", function () {
      divBtnDeletePic.style.display = "none";
    })

    titleForm.focus();


    document.querySelectorAll("input").forEach((item) => item.value = "");

    // Toggle e função para o botão de Favoritos
    let favoriteIcon = document.querySelector(".favoriteIcon")

    btnFavoriteIcon.onclick = function () {

      if (favoriteIcon.classList.contains("favoriteIcon")) {
        favoriteIcon.setAttribute("src", "https://image.flaticon.com/icons/png/512/1216/1216649.png");
        favoriteIcon.setAttribute("class", "favoriteIcon2");
      } else {
        favoriteIcon.setAttribute("src", "https://image.flaticon.com/icons/png/512/1216/1216575.png");
        favoriteIcon.setAttribute("class", "favoriteIcon");
      }


      let favoriteList = document.querySelectorAll(".notFavCard")
      favoriteList.forEach((item) => {
        if (item.style.display == "inline-block") {
          item.style.display = "none"
        } else {
          item.style.display = "inline-block"
        }
      })


    }
  }
}
)

// Função para o form Entre em Contato
btnOpenContact.onclick = function () {
  if (extraDivContact.style.display == "none") {
    extraDivContact.style.display = "block";
  } else {
    extraDivContact.style.display = "none";
  }
}

// Função para o form Equipe
btnOpenTeam.onclick = function () {
  if (extraDivTeam.style.display == "none") {
    extraDivTeam.style.display = "block";
  } else {
    extraDivTeam.style.display = "none";
  }
}

window.onclick = function (event) {
  if (event.target == extraDivFormImgs) {
    extraDivFormImgs.style.display = "none";
  } if (event.target == extraDivContact) {
    extraDivContact.style.display = "none";
  } if (event.target == extraDivTeam) {
    extraDivTeam.style.display = "none";
  }
}