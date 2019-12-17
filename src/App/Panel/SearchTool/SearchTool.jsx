// @flow

import React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

import style from './SearchTool.css';

type State = {
}
type Props = {
}

class SearchTool extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <SearchBox
        className={style['search-box']}
        placeholder="Search"
        onSearch={(newValue) => console.log(`value is ${newValue}`)}
        onFocus={() => console.log('onFocus called')}
        onBlur={() => console.log('onBlur called')}
        onChange={() => console.log('onChange called')}
      />
    );
  }
}

export default SearchTool;
