function setupDropdown(dropdownSelector: string, itemSelector: string, chosenSelector: string) {
    const dropdown = document.querySelector<HTMLElement>(dropdownSelector);
    const dropdownItems = document.querySelectorAll<HTMLElement>(itemSelector);
    const chosenItem = document.querySelector<HTMLElement>(chosenSelector);

    dropdown?.addEventListener("click", () => dropdown.classList.toggle("expanded"));

    if (chosenItem) {
      dropdownItems.forEach((item) => {
        item.addEventListener("click", () => {
          chosenItem.textContent = item.textContent;
          dropdownItems.forEach((item) => item.classList.remove("selected"));
          item.classList.add("selected");
        });
      });
    }
  }

  function initDropdownListeners() {
    setupDropdown(".http-method", ".http-method .dropdown-list .dropdown-item", ".http-method .chosen");
    setupDropdown(".req-body-type", ".req-body-type .dropdown-list .dropdown-item", ".req-body-type .chosen");
  }

  export { initDropdownListeners };
