import React, { useEffect, useRef, useState } from "react";
import "./Input.css";
import SearchIcon from "@material-ui/icons/Search";

const Input = ({ placeholder, search, contact, ...props }) => {
  const [hasText, setHasText] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (props.value.length > 0) {
      setHasText(true);
    } else {
      setHasText(false);
    }
  }, [props.value]);

  return (
    <div
      className={`InputFormContainer ${
        search
          ? "InputFormContainer__search"
          : contact
          ? "InputFormContainer__contact"
          : ""
      }`}
    >
      {search && (
        <p>
          <SearchIcon />
        </p>
      )}

      <input
        ref={inputRef}
        autoComplete="off"
        className={`InputForm__input ${hasText ? "hasText" : ""}`}
        {...props}
      />
      <label onClick={() => inputRef.current.focus()} htmlFor={props.id}>
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
