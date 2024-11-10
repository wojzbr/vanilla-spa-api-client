function setupDropdown(dropdownSelector, itemSelector, chosenSelector) {
    const dropdown = document.querySelector(dropdownSelector);
    const dropdownItems = document.querySelectorAll(itemSelector);
    const chosenItem = document.querySelector(chosenSelector);
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.addEventListener("click", () => dropdown.classList.toggle("expanded"));
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
