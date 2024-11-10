import { initTabListeners } from "./tabSwitching.js";
import { initDropdownListeners } from "./dropdownHandling.js";
import { initFormListener } from "./requestSending.js";

function registerListeners() {
  initTabListeners();
  initDropdownListeners();
  initFormListener();
}

export { registerListeners };
