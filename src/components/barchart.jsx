import { Bar }  from 'react-chartjs-2';
import { Chart, BarController, BarElement, plugins } from 'chart.js/auto';
import sourceData from '../data/data.json';

Chart.register(BarController, BarElement);

function Barchart () {

    const expensesData = {
        labels: sourceData.map((data) => data.day),
        datasets: [
            {
                label: "Amount",
                data: sourceData.map((data) => data.amount),
                borderRadius: 5,
                backgroundColor: [
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(186, 34%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                ],
                hoverBackgroundColor: [
                    'hsla(10, 79%, 65%, .5)',
                    'hsla(10, 79%, 65%, .5)',
                    'hsla(186, 34%, 65%, .5)',
                    'hsla(10, 79%, 65%, .5)',
                    'hsla(10, 79%, 65%, .5)',
                    'hsla(10, 79%, 65%, .5)',
                    'hsla(10, 79%, 65%, .5)',
                ],
            }
        ]
    }

    const options = {

        scales: {
            y: {
                beginAtZero: true,
                display: false,
            },

            x: {
                grid: {
                    display: false,
                }
            }
        },
        
        plugins: {
            legend: {
                display: false,
            }
        }
    }
    
    return(
        <section className='barchart'>
            <h1>Spending last 7 days</h1>
            <Bar data={expensesData} options={options} />
            <hr />
            <div className='flex stats'>
                <div className='stats-one-container'>
                    <p>Total this month</p>
                    <p>$478.33</p>
                </div>
                <div className='stats-two-container'>
                    <p>+2.4%</p>
                    <p>from last month</p>
                </div>
            </div>
        </section>
    )
}

export default Barchart;