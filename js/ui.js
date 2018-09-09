class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    // Show Profile
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}" />
                        <a href="${user.html_url}" alt="" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    // Show Repos
    showRepos(repos) {
        let output = '';
        
        repos.forEach((repo) => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        document.querySelector('#repos').innerHTML = output;
    }

    // Show Error Alert
    showAlert(msg, className) {
        // Clear before creating
        this.clearAlert();

        const body = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        const divAlert = document.createElement('div');
        divAlert.className = className;
        divAlert.appendChild(document.createTextNode(msg));

        body.insertBefore(divAlert, search);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear Alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear Profile Input
    clearProfile() {
        this.profile.innerHTML = '';
    }
}