import "../src/css/style.css";
import FullList from "./model/FullList";
import ListTemplate from "./templates/ListTemplates";
import ListItem from "./model/ListItem";

const initApp = (): void => {
  const fullList = FullList.intstance;
  const listTemplate = ListTemplate.instance;

  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLInputElement;
  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();
    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText = input.value.trim();
    if (!newEntryText.length) return;
    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;
    const newItem = new ListItem(itemId.toString(), newEntryText);
    fullList.addItem(newItem);
    listTemplate.render(fullList);
  });

  const clearItemsButton = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;
  clearItemsButton.addEventListener("click", (): void => {
    fullList.clearList();
    listTemplate.clear();
  });
  fullList.load();
  listTemplate.render(fullList);
};

document.addEventListener("DOMContentLoaded", () => initApp());
