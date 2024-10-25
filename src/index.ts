function switchTab(event: Event) {
  const target = event.target as HTMLElement;
  const tabButtons = document.querySelectorAll<HTMLElement>('[role="tab"]');
  const tabPanels = document.querySelectorAll<HTMLElement>('[role="tabpanel"]');
  const selectedTabId = target.getAttribute("aria-controls") || "";

  tabButtons.forEach((button) => {
    button.setAttribute("data-active", "false");
  });

  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });

  target.setAttribute("data-active", "true");

  const selectedTabPanel = document.getElementById(selectedTabId);
  if (selectedTabPanel) {
    selectedTabPanel.hidden = false;
  }
}

document.querySelectorAll<HTMLElement>('[role="tab"]').forEach((button) => {
  button.addEventListener("click", switchTab);
});

const customDropdowns = document.querySelectorAll<HTMLElement>(".custom-dropdown");
customDropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("expanded");
  });
});

const httpMethodDropdownItems = document.querySelectorAll<HTMLElement>(".http-method .dropdown-list .dropdown-item");
const httpMethodChosen = document.querySelector<HTMLElement>(".http-method .chosen");

if (httpMethodChosen) {
  httpMethodDropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      httpMethodChosen.textContent = item.textContent;
      httpMethodDropdownItems.forEach((item) => item.classList.remove("selected"));
      item.classList.add("selected");
    });
  });
}

const reqBodyTypeDropdownItems = document.querySelectorAll<HTMLElement>(".req-body-type .dropdown-list .dropdown-item");
const reqBodyTypeChosen = document.querySelector<HTMLElement>(".req-body-type .chosen");

if (reqBodyTypeChosen) {
  reqBodyTypeDropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      reqBodyTypeChosen.textContent = item.textContent;
      reqBodyTypeDropdownItems.forEach((item) => item.classList.remove("selected"));
      item.classList.add("selected");
    });
  });
}
