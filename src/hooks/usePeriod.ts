import { useEffect, useState } from "react";

const usePeriod = () => {
  const [period, setPeriod] = useState<number>(0);

  useEffect(() => {
    const hoje = new Date();
    setPeriod(hoje.getFullYear());
  }, []);

  return { period };
};

export default usePeriod;
