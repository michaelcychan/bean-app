import { post } from "../../Backend/routes/drinker.route";

export const signUpUser = (firstName, lastName, email, password) => {
  return fetch('http://localhost:5050/new-drinker', {
    method: post,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password
    })
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};
