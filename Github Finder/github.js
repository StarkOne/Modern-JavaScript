class GitHub {
  constructor() {
    this.client_id = "8c262a1766d7bebbe0df";
    this.client_secret = "c4125711eabc6a3c9797c20741be76d92557a434";
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    return {
      profile
    }
  }
}