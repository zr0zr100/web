function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === 'zr0zr100' && password === 'Bahaa') {
        alert('تم تسجيل الدخول بنجاح!');
        // هنا يمكنك إضافة الكود اللازم للتوجيه إلى صفحة أخرى أو تنفيذ إجراء معين
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة.');
    }
}
