import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="Rocketseat" nickname="@rocketseat" />,
            <FollowSuggestion name="Gothic Graves" nickname="@gothicgraves" />,
            <FollowSuggestion name="GitHub" nickname="@github" />,
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[<h1>?XD</h1>, <h1>?XD</h1>, <h1>?XD</h1>, <h1>?XD</h1>]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
