## This project is a user query project on github using github api
--------
This project is built with html5, sass, javascript, jquery

This project puslished with amazon aws

you can see the published version of the project [here](http://githubapiliveserver.s3-website.eu-central-1.amazonaws.com/)

------------------------

```javascript
class Github {

    constructor() {
        this.url = "https://api.github.com/users/";
    }

    async getGithubData(username) {
        const responseUser = await fetch(this.url + username);
        const responseRepo = await fetch(this.url + username + "/repos");
        const responseFollower = await fetch(this.url + username + "/followers");
        const responseFollowing = await fetch(this.url + username + "/following");

        const userData = await responseUser.json();
        const repoData = await responseRepo.json();
        const followersData = await responseFollower.json();
        const followingData = await responseFollowing.json();

        return {
            user: userData,
            repo: repoData,
            followers: followersData,
            following: followingData

        }
    }
}
```
This code allows us to access the github api.

This api contains the general information : https://api.github.com/users/seyityahya

This api contains the repos : https://api.github.com/users/seyityahya/repos

This api contains the followers information : https://api.github.com/users/seyityahya/followers

This api contains the following information : https://api.github.com/users/seyityahya/following


-----------------

<video width="640" height="480" controls>
  <source src="image/tanitim.mp4" type="video/mp4">
</video>
