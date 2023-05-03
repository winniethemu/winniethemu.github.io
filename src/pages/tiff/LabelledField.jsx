import * as React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import styles from './LabelledField.module.css';

export default function LabelledField({
  className,
  handleFont,
  label,
  options,
}) {
  return (
    <span className={`${styles.wrapper} ${className}`}>
      <label>{label}</label>
      <AsyncTypeahead
        id="fontSearch"
        labelKey="family"
        onSearch={(query) => {
          //TODO: load input font
        }}
        options={options}
      />
    </span>
  );
}