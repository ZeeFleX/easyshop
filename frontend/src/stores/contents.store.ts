import { observable, computed, action } from "mobx";
import { getContentsAction } from "../api/contents";

class ContentsStore {
  // Properties
  @observable data: any = [];

  // Computed

  // Actions
  @action async getContents() {
    this.data = await getContentsAction();
  }
}

export default new ContentsStore();
