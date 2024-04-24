import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successNotification = (message) => {
    toast.success(message);
}

export const errorNotification = (message) => {
    toast.error(message);
}