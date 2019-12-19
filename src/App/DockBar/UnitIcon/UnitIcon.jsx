import React from 'react';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

const iconClass = mergeStyles({
  fontSize: 24,
  height: 24,
  width: 24,
  margin: 12,
  color: '#ADADAD',
  selectors: {
    '&:hover': { color: '#FFFFFF' },
  },
});

const UnitIcon: React.FunctionComponent = (props) => {
  const { iconName, onClick } = props;
  return (
    <FontIcon iconName={iconName} className={iconClass} onClick={onClick} />
  );
};


export default UnitIcon;
