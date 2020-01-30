const results = JSON.parse(localStorage.getItem('votes'));

const votes = [];
const labels = [];

results.forEach(item => {
    votes.push(item.votes);
    labels.push(item.id);
});

const ctx = document.getElementById('results').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: votes,
            backgroundColor: ['lightblue', 'royalblue', 'yellow', 'green', 'purple', 'orange', 'black', 'red','turquoise', 'brown', 'pink','navy', 'lightgreen', 'maroon', 'grey', 'blue']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

document.getElementById('results').textContent = JSON.stringify(results, 0, 2);

