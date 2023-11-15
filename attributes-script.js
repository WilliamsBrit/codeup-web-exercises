
document.addEventListener("DOMContentLoaded", function() {
    setTimeout( function () {
        let profilePic = document.getElementById("profile-pic");
        profilePic.src ="img/photo1.png";
    }, 2000);
    setTimeout( function () {
        let profileName = document.getElementById("profile-name");
        profileName.innerHTML = "Brittany Williams"
    }, 4000);
    setTimeout( function () {
        let profileDesc = document.getElementById("profile-desc");
        profileDesc.classList.add('updated-profile-desc');
    }, 6000);
    setInterval(function () {
        let profileCard = document.getElementById("profile-card");
        profileCard.classList.toggle("alternate-background");
    }, 2000);
});

// document.addEventListener("DOMContentLoaded", function () {
//     function updateProfile() {
//         let profilePic = document.getElementById("profile-pic");
//         let profileName = document.getElementById("profile-name");
//         let profileDesc = document.getElementById("profile-desc");
//         let profileCard = document.getElementById("profile-card");
//
//         setTimeout(function () {
//             profilePic.src = "img/photo1.png";
//         }, 2000);
//
//         setTimeout(function () {
//             profileName.innerHTML = "Brittany Williams";
//         }, 4000);
//
//         setTimeout(function () {
//             profileDesc.classList.add('updated-profile-desc');
//         }, 6000);
//
//         setInterval(function () {
//             profileCard.classList.toggle("alternate-background");
//         }, 2000);
//     }
//
//     // Call the function to execute the code
//     updateProfile();
// });