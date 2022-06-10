const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const ilkEkran = document.getElementById("ilk-ekran");
const profile = document.getElementById("profile");
const follow = document.getElementById("followers");
const repos = document.getElementById("repos");
const following = document.getElementById("following");
const clearLastUsers = document.getElementById("clear-last-users");
const followingClose = document.getElementById("following-close");
const reposClose = document.getElementById("repos-close");
const followersClose = document.getElementById("followers-close");
const img = document.getElementById("image");
const followersScreen = document.getElementById("follow-screen");
const reposScreen = document.getElementById("repos-screen");
const followingScreen = document.getElementById("following-screen");
const lastUsers = document.getElementById("last-users");

const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
    follow.addEventListener("click",followersActive);
    repos.addEventListener("click",reposActive);
    following.addEventListener("click",followingActive);
    followersClose.addEventListener("click",followersNotActive);
    reposClose.addEventListener("click",reposNotActive);
    followingClose.addEventListener("click",followingNotActive);
}

function getData(e) {
    let username = nameInput.value.trim();

    if (username === "") {
        alert("Lütfen geçerli bir kullanıcı adı girin.");
    }
    else {
        github.getGithubData(username)
        .then(response =>{
            if (response.user.message === "Not Found") {
                //Hata Mesajı
                alert("Lütfen geçerli bir kullanıcı adı girin.");
            }
            else {
                ilkEkran.style.zIndex = -1;
                profile.style.opacity = 1;
                img.style.opacity = 1;
                ui.addSearchedUserToUI(username);
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
                ui.showFollowersInfo(response.followers);
                ui.showFollowingInfo(response.following);
            }
        })
        .catch(err => console.log(err));
    }

    ui.clearInput();
    e.preventDefault();
}

function clearAllSearched() {
    //Tüm arananları temizle
    if (confirm("emin misiniz ?")) {
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUI();
    }
}

function getAllSearched() {
    //Arananları Storagedan al ve ui ye ekle

    let users = Storage.getSearchedUsersFromStorage();

    users.forEach(user => {
        lastUsers.innerHTML += `<a href="https://github.com/${user}">${user}</a>`
    });
}

function followersActive() {
    followersScreen.style.height = 90 + "%";
    followersScreen.style.zIndex = 1;

 }
function reposActive() {
    reposScreen.style.height = 90 + "%";
    reposScreen.style.zIndex = 1;
 }
function followingActive() {
    followingScreen.style.height = 90 + "%";
    followingScreen.style.zIndex = 1;
 }
function followersNotActive() {
    followersScreen.style.height = 30 + "%";
    setTimeout(function() {
        followersScreen.style.zIndex = -1;
    },500);
}
function reposNotActive() {
    reposScreen.style.height = 30 + "%";
    setTimeout(function() {
        reposScreen.style.zIndex = -1;
    },500);
}
function followingNotActive() {
    followingScreen.style.height = 30 + "%";
    setTimeout(function() {
        followingScreen.style.zIndex = -1;
    },500);
}
