function sendRequest() {
    var _a, _b;
    const reqUrl = document.getElementById("req-url");
    const reqMethod = ((_a = document.querySelector(".http-method .chosen")) === null || _a === void 0 ? void 0 : _a.textContent) || "GET";
    const reqBodyType = (_b = document.querySelector(".req-body-type .chosen")) === null || _b === void 0 ? void 0 : _b.textContent;
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
    }
    fetch(reqUrl.value, { method: reqMethod, body: reqBody })
        .then((response) => response.json())
        .then((data) => {
        const resBody = document.getElementById("response");
        if (resBody)
            resBody.innerHTML = JSON.stringify(data, null, 2);
    })
        .catch((error) => console.error("Error:", error));
}
function initFormListener() {
    var _a;
    (_a = document.getElementById("send")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", sendRequest);
}
export { initFormListener };
