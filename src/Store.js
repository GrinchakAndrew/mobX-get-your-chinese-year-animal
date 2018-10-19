import "babel-polyfill";
import {
  decorate,
  observable,
  autorun,
  action,
  computed,
  runInAction
} from "mobx";
import observer from "mobx-react";

class Store {
  data = [];
  storeImages = [];
  status = "";

  cycleBegins = 1984;
  numberOf12YrsCyclesInsideTheBigCycle = 5;
  numberOfAnimalsYrsCycle = 12;
  numberOfYearsInBigCycle = 60;
  arrayOfAnimals = [
    "Rat",
    "Cow",
    "Tiger",
    "Hare",
    "Dragon",
    "Snake",
    "Horse",
    "Sheep",
    "Monkey",
    "Rooster",
    "Dog",
    "Bore"
  ];
  arrayOfcolors = ["Tree", "Fire", "Earth", "Metal", "Water"];

  importAll(assets) {
    let images = [];
    assets.keys().map(item => {
      images[item.replace("./", "")] = assets(item);
    });
    return images;
  }
  async fetchAssets() {
    try {
      this.status = "pending";
      var images = await this.importAll(
        require.context("./assets", false, /\.(jpe?g)$/)
      );
      runInAction(() => {
        for (var i in images) {
          this.storeImages.push(images[i]);
        }
        this.status = "completed";
      });
    } catch (e) {
      runInAction(() => (this.status = "failed"));
    }
  }
  addData = data => {
    this.data.push(data);
  };

  get _diff() {
    this.data.map(obj => {
      return (obj["diff"] = obj["dob"] - this.cycleBegins);
    }, this);
  }

  get dataFromStore() {
    return this.data;
  }

  get totalProfileInData() {
    return this.data.length;
  }

  get fetchArrayOfAnimals() {
    return this.arrayOfAnimals;
  }

  diff = index => {
    return this.data[index]["dob"] - this.cycleBegins;
  };
}
decorate(Store, {
  data: observable,
  totalProfileInData: computed,
  fetchPosts: action,
  status: observable,
  fetchAssets: action,
  storeImages: observable
});

const store = (window.store = new Store());

autorun(() => {
  store.data && store._diff;
});

autorun(() => {
  store.fetchAssets();
});

export default store;
