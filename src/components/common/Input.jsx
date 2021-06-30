import React, { memo, Fragment, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const {
    labelClass,
    labelText,
    name,
    type = "text",
    className,
    error,
    value,
    defaultValue,
    placeholder,
    onChange = () => {},
    errorClass,
  } = props;
  return (
    <Fragment>
      <label htmlFor={name} className={labelClass}>
        {labelText}
      </label>
      <input
        {...props}
        id={name}
        ref={ref}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete="off"
        style={error && { border: "1px solid red" }}
      />
      {error && <p className={`mt-1 text-danger ${errorClass}`}>{error}</p>}
    </Fragment>
  );
});

export default memo(Input);
