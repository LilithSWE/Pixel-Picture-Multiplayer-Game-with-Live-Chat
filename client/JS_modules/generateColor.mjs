//Knapp klickad
//Random bild har hämtats från JSON
//Hämta colors från den bilden
//Dela ut färgena till username som finns i localstorage
//Spara färgen i localstorage

const colors = ["red", "green", "blue", "yellow"]; //endast för TESTNING, kommer att raderas

const testBTN = document.getElementById('testBTN');

testBTN.addEventListener('click', generateColor);

export default function generateColor() {
    var usernames = ['user1', 'user2', 'user3', 'user4']; //testning

    for (var i = 0; i < usernames.length; i++) {
        var username = usernames[i];
        var color = colors[i];

        // Spara färgen i localstorage för varje användarnamn
        localStorage.setItem("color", color);
    }
}
