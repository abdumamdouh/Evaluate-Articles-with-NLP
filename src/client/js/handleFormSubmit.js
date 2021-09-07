const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log("hello");
  const URL = document.getElementById("url-text");
  console.log(URL);
};

export default handleFormSubmit;
