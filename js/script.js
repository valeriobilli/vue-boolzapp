console.log("ciao")

const { createApp } = Vue 

createApp({
    data() {
        return {
            user: [
                {name: "Sofia", avatar: "./img/avatar_io.jpg"}
            ],
        }
    },
    methods: {

    },
}).mount('#app')