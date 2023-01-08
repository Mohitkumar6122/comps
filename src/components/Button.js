import React from "react";
import className from 'classnames';
function Button({
  children,
  outline,
  rounded,
  primary,
  secondary,
  success,
  warning,
  danger,
  // props related to actual button component
  ...rest
}) {

  //* Using Tailwind css in the project thats why using logic for classname styling
  const classes = className(rest.className, "px-3 py-1.5 border flex items-center mb-3", {
    // key : value (if false then ignore this key in the styling)
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-yellow-500 bg-yellow-400 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    'rounded-full': rounded,
    // later classname wil override the earlier css property
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger

  });

  //* {...rest} passes all button related props directly 
  //* like mousehover, onclick, etc
  return <button className={classes} {...rest} >{children}</button>;
}

/* LOGIC IMPLEMENTED IN BELOW PROPTYPES CHECK
 if (primary && secondary) {
    throw new Error(
      "Only one of the primary and secondary prop should be passed to Button Component"
    );
  }
*/
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    
    if (count > 1) {
      throw new Error(
        "Only one of the primary, secondary, success, warning, danger can be true in  Button Component"
      );
    }
  },
};

export default Button;
