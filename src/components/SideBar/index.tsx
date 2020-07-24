import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

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
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Rocketseat" nickname="@rocketseat" />,
              <FollowSuggestion
                name="Gothic Graves"
                nickname="@gothicgraves"
              />,
              <FollowSuggestion name="GitHub" nickname="@github" />,
            ]}
          />
          <List
            title="Novidades"
            elements={[
              <News newsText="ReactJs" />,
              <News newsText="Node.js" />,
              <News newsText="TypeScript" />,
              <News newsText="Ezreal top tank" />,
            ]}
          />
          <List
            title="Novidades"
            elements={[
              <News newsText="ReactJs" />,
              <News newsText="Node.js" />,
              <News newsText="TypeScript" />,
              <News newsText="Ezreal top tank" />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
