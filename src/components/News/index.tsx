import React from 'react';

import { Container } from './styles';

interface Props {
  newsText: string;
}

const News: React.FC<Props> = ({ newsText }) => {
  return (
    <Container>
      <span>Assuntos do momento no Brasil</span>
      <strong>{newsText}</strong>
    </Container>
  );
};

export default News;
