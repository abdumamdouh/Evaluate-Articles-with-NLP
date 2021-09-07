import handleFormSubmit from "./js/handleFormSubmit";

/**
 * TODO: Get Value of the input for URL
 *  TODO: Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */

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

console.log("hhi");
