class Github {
  constructor() {
    this.client_id = "115c4c346bab49072433";
    this.client_secret = "6c757fab8d50a6105ffebf3d18b2deb2be6149c7";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
