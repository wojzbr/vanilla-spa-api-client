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


// SEND button

document.getElementById("send")?.addEventListener("click", () => {
  const reqUrl = document.getElementById("req-url") as HTMLInputElement;
  const reqMethod = document.querySelector<HTMLElement>(".http-method .chosen")?.textContent || "GET";

  // const reqHeaders = document.getElementById("req-headers") as HTMLTextAreaElement;
  // const reqHeadersValue = reqHeaders.value;
  // const reqHeadersJSON = JSON.parse(reqHeadersValue);

  const reqBodyType = document.querySelector<HTMLElement>(".req-body-type .chosen")?.textContent;

  // const reqBody = document.getElementById("req-body") as HTMLTextAreaElement;
  // const reqBodyValue = reqBody.value;
  // const reqBodyJSON = reqBodyType === "JSON" ? JSON.parse(reqBodyValue) : reqBodyValue;

  let reqBody;

  switch (reqBodyType) {
    case "NONE":
      reqBody = null;
      break;
    case "JSON":
      const reqBodyJSON = document.getElementById("req-body") as HTMLTextAreaElement;
      reqBody = JSON.stringify(JSON.parse(reqBodyJSON.value));
      break;
    case "RAW":
      const reqBodyRAW = document.getElementById("req-body") as HTMLTextAreaElement;
      reqBody = reqBodyRAW.value;
      break;
    case "FORM-DATA":
      const reqBodyFormData = document.getElementById("req-body") as HTMLFormElement;
      reqBody = new FormData(reqBodyFormData);
      break;
    default:
      reqBody = null;
      break;
  }

  console.log(reqBody)

  fetch(reqUrl.value, {
    method: reqMethod,
    // headers: reqHeadersJSON,
    body: reqBody,
  })
    .then((response) => response.json())
    .then((data) => {
      // const resBody = document.getElementById("res-body") as HTMLTextAreaElement;
      const resBody = document.getElementById("response");
      if (resBody) resBody.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});