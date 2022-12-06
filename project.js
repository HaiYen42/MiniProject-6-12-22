
function toRegister(){
    window.location="./Register1.html";
}

let product=document.getElementsByClassName("product");
console.log(product)
let ul = document.getElementById("list");
let li=document.createElement("li");
let ul2=document.createElement("ul")


let love = document.querySelectorAll(".icon");
for (i=0; i < love.length ; i++) {
    love[i].addEventListener('click', function(){
        console.log(this);
        this.style.color = (this.style.color == "black") ? "red" : "black";
    })
}

// Thêm sản phẩm vào giỏ hàng //
let addBtn = document.querySelectorAll('.addCart');
let listCart = []

for (i = 0 ; i < addBtn.length ; i ++) {
    addBtn[i].addEventListener('click', function(){
        console.log(this.parentNode.childNodes[5].childNodes[2].textContent);
        listCart.push({
            img: this.parentNode.childNodes[1].childNodes[0].src,
            name: this.parentNode.childNodes[3].childNodes[0].textContent,
            price:this.parentNode.childNodes[5].childNodes[2].textContent
        })
        localStorage.setItem('cart',JSON.stringify(listCart));
        putToCart()
        showMoney()
    })
}

// Hiển thị giỏ hàng
let showBtn = document.getElementById('showCart');
let productCart = document.getElementById('productCart')
console.log(productCart.style.display);
showBtn.addEventListener('click', function(){
    productCart.style.display = (productCart.style.display == "none") ? "block" : "none"
})

function putToCart (){
    let getCart = localStorage.getItem('cart');
    let perfectCart = JSON.parse(getCart);
    let div = document.createElement('div');
    let img = document.createElement('img');
    let span = document.createElement('span');
    productCart.appendChild(div);
    div.appendChild(img);
    img.src = perfectCart[perfectCart.length-1].img
    img.width = 100
    div.appendChild(span)
    span.innerHTML = perfectCart[perfectCart.length-1].name + " " + perfectCart[perfectCart.length-1].price + "$"
}

// Hiện tổng tiền ở giỏ hàng
function showMoney (){
    let getCart = localStorage.getItem('cart');
    let perfectCart = JSON.parse(getCart);
    let money = 0;
    for (i=0 ; i <perfectCart.length ; i++){
        money += parseFloat(perfectCart[i].price);
    }
    document.getElementById('showMoney').innerHTML = "Tổng tiền cần thanh toán: " + money + "$";
}
