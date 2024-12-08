const Convenience=99;
let bagItemobj; // mapping 
onload();// calling 
function onload(){
    loadbagitem_obj(); // jo item bag me honge vo load karenge
    displaybagitem();
    displaybag_summary();
}
function displaybag_summary(){
  let bagsummary= document.querySelector('.bag-summary'); 
  let totalitem=bagItemobj.length;
  let totalmrp=0;
  let totalDiscount=0;
  let finalPayment=0;
  bagItemobj.forEach(bagitem=>{
    totalmrp+= bagitem.original_price;
    totalDiscount+= bagitem.original_price- bagitem.current_price ;
  })
  finalPayment= totalmrp-totalDiscount+Convenience;
  bagsummary.innerHTML=`<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS ₹(${totalitem} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">₹${totalmrp}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">₹ ${finalPayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`
}
function loadbagitem_obj(){
            
    console.log(bagitem);  //para
    bagItemobj= bagitem.map(itemId=>{ // itrate id to mapped the bag element id 
        for(let i=0;i<items.length;i++){
            if(itemId==items[i].id){
                return items[i];// curr item
            } 
        }
    });
    console.log(bagItemobj);
} 
 
function displaybagitem(){// here we are handling dynamically all the bag 
  let containerE= document.querySelector('.bag-items-container');
   
  let innerHTML='';
  bagItemobj.forEach(bagitem=>{
    innerHTML += generateItemHtml(bagitem);// hr obje ke liye html generate krne ke bad use innerhtml var me dal rha hu  
  });
  // after processing to get id 
  containerE.innerHTML=innerHTML;
}
function removefrombag(itemid){
  bagitem= bagitem.filter(bagitemID => bagitemID !=itemid);
  localStorage.setItem('bagitem',JSON.stringify(bagitem));
  loadbagitem_obj();
  displaybagcount();
  displaybagitem();
  displaybag_summary();

}
function generateItemHtml(item){
  return ` <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}  </div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount-percentage">${item.discount_percentage}%( OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period}</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removefrombag(${item.id})">X</div>
          </div>`;
}