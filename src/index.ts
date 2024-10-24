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
