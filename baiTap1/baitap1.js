function baitap1() {
    var diemChuan =+document.getElementById("diemChuan").value
    var diem1El = + document.getElementById("diem1").value
    var diem2El = + document.getElementById("diem2").value
    var diem3El = + document.getElementById("diem3").value
    var khuVuc = document.getElementById("khuVuc").value
    var doiTuong = document.getElementById("doiTuong").value
    var diemKhuVuc = tinhDiemKhuVuc(khuVuc)
    var diemDoiTuong = tinhDiemDoiTuong(doiTuong)
    document.getElementById ("result").style.display= "block";
     
     var resultEl = diem1El+diem2El+diem3El + diemKhuVuc + diemDoiTuong
     if (resultEl>= diemChuan ) {
        document.getElementById ("result").innerHTML = "Điểm tổng là :" + resultEl + " -ĐẠT-"

     }
     else {
        document.getElementById ("result").innerHTML = "Điểm tổng là :" + resultEl + "-CHƯA ĐẠT-"

     }
}

function tinhDiemKhuVuc(khuVuc) {
    switch(khuVuc) {
        case "A":
        return 2;
        case "B":
        return 1;
        case "C":
        return 0.5;
        default :
        return 0;

    }
}
function tinhDiemDoiTuong(doiTuong) {
    switch(doiTuong) {
        case "DT1":
        return 2.5;
        case "DT2":
        return 1.5;
        case "DT3":
        return 1;
        default :
        return 0;

    }
}