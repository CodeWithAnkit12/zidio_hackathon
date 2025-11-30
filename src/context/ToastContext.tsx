import { createContext, useState } from "react";

export interface ToastItem {
  id: number;
  message: string;
  type: "success" | "error" | "info" | "warning";
}

interface ToastContextType {
  toasts: ToastItem[];
  showToast: (msg: string, type?: ToastItem["type"]) => void;
  removeToast: (id: number) => void;
}

export const ToastContext = createContext<ToastContextType>({
  toasts: [],
  showToast: () => {},
  removeToast: () => {},
});

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (message: string, type: ToastItem["type"] = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => removeToast(id), 3000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}
