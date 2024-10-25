"use strict";
function switchTab(event) {
    const target = event.target;
    const tabButtons = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');
    const selectedTabId = target.getAttribute('aria-controls') || '';
    tabButtons.forEach(button => {
        button.setAttribute('data-active', 'false');
    });
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    target.setAttribute('data-active', 'true');
    const selectedTabPanel = document.getElementById(selectedTabId);
    if (selectedTabPanel) {
        selectedTabPanel.hidden = false;
    }
}
document.querySelectorAll('[role="tab"]').forEach(button => {
    button.addEventListener('click', switchTab);
});
const select = document.querySelector('.custom-dropdown');
if (select) {
    select.addEventListener('click', () => {
        select.classList.toggle('expanded');
    });
}
const dropdownItems = document.querySelectorAll('.http-method .dropdown-list .dropdown-item');
const chosen = document.querySelector('.http-method .chosen');
if (chosen) {
    dropdownItems.forEach((item) => {
        item.addEventListener('click', () => {
            chosen.textContent = item.textContent;
            dropdownItems.forEach(item => item.classList.remove('selected'));
            item.classList.add('selected');
        });
    });
}
