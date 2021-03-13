function validation() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    if (name.length < 3) {
        text = "Please enter a valid Name"
        error_message.style.padding = "10px";
        error_message.innerHTML = text;
        return false;
    } 
    if (subject.length < 0) {
        text = "entez le sujet !"
        error_message.style.padding = "10px";
        error_message.innerHTML = text;
        return false;
    } 
    if (isNaN(phone) || phone.length != 8){
        text = "Vérifier ton numéreo"
    error_message.style.padding = "10px";
    error_message.innerHTML = text;
    return false;}
    if (email.indexOf("@") == -1 || email.length < 10){
        text = "Vérifier ton email"
    error_message.style.padding = "10px";
    error_message.innerHTML = text;
    return false;}
    if (message.length < 0) {
        text = "Entrez votre message !"
        error_message.style.padding = "10px";
        error_message.innerHTML = text;
        return false;
    } 



    


    alert("merci pour nous contacter")
    return true;
    
} 
var AddToCartButtons = document.getElementsByClassName('btn-primary');


for (var i = 0; i < AddToCartButtons.length; i++) {
    var button = AddToCartButtons[i]
    button.addEventListener('click', addToCartCliked)
}

function addToCartCliked(event) {
    var button = event.target
    ShopItem = button.parentElement
    var title = ShopItem.getElementsByClassName("card-title")[0].innerText
    var prix = ShopItem.getElementsByClassName("price")[0].innerText
    var imageSrc = ShopItem.getElementsByClassName("card-img-top")[0].src
    AddItemToCart(title, prix, imageSrc)
}

function AddItemToCart(title, prix, imageSrc) {

    var cartRow = document.createElement('div')  
    var cartRowimage=document.createElement('img')  
  
    cartRowimage.setAttribute('src',imageSrc)
    cartRowimage.setAttribute('width',"100px")
    cartRowimage.setAttribute('heigh',"100px")
    var cartItems = document.getElementsByClassName("ShoppingCarte")[0]
    cartRow.append(cartRowimage)
    var cartRowprice=document.createElement('h6')
    cartRowprice.innerHTML=prix
    cartRowprice.setAttribute("class","pri")
    var cartRowtitle=document.createElement('h5')
    cartRowtitle.innerHTML=title
    var cartRowqty=document.createElement('h1')
    cartRowqty.setAttribute("class","qty")
    cartRowqty.innerHTML='1'
  
    
    var quantityplus=document.createElement('button')
   quantityplus.innerHTML='+'
   quantityplus.addEventListener('click',function(event){
    var oldquantity=quantityplus.parentElement.getElementsByClassName('qty')[0].innerText
    var newquantity=parseFloat(oldquantity)+1
    quantityplus.parentElement.getElementsByClassName('qty')[0].innerText=newquantity
    UpdateCartTotale()

   })
    var quantitymoins=document.createElement('button')
    quantitymoins.innerHTML='-'
    quantitymoins.addEventListener('click',function(event){
        var oldquantity=quantitymoins.parentElement.getElementsByClassName('qty')[0].innerText
        if (oldquantity  >1){ var newquantity=parseFloat(oldquantity)-1}
        else newquantity=parseFloat(oldquantity)
       
        quantitymoins.parentElement.getElementsByClassName('qty')[0].innerText=newquantity
        UpdateCartTotale()
    
       })
    var suprime=document.createElement('button')
    suprime.innerHTML='x'
    quantitymoins.setAttribute("class","bouton")
    quantityplus.setAttribute("class","bouton")
    suprime.setAttribute("class","suprim")
    suprime.addEventListener('click',function(event){
        var buttonCliked=event.target
        buttonCliked.parentElement.remove()
           
        UpdateCartTotale()})
    cartRow.setAttribute("class","shop")
    cartRow.append(cartRowtitle)
    cartRow.append(cartRowprice)
    cartRow.append(quantityplus)
   
    cartRow.append(cartRowqty)
    cartRow.append(quantitymoins)

    cartRow.append(suprime)
 
    cartItems.append(cartRow)
    UpdateCartTotale()   
}
function   UpdateCartTotale(){
    var cartelements=document.getElementsByClassName('shop')
    var caissetotale=0
 

for ( i=0 ; i < cartelements.length; i++ )
{var carteline=cartelements[i]
    var leprix=carteline.getElementsByClassName('pri')[0].innerText.replace('$','')
    var laqty=carteline.getElementsByClassName('qty')[0].innerText
    var laquantite=parseFloat(laqty)
    var theprice=parseFloat(leprix)

    caissetotale=caissetotale+laquantite*theprice   
}
thetotalpriceshsop=document.getElementsByClassName('the total')[0]
    thetotalpriceshsop.innerHTML= 0
    thetotalpriceshsop.innerHTML= caissetotale
  
}
