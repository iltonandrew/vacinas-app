import React, { createContext, ReactNode, useContext, useState } from "react";
import { addressType, userType } from "../services/api";

interface FormProviderProps {
  children: ReactNode;
}

interface FormData extends userType, addressType {}

interface FormContextData {
  form: FormData;
  updateFormData: (formData: FormData) => void;
}

const FormContext = createContext<FormContextData>({} as FormContextData);

export function FormProvider({ children }: FormProviderProps): JSX.Element {
  const [form, setForm] = useState({} as FormData);

  const updateFormData = (formData: FormData): void => {
    setForm(formData);
  };

  return (
    <FormContext.Provider value={{ form, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm(): FormContextData {
  const context = useContext(FormContext);

  return context;
}
