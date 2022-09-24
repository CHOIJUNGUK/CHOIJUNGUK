import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from 'react';
function App() {

  const [fname,setfName]=useState('');
  console.log(fname, 'fgfh');
  const [lname,setlName]=useState('');
  console.log(lname, 'm');
  const [avatar,setavatar]=useState('');
  console.log(avatar, "l");
  
  axios({
    method:"get",
    url:"https://www.melivecode.com/api/users/1",
    responseType:"type"
})
.then(function(response){
  setfName(response.data.user.fname)
  setlName(response.data.user.lname)
  setavatar(response.data.user.avatar)
  console.log('----------------------');

  // console.log(response);
  // console.log(response.data);
  console.log(response.data.user.fname);
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
        <img src={avatar}  className="App-logo" alt="logo" />
        <p>
          Edit <code></code>  {fname} {lname} 
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
