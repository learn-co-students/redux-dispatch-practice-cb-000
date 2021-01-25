
// the lessons are jumping back and forth with export and no export on these reducer files. This is not explained... though it appears it's for the tests. I think the lessons should note this difference, to avoid any confusion. 

export let state;

export function managePets(state={pets: []}, action){
  switch(action.type){
    case 'ADD_PET': 
      return {...state, pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      return {...state, pets: state.pets.filter(
        pet => pet.id !== action.id
      )}
    default: return state
  }
}

export function dispatch(action) {
  state = managePets(state, action)
  render()
}

export function render() {
  const petItems = state.pets.map(pet => `<li>${pet.name}</li>`)
  const petsList = `<ul>${petItems}</ul>`
  document.getElementById('container').innerHTML = petsList
}

// dispatch({type: '@@INIT'})
