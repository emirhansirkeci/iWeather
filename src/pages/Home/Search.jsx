import "./index.css";

import { useState, useRef } from "react";
import useRequest from "@hooks/useRequest";
import Input from "./Input";
import Suggestions from "./Suggestions";

export default function Search() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const [sendRequest, loading] = useRequest();

  return (
    <>
      <Input
        setValue={setValue}
        sendRequest={sendRequest}
        setShowSuggestions={setShowSuggestions}
        loading={loading}
        inputRef={inputRef}
      />

      <Suggestions
        setValue={setValue}
        sendRequest={sendRequest}
        value={value}
        loading={loading}
        inputRef={inputRef}
        showSuggestions={showSuggestions}
      />
    </>
  );
}
