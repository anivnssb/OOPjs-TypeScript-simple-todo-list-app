import FullList from "./FullList";

interface Multiple {
  list: FullList[];
  load(): void;
  save(): void;
  addList(fullList: FullList): void;
  removeList(id: string): void;
}

export default class MultiList implements Multiple {
  static instance: MultiList = new MultiList();
  private constructor(private _list: FullList[] = []) {}
  get list(): FullList[] {
    return this._list;
  }
  load(): void {}
}
