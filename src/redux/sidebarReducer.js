let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;