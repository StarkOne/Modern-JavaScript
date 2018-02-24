class GitHub {
  constructor() {
    this.client_id = "8c262a1766d7bebbe0df";
    this.client_secret = "c4125711eabc6a3c9797c20741be76d92557a434";
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile,
      repos
    }
  }
}