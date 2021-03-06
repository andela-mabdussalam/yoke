import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputTemplate = ({ field, value, label, error, type, onChange,
  checkUserExists }) => (
    <div className={classnames('form-group', { 'has-error': error })}>
      <label className="control-label">{label}</label>
      <input
        onChange={onChange}
        onBlur={checkUserExists}
        value={value}
        type={type}
        name={field}
        className="form-control"
      />
    {error && <span className="help-block">{error}</span>}
    </div>
  );

InputTemplate.propTypes = {
  field: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func
};

InputTemplate.defaultProps = {
  type: 'text'
};

export default InputTemplate;
