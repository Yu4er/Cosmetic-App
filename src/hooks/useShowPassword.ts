import { useCallback, useState } from "react";

export interface IUseShowPassword {
  showPass: boolean;
  showPassword: () => void;
}

export function useShowPassword(): IUseShowPassword {
  const [showPass, setShowPass] = useState(true);

  const showPassword = useCallback(() => {
    setShowPass((prevState) => !prevState);
  }, []);

  return {
    showPassword,
    showPass,
  };
}
