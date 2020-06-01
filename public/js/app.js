document.addEventListener('DOMContentLoaded', () => {
  
    const quoteButton = document.querySelector('.quote')
    quoteButton.addEventListener('click', () => {
      fetchQuotes();
    })

    const dateFactButton = document.querySelector('.get-date-fact');
    dateFactButton.addEventListener('click', () => {
      fetchDateFact();
    })

    fetchDate()
})

const fetchQuotes = () => {
  fetch('/quotes')
  .then(response => response.json())
  .then(result => {
      renderData(result);
    })
}    

const renderData = (result) => {
  const container = document.querySelector('.content')
  const name = document.querySelector('.name')
  container.innerText = result.quote;
  name.innerText = result.name;
}  

const fetchDate = () => {
  fetch('/date')
    .then(response => response.json())
    .then(result => {
      renderDate(result.date)
    })
}

const renderDate = (date) => {
  const dateElement = document.querySelector('.date');
  dateElement.innerText = date;
}

const fetchDateFact = () => {
  fetch('/datefact')
    .then(response => response.json())
    .then(result => {
      renderDateFact(result.fact)
    })
}

const renderDateFact = (dateFact) => {
  const container = document.querySelector('.date-fact');
  container.innerText = dateFact;
}