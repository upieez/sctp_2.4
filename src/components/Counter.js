import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [countHistory, setCountHistory] = useState([]);
  const [name, setName] = useState("Banana");

  //   const name = "Banana";
  const price = 2.99;

  const handlePlus = (e) => {
    e.stopPropagation();
    const newCount = count + 1;
    setCount(newCount);
    // setCountHistory([...countHistory, newCount]);
  };

  const handleMinus = (e) => {
    console.log("event handleMinus", e);
    setCount(count - 1);
    if (count < 5) {
      setDiscount(0);
    }
  };

  // ACTIVITY USING HIGHER ORDER FUNCTION

  /**
   * 1. Using the .map function, render all the previous number separated with commas
   * 2. Using the .filter function, render all even numbers
   * 3. Using the .reduce function, render the sum of all the numbers
   */

  function countHistoryCommas(currCount, index) {
    if (index === 0) {
      return <span>{currCount}</span>;
    }
    return <span>,{currCount}</span>;
  }

  function filterEvenNumbers(currCount) {
    return currCount % 2 === 0;
  }

  function calculateSum(acc, currCount) {
    return acc + currCount;
  }

  function handleInputChange(value) {
    setName(value);
  }

  function handleResetCount() {
    setCount(0);
  }

  function handleResetInput() {
    setName("");
  }

  return (
    <div>
      <h2>{name}</h2>
      <Button label="-" onClick={handleMinus} />
      <span>{count}</span>
      <Button label="+" onClick={handlePlus} />
      <h2>{`$ ${price}`} each</h2>
      <h3>{`Discount: ${discount}%`}</h3>
      {/* <p>Count History: {countHistory.map(countHistoryCommas)} </p>
      <p>Even Numbers: {countHistory.filter(filterEvenNumbers)}</p>
      <p>Sum of Numbers: {countHistory.reduce(calculateSum, 0)} </p> */}
      {/** another button to reset the count to zero */}
      <Button label="0" onClick={handleResetCount} />
      <Input value={name} label="Product" onChange={handleInputChange} />
      <Button label="X" onClick={handleResetInput} />
      {/** another button to clear the text of the input */}
    </div>
  );
}
export default Counter;
