/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

export interface ProjectStorage {
  jwt?: string;
}

/**
 * UseLocalStorage Hook
 * Hook para padronizar a troca de dados através do local storage.
 * Fuciona de forma semelhante ao useState porem retorna um objeto {} e uma função setStorageItem = (propName: keyof OpsStorageProps, value: any)
 * Propriedade novas no Storage devem ser informadas na Interface ProjectStorage assim todo o local storage fica padronizado
 */
export default (): [
  ProjectStorage,
  (propName: keyof ProjectStorage, value: any) => void
] => {
  const [storage, setOpsStorage] = useState(
    JSON.parse(
      localStorage.getItem(`@application_storage`) || "{}"
    ) as ProjectStorage
  );

  const setStorageItem = (propName: keyof ProjectStorage, value: any) => {
    const newState = { ...storage };
    newState[propName] = value;
    localStorage.setItem(`@application_storage`, JSON.stringify(newState));
    setOpsStorage(newState);
  };

  useEffect(() => {
    if (localStorage.getItem(`@application_storage`) === null) {
      localStorage.setItem(`@application_storage`, JSON.stringify({}));
    }
  }, []);

  return [storage, setStorageItem];
};
