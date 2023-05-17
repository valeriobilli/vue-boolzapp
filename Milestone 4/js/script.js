const { createApp } = Vue 

createApp({
    data() {
        return {
            myMessage: '',
            selected: 0,
            user: [
                {name: "Sofia", avatar: "./img/avatar_io.jpg"}
            ],
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            sent : true,
                            received: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            sent : true,
                            received: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            sent : false,
                            received: true,
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            sent : true,
                            received: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            sent : false,
                            received: true,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            sent : true,
                            received: false,
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            sent : false,
                            received: true,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            sent : true,
                            received: false,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            sent : false,
                            received: true,
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            sent : true,
                            received: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            sent : false,
                            received: true,
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            sent : true,
                            received: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            sent : false,
                            received: true,
                        }
                    ],
                },
                {
                    name: 'Claudio',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            sent : true,
                            received: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            sent : false,
                            received: true,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            sent : true,
                            received: false,
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            sent : true,
                            received: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            sent : false,
                            received: true,
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            sent : false,
                            received: true,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            sent : true,
                            received: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            sent : false,
                            received: true,
                        }
                    ],
                }
            ],  
        }
    },
    methods: {
        selectContact(i) {
            this.selected = i;
        },
        getContactClass(i) {
            let classe = "";
            if (this.selected == i) {
                classe = "selected-contact"
            }
            return classe;
        },
        addMessage() {
            let dataAttuale = new Date();
            if (this.myMessage != '') {
                this.contacts[this.selected].messages.push ({
                    message: (this.myMessage),
                    sent: true,
                    date: dataAttuale.toLocaleDateString() + " " + dataAttuale.toLocaleTimeString(),
                })
                this.myMessage = '';
                this.reply();
            }
        },
        reply() {
            let dataAttuale = new Date();
            setTimeout (()=> {
                this.contacts[this.selected].messages.push ({
                    message: 'Ok👍🏻',
                    sent: false,
                    date: dataAttuale.toLocaleDateString() + " " + dataAttuale.toLocaleTimeString(),
                })
            }, 2000)
        },
        
    },
}).mount('#app')