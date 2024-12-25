import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, className, label, key } = config;
  return (
    <button className={className} style={{background: background}} onClick={() => selectNextBackground({background: background})} data-testid={key}>
      {label}
    </button>
  )
}
export default ColourSelector;
