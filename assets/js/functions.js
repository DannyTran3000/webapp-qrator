const toggleActiveFormat = (activeID) => {
  const activePanel = document.querySelector(
    `.${CLASSNAMES.formatPanel}.${CLASSNAMES.active}`
  );
  if (activePanel) activePanel.classList.remove(CLASSNAMES.active);

  const newActivePanel = document.querySelector(
    `#${activeID}.${CLASSNAMES.formatPanel}`
  );
  if (newActivePanel) newActivePanel.classList.add(CLASSNAMES.active);
};

const handleNavigation = (fID) => {
  if (fID === $currentFormat) {
    console.log(
      `Warning: The target format ID must be different from the current format ID (${$currentFormat})!`
    );
    return;
  }

  const findFormat = QR_FORMATS.find((item) => item.id === fID);

  if (!findFormat) {
    console.log(
      `Error: This application does not support this format (${fID})!!!`
    );
    return;
  }

  $currentFormat = fID;

  toggleActiveFormat(fID);
};

const getHTMLInput = (label, opt) => {
  const name = opt?.name || 'text'
  const type = opt?.type || 'text'
  const placeholder = opt?.placeholder || ''

  return `<div class="input-group">
            <label for="${name}" class="input-group__label">${label}</label>
            <input type="${type}" name="${name}" placeholder="${placeholder}" />
          </div>`;
};

const getHTMLFormatPanel = (f, opt) => {
  const formatType = f?.id || "text";
  const formatName = f?.name || "Text";
  const formatIcon = SVG_LIST[formatType] || SVG_LIST["text"];
  const isActive = !!opt?.active;
  const className = `${CLASSNAMES.formatPanel} ${
    isActive ? CLASSNAMES.active : ""
  }`;

  return `<div id="${formatType}" class="${className}">
            ${formatIcon}
            <span>${formatName}</span>
          </div>`;
};

const renderNavigation = (fID = "text") => {
  const nav = document.querySelector("#navigation");

  if (!nav) {
    console.log('Error: Cannot find [id="navigation"] element!!!');
    return;
  }

  let html = "";
  QR_FORMATS.forEach((item) => {
    const isActive = item?.id === fID;

    const panelHTML = getHTMLFormatPanel(item, { active: isActive });
    html += `<li class="navigation__menu-item">${panelHTML}</li>`;
  });

  nav.innerHTML = html;

  const panels = document.querySelectorAll(`.${CLASSNAMES.formatPanel}`);
  panels.forEach((item) => {
    item.addEventListener(
      "click",
      () => !!item.id && toggleActiveFormat(item.id)
    );
  });
};
