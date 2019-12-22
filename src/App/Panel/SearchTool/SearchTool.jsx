// @flow

import React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

import style from './SearchTool.css';

type State = {
}
type Props = {
  searchText: string;
  onSearch: (text: string) => void;
}

class SearchTool extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { searchText, onSearch } = this.props;
    return (
      <SearchBox
        className={style['search-box']}
        placeholder="Search"
        onSearch={(newValue) => onSearch(newValue)}
        onFocus={() => console.log('onFocus called')}
        onBlur={(e) => onSearch(e.target.value)}
        onChange={() => console.log('onChange called')}
        value={searchText}
      />
    );
  }
}

export default SearchTool;
