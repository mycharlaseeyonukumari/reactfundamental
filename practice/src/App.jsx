  import {useState } from "react"
  
  function App() {
  

  const handleClick = (name) => {
    console.log("you clicked the button")
    alert("Hello" + " " + name)
  }
 // const handleChange = (event) => {
    //console.log(event.target.name)
    //console.log(event.target.value)


  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${formData.email}\npassWord: ${formData.passWord}\nyou are logged in`)

  }
  const handleemail=(event)=>{
    setemail(event.target.value)
  }
  const handlepassWord=(event)=>{
    setpassWord(event.target.value)
  }

  const [count,setCount]=useState(0)
  const [email,setemail]=useState(" ")
  const [passWord,setpassWord]=useState(" ")
  const [formData,setFormData]=useState({
    email:" ",
    passWord:""
 }) 
  const handleChange=(event)=>{
    setFormData({
      ...FormData,
      [event.target.name]:event.target.value
    })

  }

  const handleIncrement=()=>{
    setCount((prevCount)=>prevCount+1)
    console.log(count)
  }

  return (

    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="type your email" onChange={handleChange} />
      <input type="text" name="password" placeholder="type your password" onChange={handleChange} />
      <button type="submit">login</button>

    </form>
    <p> {count}</p>
    <button onClick={handleIncrement}>Increment</button>
</div >
)
}

export default App;