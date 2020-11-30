import React from 'react';
import Button from '../Button';

import { ContainerRecommendation } from './styles';

interface RecommendationInterface {
  noneRecommendation ?: boolean,
  numberRecommendation ?: number
}

const Recommendation: React.FC<RecommendationInterface> = ({ noneRecommendation, numberRecommendation }) => {
  
  if (noneRecommendation){
    return (<>
      <ContainerRecommendation>
        <div className="none-recommendation">
          <span>Não há indicações para essa escola no momento</span>
          <strong>Seja o primeiro a indica-la</strong>
        </div>
      </ContainerRecommendation>
      <Button gradient>
        Realizar indicação
      </Button>
    </>)
  }

  return <div />;
}

export default Recommendation;