export default function killAllDialogs() {
  const dialogs = document.querySelectorAll('dialog');
  // Check if there are any dialogs
  if (dialogs) {
    dialogs.forEach((dialog) => {
      dialog.close();
      dialog.classList.remove(
        'h-[85%]',
        'w-[70%]',
        'rounded-[3rem]',
        'border-dashed',
        'flex',
        'flex-col',
        'items-center'
      ); //Tailwind classes
      dialog.remove();
      console.log("Dialog removed");
    });
  } else {
    console.log("No dialogs available");
  }
}