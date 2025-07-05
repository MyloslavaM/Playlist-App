import * as dotenv from "dotenv";
dotenv.config();

export class MusicAppPage {
  constructor(page) {
    this.page = page;
    this.url = process.env.BASE_URL;
    this.locSearchInput = ".MuiInputBase-input";
    this.locTrackList = "#tracklist";
    this.locPlusButton = ".css-hktlod";
    this.locPlayList = "#playlist";
    this.locTotalDuration = "#playlist-duration";
  }

  async open() {
    await this.page.goto(this.url);
  }

  async fillSearchField(track) {
    await this.page.locator(this.locSearchInput).fill(track);
  }

  trackingList() {
    return this.page.locator(this.locTrackList);
  }

  async addTrack() {
    await this.page.locator(this.locPlusButton).click();
  }

  playList() {
    return this.page.locator(this.locPlayList);
  }

  totalPlaylistDuration() {
    return this.page.locator(this.locTotalDuration);
  }
}
