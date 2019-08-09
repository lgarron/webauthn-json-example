import {get, create, supported} from "@github/webauthn-json"

window.addEventListener("load", function() {
  const supportedInfo = document.createElement("div");
  supportedInfo.textContent = `Supported: ${supported()}`
  document.body.appendChild(supportedInfo);

  const createButton = document.createElement("button");
  createButton.textContent = "create"
  createButton.addEventListener("click", function() {
    create({
      publicKey: {
        challenge: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        rp: {
          name: "Localhost, Inc."
        },
        user: {
          id: "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII",
          name: "Hi there",
          displayName: "Test User",
        },
        pubKeyCredParams: [{
          type: "public-key",
          alg: -7
        }]
      }
    });
  })
  document.body.appendChild(createButton);

  const getButton = document.createElement("button");
  getButton.textContent = "get"
  getButton.addEventListener("click", function() {
    get({
      "publicKey": {
        "timeout": 30000,
        "challenge": "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
        "allowCredentials": [{
          "type": "public-key",
          "id": "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"
        }]
      }
    });
  })
  document.body.appendChild(getButton);
})
