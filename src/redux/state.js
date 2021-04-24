let state = {
    profilePage: {
        posts: [
            {
                id: 1,
                name: 'Nikita',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                img:
                    'https://img.freepik.com/free-vector/spring-landscape-scene_52683-56331.jpg?size=626&ext=jpg',
                likesCount: 10,
            },
            {
                id: 2,
                name: 'Random Titile',
                img:
                    'https://s23527.pcdn.co/wp-content/uploads/2019/12/Downside-Up-745x449.jpg.optimal.jpg',
                text:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum corrupti eligendi doloribus minus explicabo ad voluptatibus ab officia quidem dolor eius vitae, nisi voluptas, impedit beatae facilis. Omnis, delectus mollitia?',
                likesCount: 5,
            },
        ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Elon Mask' },
            { id: 2, name: 'Donald Trump' },
            { id: 3, name: 'Vladimir Putin' },
            { id: 4, name: 'Steve Jobs' },
        ],
        messages: [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'How is it going?' },
        ],
    }
}

export default state
