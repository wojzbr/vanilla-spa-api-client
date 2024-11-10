function switchTab(event: Event) {
    const target = event.target as HTMLElement;
    const tabButtons = document.querySelectorAll<HTMLElement>('[role="tab"]');
    const tabPanels = document.querySelectorAll<HTMLElement>('[role="tabpanel"]');
    const selectedTabId = target.getAttribute("aria-controls") || "";

    tabButtons.forEach((button) => button.setAttribute("data-active", "false"));
    tabPanels.forEach((panel) => (panel.hidden = true));

    target.setAttribute("data-active", "true");
    const selectedTabPanel = document.getElementById(selectedTabId);
    if (selectedTabPanel) selectedTabPanel.hidden = false;
  }

  function initTabListeners() {
    document.querySelectorAll<HTMLElement>('[role="tab"]').forEach((button) => {
      button.addEventListener("click", switchTab);
    });
  }

  export { initTabListeners };
