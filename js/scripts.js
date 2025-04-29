function greetUser() {
    alert("Hello, user!");
}

//greetUser();

function thankYou() {
    alert("Thank you for your submition");
}

function storeCardInfo() {
    var retrievedImgSrc = localStorage.getItem('cardImgSrc');
    var retrievedTitle = localStorage.getItem('cardTitle');

    // Set the image source dynamically
    document.getElementById('cardImgSrc').src = retrievedImgSrc;
}

function changeText() {
    let title = document.getElementById("title")
    title.innerHTML = " There are over 40 vehicles that I've owned and worked on."

}
