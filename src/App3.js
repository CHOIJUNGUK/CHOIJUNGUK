import {useState, useEffect } from 'react';

function App3() {
  // const time = new Date();
  // const [time, setTime] = useState(new Date());
  const [time, setTime] = useState(0);

  // useEffect(() => {
  //   // let num = time+1;
  //   setTime(time+1);
  // })


  // 1증가하는 hook 방식
  // useEffect(function () {
  //   setTime(time+1);
  // })

//  useEffect(test1());

// useEffect =  useEffectFunc();

// useEffect(() => {
  //   let num = time++;
  //   setTime(num);
  // const id = setInterval(() => {
    //   setTime(new Date());
    // }, 1000);
  //   // return (() => clearInterval(id))


  // }, []);
  
  
  let button1_click = ()=> {
    
    // useEffect(()=>{
      setTime(time+1);
    // })
  
    alert("버튼누름")
  
  };

  // function () {
  //   console.log('버튼누름');
  // }
  
  return (
    // <div>
    //   <h1>Clock</h1>
    //   <span>{time.toLocaleTimeString()}</span>
    // </div>
    <div>
      <button onClick={button1_click}>버튼2 </button>
      {/* <script>
        button1_click() => {
          console.log("버튼누름");
          // alert('알림');
          // 'ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ';
        }
      </script> */}
      <h1>1증가 </h1>
      {time}
    </div>
  )
}

export default App3;