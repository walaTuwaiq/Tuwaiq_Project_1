const toggle = document.getElementsByClassName("toggle-button")[0];
const list = document.getElementsByClassName("list")[0];

toggle.addEventListener("click", () => {
  list.classList.toggle("active");
});

const containerFlowers = $("#containerFlowers");

// const spanCartIcon = $(`<span onclick="deleteItemFromHomePage(${index})">0</span>`)
// div.append(spanCartIcon)


const flowers = [
  {
    imgUrl: "10.png",
    description: "kldjkljdlajd",
    price: "90SR",
  },
  {
    imgUrl: "9.png",
    description: "kldjkljdlajd",
    price: "90SR",
  },
  {
    imgUrl: "8.png",
    description: "kldjkljdlajd",
    price: "90SR",
  },
  {
    imgUrl: "4.png",
    description: "kldjkljdlajd",
    price: "90SR",
  },
  {
    imgUrl: "5.png",
    description: "kldjkljdlajd",
    price: "80SR",
  },
  {
    imgUrl: "6.png",
    description: "dddddddddddd",
    price: "90SR",
  },
  {
    imgUrl: "7.png",
    description: "",
    price: "90SR",
  },
  {
    imgUrl: "11.png",
    description: "",
    price: "90SR",
  },
  {
    imgUrl: "12.png",
    description: "",
    price: "90SR",
  },
  {
    imgUrl: "3.png",
    description: "",
    price: "90SR",
  },
  {
    imgUrl: "2.png",
    description: "",
    price: "90SR",
  },
  {
    imgUrl: "1.png",
    description: "",
    price: "90SR",
  },
  {
    imgUrl: "13.png",
    description: "",
    price: "90SR",
  },
  {
    imgUrl: "14.png",
    description: "",
    price: "90SR",
  },
  {
    imgUrl: "15.png",
    description: "",
    price: "90SR",
  },
  {
    imgUrl: "16.png",
    description: "",
    price: "90SR",
  },
  {
    imgUrl: "17.png",
    description: "",
    price: "90SR",
  },
  {
    imgUrl: "18.png",
    description: "",
    price: "90SR",
  },
];

function addFlowers(array) {
  array.forEach((elm, index) => {
    const div = $(` <div class="flowerFullImage"> 
        <img src="${elm.imgUrl}" alt="flower">
        <p class="description"> ${elm.description} </p>
        <p class="price"> ${elm.price} </p>
        `);
    const span = $(`<span id="${index}" onclick="deleteItemFromHomePage(${index})" class="spanElement">x</span>`)
    div.append(span)
    containerFlowers.append(div);
    // div.append(span)
  });
  localStorage.setItem("flowers", JSON.stringify(flowers));
}

addFlowers( JSON.parse(localStorage.getItem("flowers")));

const users = [
  {
    user: "wala",
    password: "123",
  },
  {
    user: "hanan",
    password: "456",
  },
  {
    user: "ahmed",
    password: "789",
  },
];

localStorage.setItem("users", JSON.stringify(users));

function logIn() {
  const userName = $("#userName").val();
  const userPassword = $("#password").val();

  const newUser = {
    name: userName,
    password: userPassword,
  };

  users.push(newUser);

  localStorage.setItem("user", JSON.stringify(users));
  // localStorage.setItem("password", JSON.stringify(userPassword))
}

// const imgUrlAdminPage = $("#imgUrlAdminPage").val();
// const descriptionAdminPage = $("#descriptionAdminPage").val();
// const priceItemAdminPage = $("#priceItemAdminPage").val();

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
}

function deleteItemFromHomePage(id){

  flowers.splice(id, 1);
  localStorage.setItem("flowers", JSON.stringify(flowers));
  containerFlowers.html("");
  addFlowers(JSON.parse(localStorage.getItem("flowers")));
}

// const divOfHomePage = $("#divOfHomePage")

$("#divOfSignInPage").hide();
$("#divOfAdminPage").hide();

function divOfHomePage(){
  $("#homeLink").click(function(){
    $("#divOfHomePage").show();
    $("#divOfAdminPage").hide();
    $("#divOfSignInPage").hide();
  });
}

function divOfSignInPage(){
  $("#signInLink").click(function(){
    $("#divOfHomePage").hide();
    $("#divOfAdminPage").hide();
    $("#divOfSignInPage").show();
  });
}

function divOfAdminPage(){
  $("#adminLink").click(function(){
    $("#divOfHomePage").hide();
    $("#divOfSignInPage").hide();
    $("#divOfAdminPage").show();
  });
}

function addItemToShoppingCart(){
  const spanCart = $("#spanCart")
  if(spanCart.val() > 0){
    spanCart.show()
  } else{
    spanCart.hide()
  }
}

addItemToShoppingCart()

