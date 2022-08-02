// const { createApp } = Vue

const app = Vue.createApp({
    data() {
        return {
            firstName: 'Felipe',
            email: 'felipe@kot.com',
            picture: 'https://randomuser.me/api/portraits/men/3.jpg',
        }
    },
})
app.mount('#app')

