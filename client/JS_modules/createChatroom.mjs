let createChatroomButton = document.getElementById('createChatroomButton');

createChatroomButton.addEventListener('click', createChatroom);

export default function createChatroom() {
    let userNameInput = document.getElementById('userName');
    let roomNameInput = document.getElementById('roomName');

    let userNameValue = userNameInput.value.trim();
    let roomNameValue = roomNameInput.value.trim();

    if (userNameValue === '') {
        alert('Var vänlig och välj ett användarnamn!');
        return false;
    } else if (roomNameValue === '') {
        alert('Var vänlig och välj ett namn för chattrum!');
        return false;
    }

    return true;
    
}

