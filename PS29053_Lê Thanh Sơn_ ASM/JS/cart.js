var mycart = JSON.parse(localStorage.getItem('giohang'));
showSP(); //Gọi khi chưa xóa bất cứ sp nào
function showSP(){
    document.querySelector('#my-cart tbody').innerHTML = '';
    for(var i=0; i<mycart.length; i++){
        var codesp = `<tr>
                        <td><img src=${mycart[i].anh} alt=""></td>
                        <td>${mycart[i].ten}</td>
                        <td>${mycart[i].gia}</td>
                        <td><button onclick="xoaSP(${i})">
                        <i class="fa fa-trash custom-cursor-on-hover"></i>
                            </button>
                        </td>
                    </tr>`;
        document.querySelector('#my-cart tbody').innerHTML += codesp;
    }
    tt();
    localStorage.setItem('giohang', JSON.stringify(mycart));
}

function xoaSP(i){
    mycart.splice(i, 1);
    showSP();
}

function xoaAll(){
    mycart = [];
    showSP();
}

function tt(){
    var tong = 0;
    for (var i=0; i<mycart.length; i++){
        tong = tong + Number(mycart[i].gia);
    }
    document.getElementById('tt').innerText = tong;
}


function dh() {
    // Hiển thị thông báo thành công
    if (mycart.length === 0) {
        Swal.fire({
          title: 'ERROR',
          text: 'Vui lòng thêm sản phẩm vào giỏ hàng trước khi đặt hàng!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        // Thực hiện đặt hàng
        Swal.fire({
          title: 'SUCCESS',
          text: 'Đặt Hàng Thành Công!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }
  }
