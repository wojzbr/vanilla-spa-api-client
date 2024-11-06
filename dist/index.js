"use strict";
var _a;
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
const customDropdowns = document.querySelectorAll(".custom-dropdown");
customDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("expanded");
    });
});
const httpMethodDropdownItems = document.querySelectorAll(".http-method .dropdown-list .dropdown-item");
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
const reqBodyTypeDropdownItems = document.querySelectorAll(".req-body-type .dropdown-list .dropdown-item");
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
// SEND button
(_a = document.getElementById("send")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    var _a, _b;
    const reqUrl = document.getElementById("req-url");
    const reqMethod = ((_a = document.querySelector(".http-method .chosen")) === null || _a === void 0 ? void 0 : _a.textContent) || "GET";
    // const reqHeaders = document.getElementById("req-headers") as HTMLTextAreaElement;
    // const reqHeadersValue = reqHeaders.value;
    // const reqHeadersJSON = JSON.parse(reqHeadersValue);
    const reqBodyType = (_b = document.querySelector(".req-body-type .chosen")) === null || _b === void 0 ? void 0 : _b.textContent;
    // const reqBody = document.getElementById("req-body") as HTMLTextAreaElement;
    // const reqBodyValue = reqBody.value;
    // const reqBodyJSON = reqBodyType === "JSON" ? JSON.parse(reqBodyValue) : reqBodyValue;
    let reqBody;
    switch (reqBodyType) {
        case "NONE":
            reqBody = null;
            break;
        case "JSON":
            const reqBodyJSON = document.getElementById("req-body");
            reqBody = JSON.stringify(JSON.parse(reqBodyJSON.value));
            break;
        case "RAW":
            const reqBodyRAW = document.getElementById("req-body");
            reqBody = reqBodyRAW.value;
            break;
        case "FORM-DATA":
            const reqBodyFormData = document.getElementById("req-body");
            reqBody = new FormData(reqBodyFormData);
            break;
        default:
            reqBody = null;
            break;
    }
    console.log(reqBody);
    fetch(reqUrl.value, {
        method: reqMethod,
        // headers: reqHeadersJSON,
        body: reqBody,
    })
        .then((response) => response.json())
        .then((data) => {
        // const resBody = document.getElementById("res-body") as HTMLTextAreaElement;
        const resBody = document.getElementById("response");
        if (resBody)
            resBody.innerHTML = JSON.stringify(data, null, 2);
    })
        .catch((error) => {
        console.error("Error:", error);
    });
});
