import checkURL from "./checkURL";

async function handleFormSubmit(e) {
  e.preventDefault();
  // get the url input node

  let submitBtnNode = document.getElementById("submitBtn");
  let loggerNode = document.getElementById("loggerSection");

  const urlInputElment = document.getElementById("url-text");
  const URL = urlInputElment.value;

  console.log(URL);
  //reset the input filed after submitting
  urlInputElment.value = "";
  // URL check
  if (checkURL(URL)) {
    try {
      loggerNode.style.visibility = "visible";
      submitBtnNode.disabled = true;
      loggerNode.innerText = "Working...";

      // fetech request to the backend
      const fetchAPI = await fetch(`http://localhost:8081/analysis/${URL}`);
      const APIResponse = await fetchAPI.json();
      console.log(APIResponse);
      // add the results into the dom nodes
      document.getElementById("agreement").innerHTML =
        APIResponse.agreement.toLowerCase();
      document.getElementById("subjectivity").innerHTML =
        APIResponse.subjectivity.toLowerCase();
      document.getElementById("confidence").innerHTML = APIResponse.confidence;
      document.getElementById("irony").innerHTML =
        APIResponse.irony.toLowerCase();

      loggerNode.style.visibility = "hidden";
      document.getElementById("sent-table").style.visibility = "visible";
      submitBtnNode.disabled = false;
    } catch (err) {
      submitBtnNode.disabled = false;
      // console.log(err.message);
      loggerNode.style.visibility = "visible";
      loggerNode.innerText = "Error...";
    }
  } else {
    alert("Invalid URL, please make sure you are entering a valid URL.");
    loggerNode.innerText =
      "Invalid URL, please try a working URL, ex: https://flaviocopes.com/npm-peer-dependencies/";
  }
}

export default handleFormSubmit;
