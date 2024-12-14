import Card from "./components/Card"
import posterImg from "./assets/card.jpg"
import pesbPosterImg from "./assets/esb-poster.jpg"
import rotjPosterImg from "./assets/rotj-poster.jpg"

function App() {
 
  return (
   <div className="app">
    <Card title = "Star Wars ( 1977 )" posterImg={posterImg} />
    <Card title = "Empire Stikes Back (1987)" posterImg={pesbPosterImg}/>
    <Card title = "Return of the Jedi (1993)"posterImg={rotjPosterImg} />

   </div>
  )
}

export default App
