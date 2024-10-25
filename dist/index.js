"use strict";
function switchTab(event) {
  const target = event.target;
  const tabButtons = document.querySelectorAll('[role="tab"]');
  const tabPanels = document.querySelectorAll('[role="tabpanel"]');
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
document.querySelectorAll('[role="tab"]').forEach((button) => {
  button.addEventListener("click", switchTab);
});
const select = document.querySelectorAll(".custom-dropdown");
if (select.length) {
  select.forEach((elem) =>
    elem.addEventListener("click", () => {
      elem.classList.toggle("expanded");
    })
  );
}
const httpMethodDropdownItems = document.querySelectorAll(
  ".http-method .dropdown-list .dropdown-item"
);
const httpMethodChosen = document.querySelector(".http-method .chosen");
if (httpMethodChosen) {
    httpMethodDropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
        httpMethodChosen.textContent = item.textContent;
        httpMethodDropdownItems.forEach((item) => item.classList.remove("selected"));
      item.classList.add("selected");
    });
  });
}

const reqBodyTypeDropdownItems = document.querySelectorAll(
    ".req-body-type .dropdown-list .dropdown-item"
  );
  const reqBodyTypeChosen = document.querySelector(".req-body-type .chosen");
  if (reqBodyTypeChosen) {
    reqBodyTypeDropdownItems.forEach((item) => {
      item.addEventListener("click", () => {
        reqBodyTypeChosen.textContent = item.textContent;
        reqBodyTypeDropdownItems.forEach((item) => item.classList.remove("selected"));
        item.classList.add("selected");
      });
    });
  }
