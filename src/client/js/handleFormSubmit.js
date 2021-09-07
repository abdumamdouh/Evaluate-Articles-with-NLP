import checkURL from "./checkURL";

const handleFormSubmit = async (e) => {
  e.preventDefault();
  // get the url input node
  const urlInputElment = document.getElementById("url-text");
  const URL = urlInputElment.value;
  console.log(URL);
  //reset the input filed after submitting
  urlInputElment.value = "";
  // URL check
  if (checkURL(URL)) {
    try {
      let submitBtnNode = document.getElementById("submitBtn");
      let loggerNode = document.getElementById("loggerSection");
      loggerNode.style.visibility = "visible";
      submitBtnNode.disabled = true;
      loggerNode.innerText = "Working...";

      // fetech request to the backend
      const fetchAPI = await fetch(`http://localhost:8081/scan/${formText}`);
      const APIResponse = await fetchAPI.json();
      // add the results into the dom nodes
      document.getElementById("agreement").innerHTML =
        APIResponse.agreement.toLowerCase();
      document.getElementById("subjectivity").innerHTML =
        APIResponse.subjectivity.toLowerCase();
      document.getElementById("confidence").innerHTML = APIResponse.confidence;
      document.getElementById("irony").innerHTML =
        APIResponse.irony.toLowerCase();

      loggerNode.style.visibility = "hidden";
      document.getElementById("sentiment-table").style.visibility = "visible";
      submitBtnNode.disabled = false;
    } catch (err) {
      submitBtnNode.disabled = false;
      console.log(err.message);
      logger.style.visibility = "visible";
      logger.innerText = "Error...";
    }
  } else {
    alert("Invalid URL, please make sure you are entering a valid URL.");
    logger.innerText =
      "Invalid URL, please try a working URL, ex: https://flaviocopes.com/npm-peer-dependencies/";
  }
};

export default handleFormSubmit;
