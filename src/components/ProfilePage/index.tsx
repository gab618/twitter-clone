import React from 'react';
import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Ezreal Blindado</h1>
        <h2>@ezrealblindado</h2>

        <p>
          Olá eu sou o Gabriel, mais conhecido como{' '}
          <a href="https://github.com/gab618">@ezrealblindado</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 10 de julho de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>825</strong>
          </span>
          <span>
            <strong>3336 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
