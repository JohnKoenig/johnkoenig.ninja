fetch("https://34vp8z8p64.execute-api.us-east-2.amazonaws.com/default/johnkoenig_ninja_counter")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));
