var dssp = [
    {anhsp:'../images/kd1.jpg',tensp: 'V3pro Keyboard',gia: 700000,},
    {anhsp:'../images/kd2.jpg',tensp: 'Razer Blackwindow',gia: 700000,},
    {anhsp:'../images/kd3.jpg',tensp: 'Asus_light Keyboard',gia: 700000,},

    {anhsp:'../images/cd1.jpg',tensp: 'Full Black Keyboard',gia: 750000,},
    {anhsp:'../images/cd2.jpg',tensp: 'Yellow Keyboard',gia: 750000,},
    {anhsp:'../images/cd3.jpg',tensp: 'Black-Red_light Dragon',gia: 750000,},

    {anhsp:'../images/ph1.webp',tensp: 'SQU Bàn Phím',gia: 900000,},
    {anhsp:'../images/ph2.jpg',tensp: 'Phím Rời bàn phím',gia: 900000,},
    {anhsp:'../images/ph3.jpg',tensp: 'Giá Đỡ Bàn Phím',gia: 900000,},
];

for(var i=0; i<dssp.length; i++){
    var sp = `<div class="onesp">
                <div id="dausp">
                    <h6>7.5k ❤️ </h6>
                    <h1>🆕</h1>
                </div>
                <img src="${dssp[i].anhsp}" alt="">
                <Strong>${dssp[i].tensp}</Strong><br><br>
                <h2>${dssp[i].gia}</h2>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i><br><br>
                <button onclick="themSP(this)">ADD TO CART</button> <a href="">👀</a>
            </div>`;
    document.getElementById('dssp').innerHTML += sp;
}


var giohang ;
if(localStorage.getItem('giohang')==undefined){
    giohang = [];
}else{
    giohang = JSON.parse(localStorage.getItem('giohang'));
}





function themSP(btn){
    alert('Đã Thêm Vào Giỏ Hàng');
    var codeSP = btn.parentElement;
    var tenSP = codeSP.getElementsByTagName('strong')[0].innerText;
    var giaSP = codeSP.getElementsByTagName('h2')[0].innerText;
    var anhSP = codeSP.getElementsByTagName('img')[0].src;

    var sp = {
        ten : tenSP,
        gia : giaSP,
        anh : anhSP,
    }

    giohang.push(sp);
    // biến localStorage : biến này chỉ lưu đc dạng chữ nên phải dùng JSON.stringify để đưa về dạng chữ
    localStorage.setItem('giohang', JSON.stringify(giohang));
}

/*
ẩn menu
 */
// $(document).ready(function(){
//     $("i").click(function(){
//       $(".header").toggle();
//     });
//   });


