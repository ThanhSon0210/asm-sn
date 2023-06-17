function validateForm() {
    var ten = document.forms["MyForm"]["Ten"];
    var email = document.forms["MyForm"]["email"];
    var password = document.forms["MyForm"]["password"];
    var confirmPassword = document.forms["MyForm"]["confirmPassword"];
    var errorMessage = document.getElementById("error-message");
  
    if (ten.value === "") {
      errorMessage.innerHTML = "Vui lòng nhập TÊN của bạn.";
      ten.focus();
      return false;
    } 
    if (email.value === "") {
      errorMessage.innerHTML = "Vui lòng nhập địa chỉ EMAIL.";
      email.focus();
      return false;
    }
    if (password.value === "") {
      errorMessage.innerHTML = "Vui lòng nhập MẬT KHẨU.";
      password.focus();
      return false;
    }
    if (confirmPassword.value === "") {
      errorMessage.innerHTML = "Vui lòng NHẬP LẠI mật khẩu.";
      confirmPassword.focus();
      return false;
    }
    if (password.value !== confirmPassword.value) {
      errorMessage.innerHTML = "Mật khẩu KHÔNG TRÙNG KHỚP.";
      confirmPassword.focus();
      return false;
    }
    alert("Đăng nhập thành công!");
    return true;
  }
  