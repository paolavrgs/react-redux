import React from 'react';
import './index.scss';

const seasonConfig = {
  summer: {
    text: 'Let\'s go to the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'It\'s chilly outside',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const { text, iconName } = seasonConfig[season]

  return (
    <div className={`box ${season}`}>
      <i className={ `icon massive ${iconName}` }/>
      <h1>{ text }</h1>
    </div>
  )
}

export default SeasonDisplay;