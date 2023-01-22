import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

// CONSTANTS FOR ACTIONS
const INCREMENT_COUNT = "Increment";
const DECREMENT_COUNT = "Decrement";
const UPDATE_COUNT = "UpdateCount";
const SET_VALUE_TO_ADD = "SetValueToAdd";


// lOGIC FOR REDUCER
const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case UPDATE_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
        valueToAdd : 0
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    default:
      // !We can also throw error if action type is ignored
      return state;
  }
};


function CounterPage({ intialCount }) {
  // const [count, setCount] = useState(intialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: intialCount,
    valueToAdd: 0,
  });
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
    // setCount(count + 1);
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
    // setCount(count - 1);
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // setValueToAdd(value);
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof state.count, typeof state.valueToAdd);
    dispatch({
      type: UPDATE_COUNT,
      payload: state.valueToAdd,
    });
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Counter : {state.count} </h1>
      <div className="flex flex-row">
        <Button onClick={increment}> Increment</Button>
        <Button onClick={decrement}> Decrement</Button>
      </div>
      <form>
        <label>Add a lot</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={state.valueToAdd || ""}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <Button onClick={handleSubmit}>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
