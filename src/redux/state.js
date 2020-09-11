let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi how are you', likeCount: '12' },
            { id: 2, message: 'its my first post', likeCount: '11' },
            { id: 3, message: 'Hi how are you', likeCount: '13' },
            { id: 4, message: 'its my first post', likeCount: '141' }
        ]
    },
    dialogsPage: {
        messagesData: [
            { id: 1, message: "Hi" },
            { id: 2, message: "how are you?" },
            { id: 3, message: "Yooooo" }
        ],
        dialogs: [
            { id: 1, name: 'Name 1' },
            { id: 2, name: 'Name 2' },
            { id: 3, name: 'Name 3' },
            { id: 4, name: 'Name 4' }
        ]
    }

};

export default state;