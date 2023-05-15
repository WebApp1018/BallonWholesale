import toast from 'react-hot-toast';

const notify = (text, id = 1) => {
  if (id) {
    toast.success(text);
  } else {
    toast.error(text);
  }
};

export default notify;