import { observable, computed, action } from "mobx";

class NavigationStore {
  // Properties
  @observable menuItems = [
    {
      id: 1,
      text: "Mainpage",
      link: "/",
    },
    {
      id: 2,
      text: "Page 1",
      link: "/page1",
    },
  ];

  // Computed

  // Actions
}

export default new NavigationStore();
