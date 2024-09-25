let currentType = "text";

const defaultQR = `<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="290px" height="290px"
                  viewBox="-260 40 520 520" style="enable-background:new -260 40 520 520;width: 100%;"
                  xml:space="preserve">
                  <g>
                    <polygon id="XMLID_14_" class="st0"
                      points="100,360 60,360 60,320 20.1,320 20.1,440.1 60,440.1 60,480 100,480 	"></polygon>
                    <rect id="XMLID_13_" x="100" y="480" class="st0" width="40" height="40"></rect>
                    <rect id="XMLID_12_" x="179.9" y="480" class="st0" width="40" height="40"></rect>
                    <polygon id="XMLID_11_" class="st0"
                      points="220,320 179.9,320 179.9,360 139.9,360 139.9,480 179.9,480 179.9,440.1 220,440.1">
                    </polygon>
                    <rect id="XMLID_10_" x="20.1" y="480" class="st0" width="40" height="40"></rect>
                    <g>
                      <rect id="XMLID_9_" x="-139.9" y="159.9" class="st0" width="40" height="40"></rect>
                      <path class="st0" d="M-220,80v200h199.9V80H-220z M-60,239.9h-119.9V120h120v119.9H-60z"></path>
                    </g>
                    <g>
                      <rect id="XMLID_6_" x="100" y="159.9" class="st0" width="40" height="40"></rect>
                      <path class="st0" d="M20.1,80v200H220V80H20.1z M179.9,239.9H60V120h120v119.9H179.9z"></path>
                    </g>
                    <g>
                      <rect id="XMLID_3_" x="-139.9" y="399.9" class="st0" width="40" height="40"></rect>
                      <path class="st0" d="M-220,320v200h199.9V320H-220z M-60,480h-119.9V360h120V480H-60z"></path>
                    </g>
                  </g>
                </svg>`;

const submit = () => {
  const type = "text";
  const str = getString(type);

  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${str}`;

  const frame = document.querySelector(".qr__frame");
  if (frame)
    frame.innerHTML = str ? `<img src="${qr}" alt="${str}" />` : defaultQR;
};

const getString = (type) => {
  switch (type) {
    case "text":
      return getText();

    default:
      console.log("type not found");
  }
};

const getText = () => {
  const textInput = document.querySelector('input[name="text"]');
  return textInput?.value || "";
};

const changeType = (type) => {
  currentType = type;

  const activeForm = document.querySelector(".form.--show");
  if (activeForm) activeForm.classList.remove("--show");
  const activeFormatPanel = document.querySelector(".format-panel.--active");
  if (activeFormatPanel) activeFormatPanel.classList.remove("--active");

  const newForm = document.querySelector(`.form#${type}-form`);
  if (newForm) newForm.classList.add("--show");
  const newFormatPanel = document.querySelector(`.format-panel[data-format="${type}"]`);
  if (newFormatPanel) newFormatPanel.classList.add("--active");
};
