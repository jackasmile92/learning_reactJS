let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi how are you', likeCount: '12' },
                { id: 2, message: 'its my first post', likeCount: '11' },
                { id: 3, message: 'Hi how are you', likeCount: '13' },
                { id: 4, message: 'its my first post', likeCount: '141' }
            ],
            newPostText: 'newtext'
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
        },
        siteBar: {
            friends: [
                {
                    name: 'Васек Писек',
                    avatar: 'https://i.redd.it/v0caqchbtn741.jpg'
                },
                {
                    name: 'Алена Пелена',
                    avatar: 'https://telegram.org/file/464001801/4/pPObBDJVv-M.32191.png/9963667389a3218249'
                },
                {
                    name: 'Максим Угостим',
                    avatar: 'https://wl-brightside.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg'
                }

            ]
        }

    },
    _callSubscriber() {
        console.log('state was changed');
    },

    getState() {
        return this._state;
    },

    /*addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        }
    }
}


export default store;
window.store = store;