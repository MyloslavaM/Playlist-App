import { test, expect } from "@playwright/test";
import { MusicAppPage } from "../page/MusicAppPage.page";

test.describe("Basic UI tests", () => {
  let musicAppPage;
  test.beforeEach(async ({ page }) => {
    musicAppPage = new MusicAppPage(page);
    await musicAppPage.open();
  });

  test("Tracks should be filtered according to the search input", async () => {
    await musicAppPage.fillSearchField("Spring Dance");
    await expect(musicAppPage.trackingList()).toHaveText(/^Spring Dance/);
  });

  test("The + button should add a single track to Your Playlist", async () => {
    await musicAppPage.fillSearchField("Spring Dance");
    await expect(musicAppPage.trackingList()).toHaveText(/^Spring Dance/);

    await musicAppPage.addTrack();
    await expect(musicAppPage.playList()).toHaveText(/Spring Dance/);
  });

  test("Verify Total Duration of the Playlist in Seconds", async () => {
    await musicAppPage.fillSearchField("Spring Dance");
    await expect(musicAppPage.trackingList()).toHaveText(/^Spring Dance/);

    await musicAppPage.addTrack();
    await expect(musicAppPage.playList()).toHaveText(/Spring Dance/);

    await expect(musicAppPage.totalPlaylistDuration()).toHaveText("200");
  });
});
