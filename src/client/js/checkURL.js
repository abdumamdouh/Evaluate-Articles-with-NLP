const checkURL = (inputURL) => {
  console.log("::: Running checkURL :::", inputURL);
  // URL regex pattern
  let URLpat = new RegExp(/^((?:https?:\/\/)?[^.\/]+(?:\.[^.\/]+)+(?:\/.*)?)$/);
  console.log(URLpat.test(inputURL));
  // RegExp.test returns a boolean
  return URLpat.test(inputURL);
};

export default checkURL;
