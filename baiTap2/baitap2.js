function pay() {
    var kw = + document.getElementById("kw").value
    var nameEl = document.getElementById ("name").value
    var price = 0
    if (kw<=50) {
        price += 500*kw
    }
    else if (kw<=100){
        price+=500*50 +(kw-50)*650
    }
    else if (kw <=200) {
        price+=500*50+650*50+(kw-100)*850
    }
    else if (kw<=350) {
        price+=500*50+650*50+100*850+(kw-200)*1100
    }
    else {
        price +=500*50+650*50+100*850+1100*150+(kw-350)*1300
    }
document.getElementById("thanhTien").style.display="block"
document.getElementById("xuatTien").innerHTML =nameEl +"_"+ price.toLocaleString()+"VND"
}
