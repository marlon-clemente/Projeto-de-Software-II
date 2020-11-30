import React from 'react';
import Button from '../Button';

import { useAlert } from 'react-alert';

import { ContainerRecommendation } from './styles';

interface RecommendationInterface {
  noneRecommendation ?: boolean,
  numberRecommendation ?: number
}

const Recommendation: React.FC<RecommendationInterface> = ({ noneRecommendation, numberRecommendation }) => {
  const alert = useAlert();
  if (noneRecommendation){
    return (<>
      <ContainerRecommendation>
        <div className="none-recommendation">
          <span>Não há indicações para essa escola no momento</span>
          <strong>Seja o primeiro a indica-la</strong>
        </div>
      </ContainerRecommendation>
      <Button gradient onClick={ ()=> {alert.show('Em futuras atualizações')}}>
        Realizar indicação
      </Button>
    </>)
  }

  return <div />;
}

export default Recommendation;