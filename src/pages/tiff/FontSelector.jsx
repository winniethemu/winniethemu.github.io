import * as React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import { API_BASE_URL, API_KEY } from './const';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import styles from './FontSelector.module.css';

export default function FontSelector({
  className,
  defaultValue,
  handleSelect,
  label,
}) {
  const [loading, setLoading] = React.useState(false);
  const [fonts, setFonts] = React.useState([]);

  return (
    <span className={`${styles.wrapper} ${className}`}>
      <label>{label}</label>
      <AsyncTypeahead
        id="fontSearch"
        isLoading={loading}
        defaultInputValue={defaultValue}
        labelKey="family"
        onSearch={(query) => {
          setLoading(true);
          fetch(`${API_BASE_URL}?key=${API_KEY}`)
            .then(resp => resp.json())
            .then(json => {
              setLoading(false);
              setFonts(json.items);
            });
        }}
        onChange={(selected) => {
          const font = selected[0]?.family || '';
          handleSelect(font);
        }}
        options={fonts}
        useCache={true}
      />
    </span>
  );
}