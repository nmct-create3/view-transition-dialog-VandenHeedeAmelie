const updateButton = document.getElementById('showModalDialog');
const cancelButton = document.getElementById('closeModalDialog');
const dialog = document.getElementById('modalDialog');
dialog.returnValue = 'dialoog';

function openCheck(dialog) {
  if (dialog.open) {
    console.log('Dialog open');
  } else {
    console.log('Dialog closed');
  }
}


document.addEventListener('DOMContentLoaded', function () {
    
    
    updateButton.addEventListener('click', () => {
      dialog.showModal();
      dialog.addEventListener('cancel', () => {
        openCheck(dialog);
      });
    });
    
    cancelButton.addEventListener('click', () => {
      dialog.close('canceled');
      dialog.addEventListener('close', () => {
        openCheck(dialog);
      });
    });



});
