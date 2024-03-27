import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  return <GenerateList />;
}

const GenerateList = () => {
  //KODUNUZ BURAYA GELECEK
  const [items, setItems] = useState([]);

  async function getActivity() {
    try {
      const response = await axios.get("https://www.boredapi.com/api/activity");
      const newItem = response.data;
      // Add the new activity to the existing list
      setItems((prevItem) => [...prevItem, newItem]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
  
      <div className="flex items-center flex-col mt-32 gap-4">
      <h1 className="font-bold text-2xl">Put an end to boredom with a single click.</h1><br/>
        <button
          onClick={getActivity}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Generate Activity
        </button>
      </div>
      <ul className="flex items-center flex-col mt-16 text-2xl gap-4 h-max">
        {items.map((item, key) => (
          <li id={key}>{item.activity}  <ExpandableListItem item={item} /></li>
        ))}
      </ul>
    </>
  );
};

const ExpandableListItem = ({ item }) => {
  // KODUNUZ BURAYA GELECEK
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "🔼️" : "🔽️"}
      </button>
      {isActive && (
        <div>
          <ul>
          <li>- type: {item.type}</li>
          <li>- participants: {item.participants} participants</li>
          <li>- price: {item.price}</li>
          <li>- accessibility: {item.accessibility}</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default App;
