import handleFormSubmit from "./js/handleFormSubmit";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./images/logo.png";
import "./images/robot.gif";
import "./images/favicon.png";

document
  .getElementById("main-form")
  .addEventListener("submit", (e) => handleFormSubmit(e));
