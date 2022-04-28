import './FormInput.scss';

const FormInput = ({ id, label, ...inputProps }) => (
  <div className="form-group">
    <input id={id} className="form-input" {...inputProps} />
    {label && (
      <label htmlFor={id} className={`${inputProps.value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
