document.addEventListener('DOMContentLoaded', () => {
    const dummyData = generateDummyData(7);
    displayPosts(dummyData);
});

function generateDummyData(count) {
    const dummyData = [];

    const profilePictures = [
        './image/Ellipse.png',
        './image/Avatar.png',
        './image/Avatar.png',
        './image/Avatar1.png',
        './image/Ellipse2.png',
        './image/Avatar.png',
        './image/Avatar.png',
    ];

    const author = [
        'Trần Công C',
        '주현',
        '주현',
        'Nguyễn Văn A',
        'Phạm Thị B',
        'arochinski',
        'arochinski'
    ]

    const postContents = [
        'Có ai muốn học tiếng Hàn cùng tôi không?',
        '오늘 하노이 공부하실 분 구해요',
        '한국에서 어제 왔어요.<br> 베트남 쌀국수 정말 맛있네요.',
        '한국에서 어제 왔어요.<br> 베트남 쌀국수 정말 맛있네요.<br> (Tôi vừa đến từ Hàn Quốc hôm qua.<br> Phở Việt Nam thực sự rất ngon.)',
        'Tôi đang tìm bạn để trao đổi ngôn ngữ tiếng Hàn và tiếng Việt.',
        '한국에서 어제 왔어요. 베트남 쌀국수 정말 맛있네요. (Tôi vừa đến từ Hàn Quốc hôm qua. Phở Việt Nam thực sự rất ngon.)',
        '한국에서 어제 왔어요. 베트남 쌀국수 정말 맛있네요.'
    ];

    for (let i = 1; i <= count; i++) {
        dummyData.push({
            id: i,
            profilePicture: profilePictures[i - 1], 
            author: author [i - 1],
            content: postContents[i - 1], 
            
        });
    }

    return dummyData;
}

function displayPosts(posts) {
    const postContainer = document.getElementById('post-container');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <img src="${post.profilePicture}" alt="Profile Picture">
             <div class="post-text">
            <p class="author">${post.author}</p>
            <p class="content">${post.content}</p>
           
        `;

        postContainer.appendChild(postElement);
    });

    
}
