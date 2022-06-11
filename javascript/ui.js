class UI {
    constructor() {
        this.image = document.getElementById("image");
        this.isimDiv = document.getElementById("isim");
        this.followers = document.getElementById("followers");
        this.repos = document.getElementById("repos");
        this.following = document.getElementById("following");
        this.altBilgi = document.getElementById("alt-bilgi");
        this.inpustField = document.getElementById("githubname");
        this.bio = document.getElementById("bio");
        this.reposAdd = document.getElementById("repos-add");
        this.followersAdd = document.getElementById("followers-add");
        this.followingAdd = document.getElementById("following-add");
        this.lastUsers = document.getElementById("last-users");
    }
    clearInput() {
        this.inpustField.value = "";
    }
    showUserInfo(user){

        //profil resmi
        this.image.innerHTML = `
        <img src="${user.avatar_url}" alt="">
        `
        //bilgiler
        this.isimDiv.innerHTML = `
            <div class="ilk">
                <h2>${user.name}</h2>
                <p>joined ${user.created_at}</p>
            </div>
                <h5>${user.login}</h5>
            </div>
        `

        //bio kısmı
        if (user.bio === null) {
            this.bio.innerHTML = `This profile has no bio...`
        }
        else {
            this.bio.innerHTML = `${user.bio}`
        }

        //takipçi,repos,takip ediler değerlerini çekme
        this.followers.innerHTML = `
        <h3>Followers</h3>
        <h2>${user.followers}</h2>
        `
        this.repos.innerHTML = `
        <h3>Repos</h3>
        <h2>${user.public_repos}</h2>
        `
        this.following.innerHTML = `
        <h3>Following</h3>
        <h2>${user.following}</h2>
        `

        this.altBilgi.innerHTML = `
        <div>
            <a href="">
                <img src="image/location2.png" alt="">
                ${user.location}                    
            </a>
            <a href="">
                <img src="image/company .png" alt="">
                ${user.company}                    
            </a> 
        </div>
        <div>
            <a target="_blank" href="${user.blog}">
                <img src="image/website.png" alt="">
                ${user.blog}                   
            </a>
            <a target="_blank" href="https://twitter.com/${user.twitter_username}">
                <img src="image/twitter.svg" alt="">
                ${user.twitter_username}                   
            </a>
        </div>
        `    
    }
    showRepoInfo(repos) {
        this.reposAdd.innerHTML = "";

        repos.forEach(repos => {
            this.reposAdd.innerHTML += `
            <div class="star-fork">
                <a target="_blank" href="${repos.html_url}">${repos.name}</a>    
                    <div class="right">
                        <button class="star">
                            star ${repos.stargazers_count}
                        </button>
                        <button class="fork">
                            fork ${repos.forks_count}
                        </button>
                    </div>
            </div>
            `
        });
    }

    showFollowersInfo(follows) {
        this.followersAdd.innerHTML = "";

        follows.forEach(follows => {
            this.followersAdd.innerHTML += `
            <a target="_blank" href="${follows.html_url}">${follows.login}</a>
            `
        });
    }

    showFollowingInfo(following) {
        this.followingAdd.innerHTML = "";

        following.forEach(following => {
            this.followingAdd.innerHTML += `
            <a target="_blank" href="${following.html_url}">${following.login}</a>
            `
        });
    }

    addSearchedUserToUI(username) {
        let users = Storage.getSearchedUsersFromStorage();

        if (users.indexOf(username) === -1) {

            this.lastUsers.innerHTML +=`
            <a target="_blank" href="https://github.com/${username}">${username}</a>
            `
        }
    }

    clearAllSearchedFromUI() {
        while(this.lastUsers.firstElementChild !== null){
            this.lastUsers.removeChild(this.lastUsers.firstElementChild);
        }
    }
}