export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      return {pets: [...state.pets, action.pet]}
    case "REMOVE_PET":
      let newPets = state.pets.filter(pet => {
        if(pet.id !== action.id){
          return pet;
        }
      })
      return {pets: newPets}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  document.getElementById('container').innerHTML = `<ul>${state.pets.map(pet => `<li>${pet.name}</li>`)}</ul>`
}
