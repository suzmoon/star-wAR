// Fetch Data function
async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Event Listeners
  document.getElementById('btn-people').addEventListener('click', async () => {
    const peopleData = await fetchData('https://swapi.dev/api/people/');
    displayData(peopleData.results, 'People');
  });
  
  document.getElementById('btn-films').addEventListener('click', async () => {
    const filmsData = await fetchData('https://swapi.dev/api/films/');
    displayData(filmsData.results, 'Films');
  });
  
  document.getElementById('btn-starships').addEventListener('click', async () => {
    const starshipsData = await fetchData('https://swapi.dev/api/starships/');
    displayData(starshipsData.results, 'Starships');
  });
  
  // Display Data function
  function displayData(data, category) {
    const container = document.getElementById('data-container');
    container.innerHTML = '';
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4', 'card-col', 'animate__animated', 'animate__fadeIn');
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${item.name || item.title}</h5>
            <p class="card-text">${category === 'Films' ? item.opening_crawl : ''}</p>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }
  