function switchTab(event: Event): void {
    const target = event.target as HTMLButtonElement;
    const tabButtons = document.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const tabPanels = document.querySelectorAll<HTMLDivElement>('[role="tabpanel"]');
    const selectedTabId = target.getAttribute('aria-controls') || '';

    tabButtons.forEach(button => {
        button.setAttribute('data-active', 'false');
    });

    tabPanels.forEach(panel => {
        panel.hidden = true;
    });

    target.setAttribute('data-active', 'true');
    const selectedTabPanel = document.getElementById(selectedTabId) as HTMLDivElement;
    if (selectedTabPanel) {
        selectedTabPanel.hidden = false;
    }
}

document.querySelectorAll<HTMLButtonElement>('[role="tab"]').forEach(button => {
    button.addEventListener('click', switchTab);
});


const select = document.querySelector<HTMLDivElement>('.custom-dropdown');

if (select) {
    select.addEventListener('click', () => {
        select.classList.toggle('expanded');
  });
}

const dropdownItems = document.querySelectorAll<HTMLDivElement>('.http-method .dropdown-list .dropdown-item');
const chosen = document.querySelector<HTMLDivElement>('.http-method .chosen');

if (chosen) {
  dropdownItems.forEach((item) => {
    item.addEventListener('click', () => {
      chosen.textContent = item.textContent;
      dropdownItems.forEach(item => item.classList.remove('selected'))
      item.classList.add('selected');
    });
  });
}

