import { useSelector } from 'react-redux';
import { RootState } from 'redux/types';
import { Header, BackButton, GameName } from 'pages/Game/GameHeader/styles';
import { ReactComponent as ArrowLeft } from 'assets/arrow-left.svg';

function GameHeader() {
  const gameName = useSelector(
    (state: RootState) => state.harbor.gameSpecification.name
  );

  return (
    <Header>
      <BackButton to="/games" relative="path">
        <ArrowLeft /> Store
      </BackButton>
      <GameName>{gameName}</GameName>
    </Header>
  );
}

export default GameHeader;
