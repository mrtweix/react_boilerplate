import React, { memo, Fragment, forwardRef } from "react";

const Radio = forwardRef((props, ref) => {
  const {
    labelClass,
    labelText,
    name,
    className,
    options = [],
    error,
    defaultValue,
    disabled,
    handleChange = () => {},
    errorClass,
  } = props;
  return (
    <Fragment>
      <label htmlFor={labelText} className={labelClass}>
        {labelText}
      </label>
      {options?.map((option) => {
        return (
          <label
            key={option.label}
            htmlFor={`${name}-${option.value}`}
            className={className}
            onClick={() => handleChange(option)}
          >
            <input
              {...props}
              type="radio"
              name={name}
              id={labelText}
              ref={ref}
              value={defaultValue}
              checked={defaultValue === option.value}
              defaultChecked={defaultValue === option.value}
              onChange={() => handleChange(option)}
              disabled={disabled}
            />
            {option.label}
          </label>
        );
      })}
      {error && <p className={`mt-1 text-danger ${errorClass}`}>{error}</p>}
    </Fragment>
  );
});

export default memo(Radio);
