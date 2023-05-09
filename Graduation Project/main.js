//Api
  let Output = ""; 
fetch('https://dummyjson.com/products?limit=15&skip=10&select=title,price,description,images')
.then(res => res.json())
.then(
  res => 
  {
  const Data = res.products;
  for(let item of Data)
  {
    console.log(item);
    console.log(item.id);
    Output +=
    `
    <div class="Card" onclick="Saad()">
    <button  onclick="LikeFunc()"><i id="loved" class="fa-regular fa-heart"></i></button>
    <a class="Card-link" href="./page card.Html">
    <img src="${item.images[1]}" alt="${item.title}">
    <div class="Content-Card">
      <div class="Content-Card__head">
         <h4>${item.title}</h4>
         <h4>${item.price}$</h4>
      </div>
         <p>${item.description}</p>
         </div>
         </a>
    </div>
    `;
  }
  document.querySelector(".Cards").innerHTML = Output;
  
  });

  

  function Saad(){
    Ghowil +=
    `
    <img src="${item.images[1]}" alt="${item.title}">
      <div class="content-Big-Card">
          <h3>New!</h3>
          <h2>${item.title}</h2>
          <h2>${item.price}$</h2>
          <p class="first">Brand: H & M</p>
          <p>${item.description}</p>
          <p class="last">Stock & Availability: 10</p>
          <h4>Size</h4>
          <div class="Size">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
          </div>
     <div id="Add-To-Cart">Add To Cart</div>
    `
   document.querySelector(".Big-Card").innerHTML = Ghowil;
  }




//Like Button
function LikeFunc(){
  if (document.getElementById('loved').style.color !== "#F61B5A") { 
    document.getElementById('loved').style.color = "#F61B5A";
  }
}


//See More Button
function MoreCard() {
    var moreCard = document.getElementById("more");
    var btnMore = document.getElementById("See-More");
    
    if (moreCard.style.display === "none") {
      btnMore.innerHTML = "See Less"; 
      moreCard.style.display = "inline";
    }
    else {
      btnMore.innerHTML = "See More"; 
       moreCard.style.display = "none";
    }
  }




