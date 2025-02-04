import { useState } from "react";
import "./App.css";
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <p className="text-center text-2xl font-bold py-10"> This is a test app on Props in React with Tailwind Css </p>
        <Card name="Wedding Ring" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZsiqPruws4cW5133IIF2GUesLWhbzjiHJg&s" price="2000$" />
        <Card name="Stylish Men Watch" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJECqVDrcTn4YR0l-uNGrxbJAKUlbWjdc-A&s" price="150.00$"/>
        <Card name="Silver luxury necklace"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-il4qLTN71WcUENyXuKfdhcP7wnY9hg_eXQ&s" price="700$"/>
    
    </>
  );
}

export default App;
