document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content loaded')
})

fetch('/quotes')
  .then(response => response.json())
  .then(result => {
      renderData(result);
    })

const renderData = (result) => {
  const container = document.querySelector('.content')
  const name = document.querySelector('.name')
  container.innerText = result.quote;
  name.innerText = result.name;
}  
