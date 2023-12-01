    // auth.js

    function authenticateUser(email, password) {
        // 여기에서 로그인 처리 (로컬 스토리지 사용)
        const user = getUserByEmail(email);

        if (user && user.password === password) {
            // 로그인 성공
            alert('Login successful!');
            window.location.href = 'login-success.html'
            // 로그인 상태 저장 (로컬 스토리지 사용)
            saveUserSession(user);
        } else {
            // 로그인 실패
            alert('Invalid email or password.');
        }
    }

    function createUser(email, password, nickname) {
        // 여기에서 회원가입 처리 (로컬 스토리지 사용)
        const newUser = { email, password, nickname };
        saveUser(newUser);
        alert('Registration successful! Please log in.');
    }

    function saveUser(user) {
        // 사용자 정보를 로컬 스토리지에 저장
        const users = getUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    function getUserByEmail(email) {
        // 이메일에 해당하는 사용자를 가져옴
        const users = getUsers();
        return users.find(user => user.email === email);
    }

    function getUsers() {
        // 로컬 스토리지에서 사용자 목록을 가져옴
        return JSON.parse(localStorage.getItem('users')) || [];
    }

    function saveUserSession(user) {
        // 현재 세션에 사용자 정보를 저장
        sessionStorage.setItem('currentUser', JSON.stringify(user));
    }

    // 이전에 작성한 auth.js 파일에 다음 함수를 추가합니다.

function getCurrentUser() {
    // 현재 세션에서 사용자 정보를 가져옵니다.
    return JSON.parse(sessionStorage.getItem('currentUser'));
}

function savePostAndUserInfo(postContent, user) {
    // 여기에서 글과 사용자 정보를 저장하는 로직을 작성합니다.
    // 예시: 로컬 스토리지 사용
    const posts = getPosts();
    const newPost = { content: postContent, user: user };
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
}

function getPosts() {
    // 저장된 글 목록을 가져옵니다.
    return JSON.parse(localStorage.getItem('posts')) || [];
}
