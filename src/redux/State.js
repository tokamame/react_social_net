let state = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, how are you?', lcounter: 15},
            {id: '2', message: 'It\'s my very first post', lcounter: 20},
            {id: '3', message: 'Pretty day', lcounter: 50},
        ]

    },
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                name: 'Dimych',
                avaSrc: 'https://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-H4-icon.png'
            },
            {
                id: 1,
                name: 'Andrey',
                avaSrc: 'https://www.stickees.com/files/avatars/male-avatars/1697-andrew-sticker.png'
            },
            {
                id: 1,
                name: 'Sveta',
                avaSrc: 'https://cf.ltkcdn.net/socialnetworking/images/std/168795-400x400-Female-Avatar-2-lg.jpg'
            },
            {
                id: 1,
                name: 'Sasha',
                avaSrc: 'https://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-D4-icon.png'
            },
            {id: 1, name: 'Viktor', avaSrc: 'https://icon-library.com/images/male-avatar-icon/male-avatar-icon-14.jpg'},
            {id: 1, name: 'Valera', avaSrc: 'https://ru.seaicons.com/wp-content/uploads/2015/10/Male-Face-M5-icon.png'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 3, message: 'I love you'},
            {id: 3, message: 'I love you too'},
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        lcounter: 0
    };
    state.profilePage.posts.push(newPost);
}


export default state;
