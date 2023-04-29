import * as React from 'react';

import styles from './LabelledField.module.css';

export default function LabelledField({ type, label, value, className }) {
  return (
    <span className={`${styles.wrapper} ${className}`}>
      <label>{label}</label>
      <input type={type} value={value} />
    </span>
  );
}