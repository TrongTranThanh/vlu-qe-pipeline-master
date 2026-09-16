function login(username, password) {
    // Kiểm tra username rỗng
    if (!username || username.trim() === '') {
        throw new Error('Username cannot be empty');
    }
    
    // Kiểm tra tài khoản bị khóa (ví dụ hardcode 'locked_user')
    if (username === 'locked_user') {
        throw new Error('Account is locked');
    }
    
    // Kiểm tra mật khẩu chứa ký tự đặc biệt
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialChars.test(password)) {
        throw new Error('Password contains special characters');
    }

    // Kiểm tra đăng nhập thành công
    if (username === 'admin' && password === '999') {
        return true;
    }

    // Sai thông tin (mật khẩu sai hoặc username không tồn tại)
    return false;
}

module.exports = { login };
// TEST 
