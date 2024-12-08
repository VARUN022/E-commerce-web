
let bagitem=[];
onload();
function onload(){
    let bagitemstr=localStorage.getItem('bagitem');
         bagitem=bagitemstr ? JSON.parse(bagitemstr):[];
    display();    
displaybagcount(); // init this here to set bagcount to 0 
}

function addToBag(itemid){ // every time we push into bag it reflect the change 
    bagitem.push(itemid);
    localStorage.setItem('bagitem',JSON.stringify(bagitem));
    displaybagcount(); 
}
function displaybagcount(){  // bag_iconcount  
    let bagcount= document.querySelector('.bag-item-count');
    if(bagitem.length>0){
    bagcount.innerText=bagitem.length;
}
else{
    bagcount.style.visibility='hidden';

}
}
function display(){
let itemcontainerElement= document.querySelector('.item-container');
    if(!itemcontainerElement)return; // if undefined 
    let innerhtml='';
    items.forEach(item=>{ // this code define all the iteration 
   innerhtml +=` <div class="item-container">
                   <img class="item-image" src="${item.image}" alt="firstimage">
                   <div class="rating">
                    ${item.rating.stars}  ⭐| ${item.rating.count}
                   </div>
                   <div class="company-name">${item.company} </div>
                   <div class="item-name">${item.item_name}</div>
                   <div class="price">
                       <span class="current-price">Rs${item.current_price}</span>
                       <span class="original-price">Rs${item.original_price}</span>
                       <span class="discount-price">(${item.discount_percentage}%OFF)</span>
                   </div>
                   <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag </button>
               </div>`;
    });
   itemcontainerElement.innerHTML=innerhtml;// assign after 8th iteration
}

// display();

