function sendRequest() {
    const reqUrl = document.getElementById("req-url") as HTMLInputElement;
    const reqMethod = document.querySelector<HTMLElement>(".http-method .chosen")?.textContent || "GET";
    const reqBodyType = document.querySelector<HTMLElement>(".req-body-type .chosen")?.textContent;

    let reqBody: BodyInit | null;

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
    }

    fetch(reqUrl.value, { method: reqMethod, body: reqBody })
      .then((response) => response.json())
      .then((data) => {
        const resBody = document.getElementById("response");
        if (resBody) resBody.innerHTML = JSON.stringify(data, null, 2);
      })
      .catch((error) => console.error("Error:", error));
  }

  function initFormListener() {
    document.getElementById("send")?.addEventListener("click", sendRequest);
  }

  export { initFormListener };
