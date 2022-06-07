const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const ilkEkran = document.getElementById("ilk-ekran");
const profile = document.getElementById("profile");
const follow = document.getElementById("followers");
const repos = document.getElementById("repos");
const following = document.getElementById("following");
const website = document.getElementById("website");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const followingClose = document.getElementById("following-close");
const reposClose = document.getElementById("repos-close");
const followersClose = document.getElementById("followers-close");
const img = document.getElementById("image");
const followersScreen = document.getElementById("follow-screen");
const reposScreen = document.getElementById("repos-screen");
const followingScreen = document.getElementById("following-screen");

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
}

function getAllSearched() {
    //Arananları Storagedan al ve ui ye ekle
}

function followersActive() {
    followersScreen.style.zIndex = 1;
}
function reposActive() {
    reposScreen.style.zIndex = 1;
}
function followingActive() {
    followingScreen.style.zIndex =1;
}