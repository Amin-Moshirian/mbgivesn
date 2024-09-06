import { useState } from "react";
import i144 from "./img/144.jpg";
import i240 from "./img/240.jpg";
import i720 from "./img/720.jpg";
import ishiva from "./img/HD.jpg";

export function SelectDefault() {
  const [select, setSelect] = useState("");

  return (
    <div>
      <form
        class="max-w-sm mx-auto"
        onChange={(e) => {
          setSelect(e.target.value);
        }}
      >
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose :)</option>
          <option value="144">144</option>
          <option value="240">240</option>
          <option value="720">720</option>
          <option value="shiva">1024 HD</option>
        </select>
      </form>

      {select == "144" ? (
        <img src={i144} className="w-3/4 m-auto mt-10"></img>
      ) : select == "240" ? (
        <img src={i240} className="w-3/4 m-auto mt-10"></img>
      ) : select == "720" ? (
        <img src={i720} className="w-3/4 m-auto mt-10"></img>
      ) : select == "shiva" ? (
        <img src={ishiva} className="w-3/4 m-auto mt-10"></img>
      ) : select == "choose" ? (
        <img src={ishiva} className="w-3/4 m-auto mt-10"></img>
      ) : (
        select
      )}
    </div>
  );
}

export default SelectDefault;
