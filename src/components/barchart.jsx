import { Bar }  from 'react-chartjs-2';
import { Chart, BarController, BarElement } from 'chart.js/auto';
import data from '../data/data.json';

function Barchart () {

    
    return(
        <section>
            <h1>Spending last 7 days</h1>
            {/* <Bar data={expensesData} /> */}
            <div>
                <hr />
                <p>
                    <span>Total this month</span>
                    <span>$478.33</span>
                </p>

                <p>
                    <span>+2.4%</span>
                    <span>from last month</span>
                </p>
            </div>
        </section>
    )
}

export default Barchart;