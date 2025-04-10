import iziToast from 'izitoast';

function showErrorToast(message) {
  return iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
    transitionIn: 'fadeInDown',
    timeout: 3000,
    close: true,
  });
}

export { showErrorToast };
