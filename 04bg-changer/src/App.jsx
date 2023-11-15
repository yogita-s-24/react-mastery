import { useState } from "react"
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className="bg-black p-20 mx-auto rounded-lg mt-5 shadow-lg"
    style={{width:"500px"}}>


      <div className="duration-200 p-5 rounded-2xl main-container mt-5 mx-auto"
        style={{ backgroundColor: color }}>
        <h1 className="px-3 p-2 py-12 shadow-lg text-white text-center border rounded-2xl">BG-Changer</h1>
        <div className="fixed flex flex-wrap justify-center inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl mt-10 bg-white">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >Red</button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >Green</button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >Blue</button>
            <button
              onClick={() => setColor("grey")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "grey" }}
            >Grey</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App