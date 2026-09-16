const { login } = require('./auth');

describe('Regression Test - Login Exceptions', () => {
    test('Đăng nhập thất bại (trả về false) khi sai mật khẩu', () => {
        expect(login('admin', 'wrongpass')).toBe(false);
    });

    test('Đăng nhập thất bại (trả về false) khi sai username', () => {
        expect(login('unknown_user', '123')).toBe(false);
    });

    test('Ném ra lỗi khi username rỗng', () => {
        expect(() => login('', '123')).toThrow('Username cannot be empty');
        expect(() => login('   ', '123')).toThrow('Username cannot be empty');
    });

    test('Ném ra lỗi khi tài khoản bị khóa', () => {
        expect(() => login('locked_user', '123')).toThrow('Account is locked');
    });

    test('Ném ra lỗi khi mật khẩu chứa ký tự đặc biệt', () => {
        expect(() => login('admin', '123@#$')).toThrow('Password contains special characters');
    });
});
