const secretMessagesContainer = document.querySelector('#secret-messages-container')
const secretMessageForm = document.querySelector('#secret-message-form')

const baseURL = `http://localhost:4050/api/messages`

const postMessage = body => axios.post(baseURL, body).then(res => {
  console.log(res.data)
  console.log(`postmessage`)
  displayMessages(res.data)
}).catch(err => {
  console.log(err)
  alert('Uh oh. not working....')
})

function submitHandler(e) {
    e.preventDefault()

    let pin = document.querySelector('#secret-message-pin-input')
    let message = document.querySelector('#secret-message-input')

    let bodyObj = {
        pin: pin.value,
        message: message.value
    }

    postMessage(bodyObj)

    pin.value = ''
    message.value = ''
}

function createMessage(data) {
  console.log(`create message`);
    const messageCard = document.createElement('div')
    messageCard.classList.add('message-card')

    messageCard.innerHTML = `<p class="message">${data}</p>`


    secretMessagesContainer.appendChild(messageCard)
}

function displayMessages(data) {
  console.log(`display message`);
  secretMessagesContainer.innerHTML = ``
  for (let i = 0; i < data.message.length; i++) {
      createMessage(data.message[i])
  }
}

secretMessageForm.addEventListener('submit', submitHandler)