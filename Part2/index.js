console.log('the house always wins.')

const idInput = document.getElementById('input-id');
const styleInput = document.getElementById('input-style');

const setCard = () => {
  const card =  document.getElementById(idInput.value)
  card.style.color = styleInput.value

}

/* TODO -Black Diamond
reset button
*/