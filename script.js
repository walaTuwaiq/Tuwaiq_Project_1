const toggle = document.getElementsByClassName("toggle-button")[0];
const list = document.getElementsByClassName("list")[0];

toggle.addEventListener("click", () => {
  list.classList.toggle("active");
});

const containerFlowers = $("#containerFlowers");

const flowers = [
  {
    imgUrl: "4.png",
    description: "Vintage gift",
    price: "130SR",
  },
  {
    imgUrl: "5.png",
    description: "boquette with text",
    price: "80SR",
  },
  {
    imgUrl: "6.png",
    description: "white tulip flower",
    price: "170SR",
  },
  {
    imgUrl: "7.png",
    description: 'Classic boquette "medium size"',
    price: "120SR",
  },
  {
    imgUrl: "11.png",
    description: "Dreamy boquette",
    price: "200SR",
  },
  {
    imgUrl: "12.png",
    description: "pinky boquette",
    price: "120SR",
  },
  {
    imgUrl: "13.png",
    description: 'flowers boquette "medium size" ',
    price: "120SR",
  },
  {
    imgUrl: "14.png",
    description: 'flowers boquette "Big size" ',
    price: "170SR",
  },
  {
    imgUrl: "15.png",
    description: "Louis vuition gift with flowers",
    price: "1700SR",
  },
  {
    imgUrl: "16.png",
    description: "GUESS graduation gift",
    price: "450SR",
  },
  {
    imgUrl: "17.png",
    description: "Skagen watch with garden white jory",
    price: "400SR",
  },
  {
    imgUrl: "18.png",
    description: "TED BAKER with pink jory",
    price: "190SR",
  },
];

const users = [
  {
    user: "wala",
    password: "123",
    typeOfUser: "Admin",
  },
  {
    user: "hanan",
    password: "456",
    typeOfUser: "user",
  },
  {
    user: "ahmed",
    password: "789",
    typeOfUser: "user",
  },
];

let currentUser = {};

//if i lost my data from local storage, Do this:
// localStorage.setItem("flowers", JSON.stringify(flowers));

function addFlowers(array) {
  array.forEach((elm, index) => {
    const div = $(` <div class="flowerFullImage"> 
        <img src="${elm.imgUrl}" alt="flower">
        <p class="description"> ${elm.description} </p>
        <p class="price"> ${elm.price} </p>
        </div>
        `);
    const btn = $(
      `<button id="${index}" onclick="addItemToShoppingCart()" class="buttonAddToCart">Add to cart</button>`
    );
    div.append(btn);

    if (currentUser["typeOfUser"] === "Admin") {
      const span = $(
        `<span id="${index}" onclick="deleteItemFromHomePage(${index})" class="spanElement">x</span>`
      );
      div.append(span);
    }

    containerFlowers.append(div);
  });
  localStorage.setItem("flowers", JSON.stringify(flowers));
}

addFlowers(JSON.parse(localStorage.getItem("flowers")));

localStorage.setItem("users", JSON.stringify(users));

function logIn() {
  const userName = $("#userName").val();
  const userPassword = $("#password").val();

  let found = false;
  const liItem = $(`<li class="nameOfUser"></li>`);
  liItem.html("");
  users.forEach((elm) => {
    if (elm.user === userName && elm.password === userPassword) {
      currentUser = { ...elm };
      found = true;
      $("#icons-top").append(liItem);
      $("#divOfHomePage").show();
      $("#divOfAdminPage").hide();
      $("#divOfSignInPage").hide();
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
    liItem.html(userName);
  });

  if (!found) {
    alert("User or password is incorrect");
  }

  containerFlowers.html("");
  addFlowers(JSON.parse(localStorage.getItem("flowers")));
  showAdminSettings();
}

function addItemToHomePage() {
  const imgUrlAdminPage = $("#imgUrlAdminPage").val();
  const descriptionAdminPage = $("#descriptionAdminPage").val();
  const priceItemAdminPage = $("#priceItemAdminPage").val();

  const addNewFlower = {
    imgUrl: imgUrlAdminPage,
    description: descriptionAdminPage,
    price: priceItemAdminPage,
  };

  flowers.push(addNewFlower);
  localStorage.setItem("flowers", JSON.stringify(flowers));

  containerFlowers.html("");
  addFlowers(JSON.parse(localStorage.getItem("flowers")));

  $("#divOfHomePage").show();
  $("#divOfSignInPage").hide();
  $("#divOfAdminPage").hide();
}

function deleteItemFromHomePage(id) {
  flowers.splice(id, 1);
  localStorage.setItem("flowers", JSON.stringify(flowers));
  containerFlowers.html("");
  addFlowers(JSON.parse(localStorage.getItem("flowers")));
}

$("#divOfHomePage").show();
$("#divOfSignInPage").hide();
$("#divOfAdminPage").hide();

function divOfHomePage() {
  $("#divOfHomePage").show();
  $("#divOfAdminPage").hide();
  $("#divOfSignInPage").hide();
}

function divOfSignInPage() {
  $("#divOfHomePage").hide();
  $("#divOfAdminPage").hide();
  $("#divOfSignInPage").show();
}

function divOfAdminPage() {
  $("#divOfHomePage").hide();
  $("#divOfSignInPage").hide();
  $("#divOfAdminPage").show();
}

let count = 0;

function addItemToShoppingCart() {
  count = count + 1;
  localStorage.setItem("count", count);
}

function plusNumberInShoppingCart() {
  const spanCart = $("#spanCart");
  let countNumber = JSON.parse(localStorage.getItem("count"));
  if (countNumber > 0) {
    spanCart.text(countNumber);
    spanCart.show();
  } else {
    spanCart.hide();
  }
}
plusNumberInShoppingCart();

const adminSettings = $("#adminLink");
adminSettings.hide();

function showAdminSettings() {
  if (currentUser["typeOfUser"] == "Admin") {
    adminSettings.show();
  }
}

const span = $(".upSpan");

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY >= 1000) {
      span.addClass("show");
    } else {
      span.removeClass("show");
    }
  });
});

function clickUpSpan() {
  $(window).scrollTop("0px");
}
