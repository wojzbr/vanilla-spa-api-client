function switchTab(event) {
    const target = event.target;
    const tabButtons = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');
    const selectedTabId = target.getAttribute("aria-controls") || "";
    tabButtons.forEach((button) => button.setAttribute("data-active", "false"));
    tabPanels.forEach((panel) => (panel.hidden = true));
    target.setAttribute("data-active", "true");
    const selectedTabPanel = document.getElementById(selectedTabId);
    if (selectedTabPanel)
        selectedTabPanel.hidden = false;
}
function initTabListeners() {
    document.querySelectorAll('[role="tab"]').forEach((button) => {
        button.addEventListener("click", switchTab);
    });
}
export { initTabListeners };
