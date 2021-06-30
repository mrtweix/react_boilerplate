import React, { forwardRef, Fragment } from "react";

const Checkbox = forwardRef((props, ref) => {
  const {
    name,
    error,
    value,
    checked,
    className,
    labelText,
    errorClass,
    labelClassName,
    handleChange = () => {},
  } = props;
  return (
    <Fragment>
      <input
        {...props}
        ref={ref}
        id={name}
        name={name}
        value={value}
        type="checkbox"
        checked={checked}
        className={className}
        onChange={(e) => handleChange(e)}
      />
      <label className={labelClassName} htmlFor={labelText}>
        <span>{labelText}</span>
      </label>
      {error && <p className={`mt-1 text-danger ${errorClass}`}>{error}</p>}
    </Fragment>
  );
});

export default Checkbox;
