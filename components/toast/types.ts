export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  visible: boolean;
  onDismiss: () => void;
} 