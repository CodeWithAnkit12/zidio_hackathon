import { useContext } from "react";
import type { ToastItem } from "../context/ToastContext";  // <-- TYPE ONLY IMPORT
import { ToastContext } from "../context/ToastContext";


export default function ToastContainer() {
  const { toasts, removeToast } = useContext(ToastContext);

  const colors: Record<string, string> = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-400 text-black",
  };

  return (
    <div className="fixed top-6 right-6 space-y-4 z-[9999] pointer-events-none">
      {toasts.map((toast: ToastItem) => (
        <div
          key={toast.id}
          className={`
            px-5 py-4 rounded-xl text-white shadow-xl min-w-[260px]
            border border-black/10
            backdrop-blur-md
            flex justify-between items-center
            pointer-events-auto
            animate-toastIn
            ${colors[toast.type]}
          `}
        >
          <span className="font-medium">{toast.message}</span>

          <button
            onClick={() => removeToast(toast.id)}
            className="ml-4 font-bold text-xl leading-none"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
