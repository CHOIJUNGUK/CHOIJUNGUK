import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {

  let fname = '';
  axios({
    method:"get",
    url:"https://www.melivecode.com/api/users/1",
    responseType:"type"
})
.then(function(response){
  console.log('----------------------');
  // console.log(response);
  // console.log(response.data);
  console.log(response.data.user.fname);
  fname = response.data.user.fname;
  console.log(response.data.user.lname);
  console.log(response.data.user.avatar);
})

  

  
  
  
  
//   function searchApi() {
//     const url = "https://jsonplaceholder.typicode.com/photos";
//     axios.get(url)
//     .then(function(response) {
//         setPhotos(response.data);
//         console.log("성공");
//     })
//     .catch(function(error) {
//         console.log("실패");
//     })
// }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code></code> and save to reload. {fname}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }

export default App;
