const toggle = document.getElementsByClassName("toggle-button")[0];
const list = document.getElementsByClassName("list")[0];

toggle.addEventListener("click", () => {
  list.classList.toggle("active");
});

const containerFlowers = $("#containerFlowers");

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
    price: "90SR",
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


// const tableHover= $("#tableOfFlowers")
// tableHover.hide()

function addFlowers(array){

    // tableHover.show()

    // array.forEach( (elm) => {
    //     const td = $(` <tr><td class="flowerFullImage"> 
    //     <img src="${elm.imgUrl}" alt="flower">
    //     <p> ${elm.description} </p>
    //     <p> ${elm.price} </p>
    //     </td>
    //     </tr>
    //     `)
    //     tableHover.append(td)
    // });

    array.forEach( (elm) => {
        const div = $(` <div class="flowerFullImage"> 
        <img src="${elm.imgUrl}" alt="flower">
        <p class="description"> ${elm.description} </p>
        <p class="price"> ${elm.price} </p>
        `)
        containerFlowers.append(div)
    });

}

addFlowers(flowers)


