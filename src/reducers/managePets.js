export let state;


export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return { pets: [...state.pets, action.pet]};
    case 'REMOVE_PET':
      let pets = state.pets.filter((pet) => (pet.id !== action.id));
      return {pets: pets}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let html = '<ul>';
  html += state.pets.reduce((html,pet) => (html += `<li>${pet.name}</li>`),'');
  html += '</ul>';
  document.getElementById('container').innerHTML = html;
}
