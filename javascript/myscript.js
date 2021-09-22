var app = new Vue(
	{
		el : '#app',

		data : {

			contacts: [

				{
					name: 'Michele',
					avatar: '_1',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Hai portato a spasso il cane?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Ricordati di dargli da mangiare',
							status: 'sent'
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Tutto fatto!',
							status: 'received'
						}
					],
				},

				{
					name: 'Fabio',
					avatar: '_2',
					visible: true,
					messages: [
						{
							date: '20/03/2020 16:30:00',
							text: 'Ciao come stai?',
							status: 'sent'
						},
						{
							date: '20/03/2020 16:30:55',
							text: 'Bene grazie! Stasera ci vediamo?',
							status: 'received'
						},
						{
							date: '20/03/2020 16:35:00',
							text: 'Mi piacerebbe ma devo andare a fare la spesa.',
							status: 'sent'
						}
					],
				},
			
				{
					name: 'Samuele',
					avatar: '_3',
					visible: true,
					messages: [
						{
							date: '28/03/2020 10:10:40',
							text: 'La Marianna va in campagna',
							status: 'received'
						},
						{
							date: '28/03/2020 10:20:10',
							text: 'Sicuro di non aver sbagliato chat?',
							status: 'sent'
						},
						{
							date: '28/03/2020 16:15:22',
							text: 'Ah scusa!',
							status: 'received'
						}
					],
				},

				{
					name: 'Luisa',
					avatar: '_4',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Lo sai che ha aperto una nuova pizzeria?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Si, ma preferirei andare al cinema',
							status: 'received'
						}
					],
				},
				
			],

			// copiedContacts : contacts.slice(),

			clickIndex : 0,

			newSentMessageText : '',

			searchKey: '',
			
			
		},

		methods: {


			/**
			 * function used to push a new text message in to the array of the messages
			 * 
			 * @param {*} index param that indicates the correct position where push new message
			 */
			sendMessage : function(index){
				let newSentMessage = {
					date : this.getDateTime(),
					text : this.newSentMessageText,
					status : 'sent'
				}


				if(newSentMessage.text.length>0){
					
					this.contacts[index].messages.push(newSentMessage);
					
					setTimeout(() => {
						let newRecievedMessage = {
							date: this.getDateTime(),
							text: 'Ok',
							status : 'recieved'
						};
						this.contacts[index].messages.push(newRecievedMessage);
					}, 3000)
					this.newSentMessageText = '';

					
				}

				
			},
			/**
			 * function that returns every time the actual date and time
			 * 
			 * @returns  date and time with dd/mm/yyyy h:m:s scheme
			 */
			getDateTime : function (){
				let now = new Date();
				let dd = String(now.getDate()).padStart(2, '0');
				let mm = String(now.getMonth() + 1).padStart(2, '0'); 
				let yyyy = now.getFullYear();
				let hour = now.getHours();
				let minutes = now.getMinutes();
				let seconds = now.getSeconds();
				

				return dd + '/' + mm + '/' + yyyy + ' ' +  hour +':'+ minutes +':'+ seconds;		

			},

			showDropdownMenu : function(){
				const element = document.querySelectorAll(".ms_dropdown-list");
				console.log(element);

				element.forEach(element => {
					
					element.classList.toggle("ms_hidden");
				});

			},

			/**
			 * function that deletes the selected message from the choosen message array
			 * 
			 * @param {*} index that the selected message has in the array
			 */
			deleteMessage : function(index){
				this.contacts[this.clickIndex].messages.splice(index,1);
			},


			/**
			 * function that gives all the info about the choosen message
			 * 
			 * @param {*} index that the selected message has in the array
			 */
			getInfoMessage : function(index){
				let date = this.contacts[this.clickIndex].messages[index].date;
				let text = this.contacts[this.clickIndex].messages[index].text;
				let status = this.contacts[this.clickIndex].messages[index].status;
				alert(date + ' ' + text + ' '+ status)
			}

						
		},
		

	},
	
	
);
