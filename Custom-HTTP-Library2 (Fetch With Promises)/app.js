const http = new EaseHTTP;

// get
// const users = http.get("http://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


//post 
// User data
const data = {
  name: "Vlad",
  username: "PRO",
  email: "StarkPso@april.biz"
};
// Create User
// http.post("http://jsonplaceholder.typicode.com/users", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


//Updata POST
// http.put("http://jsonplaceholder.typicode.com/users/2", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


http.delete("http://jsonplaceholder.typicode.com/users/2", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));