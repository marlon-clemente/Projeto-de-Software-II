import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import Button from '../Button';

import { ContainerRecommendation } from './styles';

interface RecommendationInterface {
  noneRecommendation ?: boolean,
  numberRecommendation ?: number
}

const Recommendation: React.FC<RecommendationInterface> = ({ noneRecommendation, numberRecommendation }) => {
  const alert = useAlert();
  const [isNewRecommendation, setIsNewRecommendation] = useState(false);

  const handleNewRecommendation = () =>{
    setIsNewRecommendation(!isNewRecommendation)
  }

  if (noneRecommendation && !isNewRecommendation){
    return (<>
      <ContainerRecommendation>
        <div className="none-recommendation">
          <span>Não há indicações para essa escola no momento</span>
          <strong>Seja o primeiro a indica-la</strong>
        </div>
      </ContainerRecommendation>
      <Button gradient onClick={handleNewRecommendation}>
        Realizar indicação
      </Button>
    </>)
  }

  return (
    <>
      { isNewRecommendation && (<>
      <ContainerRecommendation>
        <div className="new-box-recommendation">
          <strong>Nova indicação</strong>
          <span>Você deve usar uma das seguintes
            contas para realizar uma indicação</span>
        </div>
      </ContainerRecommendation>  
      <Button google onClick={()=>{ alert.show('Em futuras atualizações') }}>Indicar usando o Google</Button>
      <Button facebook onClick={()=>{ alert.show('Em futuras atualizações') }}>Indicar usando o Facebook</Button>
      </>)}
    </>
  );
}

export default Recommendation;