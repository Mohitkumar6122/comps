import Button from "../components/Button";
import useCounter from "../hooks/use-counter";


function CounterPage({ intialCount }) {
  const [count, updateCount] = useCounter(intialCount) ;

  return (
    <div>
      <h1>Counter : {count} </h1>
      <Button onClick={updateCount}> Increment</Button>
    </div>
  );
}

export default CounterPage;
