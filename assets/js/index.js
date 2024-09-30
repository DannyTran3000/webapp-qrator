// let currentType = "text";

// const submit = () => {
//   const type = "text";
//   const str = getString(type);

//   const qr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${str}`;

//   const frame = document.querySelector(".qr__frame");
//   if (frame)
//     frame.innerHTML = str ? `<img src="${qr}" alt="${str}" />` : defaultQR;
// };

// const getString = (type) => {
//   switch (type) {
//     case "text":
//       return getText();

//     default:
//       console.log("type not found");
//   }
// };

// const getText = () => {
//   const textInput = document.querySelector('input[name="text"]');
//   return textInput?.value || "";
// };

// const changeType = (type) => {
//   currentType = type;

//   const activeForm = document.querySelector(".form.--show");
//   if (activeForm) activeForm.classList.remove("--show");
//   const activeFormatPanel = document.querySelector(".format-panel.--active");
//   if (activeFormatPanel) activeFormatPanel.classList.remove("--active");

//   const newForm = document.querySelector(`.form#${type}-form`);
//   if (newForm) newForm.classList.add("--show");
//   const newFormatPanel = document.querySelector(
//     `.format-panel[data-format="${type}"]`
//   );
//   if (newFormatPanel) newFormatPanel.classList.add("--active");
// };

let $currentFormat = "text";

renderNavigation();
