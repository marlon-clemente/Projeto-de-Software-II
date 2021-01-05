import { auth, googleProvider } from "../../services/firebase";
import React, { useEffect, useState } from "react";

import Button from "../Button";
import usePeriod from "../../hooks/usePeriod";
import { ContainerRecommendation } from "./styles";
import { useAlert } from "react-alert";
import api from "../../services/api";

interface RecommendationInterface {
  idSchool?: number;
}

const Recommendation: React.FC<RecommendationInterface> = ({ idSchool }) => {
  const [recommendation, setRecommendation] = useState<number>();
  const alert = useAlert();
  const { period } = usePeriod();

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`/indications/${idSchool}/${period}`);
      if (data.length == 0) {
        setRecommendation(0);
      } else {
        setRecommendation(data[0].indications);
      }
    }
    fetchData();
  }, [idSchool, period]);

  const handleGoogle = async () => {
    await auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        try {
          // criar um usuario
          api
            .post("/user_apps", {
              urlPhoto: res.user?.photoURL,
              username: res.user?.displayName,
              uid: res.user?.uid,
            })
            .then((res) => {
              console.log("[Ok] -> Novo usuário criado");
            })
            .catch((res) => console.log("[Ok] -> O usuário já existe"));

          // criar indicaçao
          api
            .post("/indications", {
              school_id: idSchool,
              uid: res.user?.uid,
              period: period,
            })
            .then((res) => {
              console.log(res);
              alert.show("Indicação realizada com sucesso!");
            })
            .catch((err) => {
              console.log(err);
              alert.show(
                "Você já realizou anteriormente uma indicação a essa escola!"
              );
            });
        } catch {
          alert.show("Ocorreu um erro");
          return;
        }
      })
      .catch((error) => {
        console.log(error);
        alert.show("A autenticação foi interrompida! Tente novamente");
      });
  };

  return (
    <ContainerRecommendation>
      <span>{recommendation}</span>
      <h4>INDICAÇÕES</h4>
      <p>Realize agora uma nova indicação</p>
      <Button google onClick={handleGoogle}>
        Indicar usando o Google
      </Button>
      <Button facebook>Indicar usando o Facebook</Button>
    </ContainerRecommendation>
  );
};

export default Recommendation;
