/* eslint-disable react/button-has-type */
import './Button.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, clickHandler, ...otherProps }) => (
  <button
    className={`button ${BUTTON_TYPE_CLASSES[buttonType]}`}
    onClick={clickHandler}
    {...otherProps}>
    {children}
  </button>
);

export default Button;
