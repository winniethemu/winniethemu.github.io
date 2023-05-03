import * as React from 'react';

import styles from './LabelledField.module.css';

export default function LabelledField({
  className,
  handleOnChange,
  type,
  label,
  value,
}) {
  return (
    <span className={`${styles.wrapper} ${className}`}>
      <label>{label}</label>
      <input
        onChange={handleOnChange}
        type={type}
        value={value}
      />
    </span>
  );
}