const toggle = document.getElementsByClassName("toggle-button")[0];
// const toggle = $(".toggle-button")
const list = document.getElementsByClassName("list")[0];
// const list = $(".list")

toggle.addEventListener("click", () => {
  list.classList.toggle("active");
});

const containerFlowers = $("#containerFlowers");

// const spanCartIcon = $(`<span onclick="deleteItemFromHomePage(${index})">0</span>`)
// div.append(spanCartIcon)

const flowers = [
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

const users = [
  {
    user: "wala",
    password: "123",
    typeOfUser: "Admin"
  },
  {
    user: "hanan",
    password: "456",
    typeOfUser: "user"

  },
  {
    user: "ahmed",
    password: "789",
    typeOfUser: "user"
  },
];

let currentUser={}

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

    if(currentUser.typeOfUser === "Admin"){
      const span = $(
        `<span id="${index}" onclick="deleteItemFromHomePage(${index})" class="spanElement">x</span>`
      );
      div.append(span);
    }
    
    containerFlowers.append(div);
    // div.append(span)
  });
  localStorage.setItem("flowers", JSON.stringify(flowers));
}

addFlowers(JSON.parse(localStorage.getItem("flowers")));

localStorage.setItem("users", JSON.stringify(users));

function logIn() {
  const userName = $("#userName").val();
  const userPassword = $("#password").val();

  console.log("log in");

  //condition don't work!!
  // DDDDOOOOONNNNEEEE!!!!
  // if(users["user"] == userName && users["password"] == userPassword ){
  // if (users.user == userName && users.password == userPassword) {
  let found = false
  const liItem = $(`<li></li>`);
  liItem.html("")
  users.forEach( (elm) => {
    if(elm.user === userName && elm.password === userPassword){
      currentUser = {...elm}
      found = true 
      $("#icons-top").append(liItem);
      $("#divOfHomePage").show();
      $("#divOfAdminPage").hide();
      $("#divOfSignInPage").hide();
    }
    liItem.html(userName)

    // else{
    //        alert("User or password is incorrect");
    // }
    // can use filter method with array

  })  

  if(!found){
    alert("User or password is incorrect")
  }

    
    containerFlowers.html("")
    addFlowers(JSON.parse(localStorage.getItem("flowers")));

    // if the log in is correct we give currentus the value of the input in the login page
    // currentUser= { user: userName, password: userPassword, 
  }
    
  

  // if(users.user)

  // const newUser = {
  //   name: userName,
  //   password: userPassword,
  // };

  // users.push(newUser);

  // localStorage.setItem("user", JSON.stringify(users));
  // $("#divOfHomePage").show();
  // $("#divOfAdminPage").hide();
  // $("#divOfSignInPage").hide();
  // localStorage.setItem("password", JSON.stringify(userPassword))

// const imgUrlAdminPage = $("#imgUrlAdminPage").val();
// const descriptionAdminPage = $("#descriptionAdminPage").val();
// const priceItemAdminPage = $("#priceItemAdminPage").val();

// else don't work!!
function addItemToHomePage() {
  const imgUrlAdminPage = $("#imgUrlAdminPage").val();
  const descriptionAdminPage = $("#descriptionAdminPage").val();
  const priceItemAdminPage = $("#priceItemAdminPage").val();

  if (
    imgUrlAdminPage !== null ||
    descriptionAdminPage !== null ||
    priceItemAdminPage !== null
  ) {
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
  } else {
    alert("Check again");
  }
}

function deleteItemFromHomePage(id) {
  flowers.splice(id, 1);
  localStorage.setItem("flowers", JSON.stringify(flowers));
  containerFlowers.html("");
  addFlowers(JSON.parse(localStorage.getItem("flowers")));
}

// const divOfHomePage = $("#divOfHomePage")

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



//here lost something
const adminSettings = $("#adminLink")
function showAdminSettings(){

  if(currentUser.typeOfUser === "Admin"){
    adminSettings.show()
  } 
  // else {
    // adminSettings.hide()
  // }
}

showAdminSettings()