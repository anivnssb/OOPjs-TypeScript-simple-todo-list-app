import FullList from "../model/FullList";

interface DomList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DomList {
  ul: HTMLUListElement;
  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }
  static instance: ListTemplate = new ListTemplate();
  clear(): void {
    this.ul.innerHTML = "";
  }
  render(fullList: FullList): void {
    fullList.list.forEach((item) => {
      const li = document.createElement("li");
      li.className = "item";
      const check = document.createElement("input");
      check.type = "checkbox";
      check.id = item.id;
      check.checked = item.checked;
      check.tabIndex = 0;
      li.append(check);
      check.addEventListener("change", () => {
        item.checked = !item.checked;
        fullList.save();
      });
      const label = document.createElement("label") as HTMLLabelElement;
      label.htmlFor = item.id;
      label.textContent = item.item;
      li.append(label);

      const button = document.createElement("button");
      button.textContent = "x";
      button.className = "button";
      li.append(button);
      button.addEventListener("click", () => {
        fullList.removeItem(item.id);
      });
      this.ul.append(li);
    });
  }
}
