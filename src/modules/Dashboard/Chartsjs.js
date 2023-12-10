import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];


function Chartsjs() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <BarChart
                        width={1200}
                        height={500}
                        data={data}>
                       
                        <XAxis dataKey="name" />
                        {/* <YAxis /> */}
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#0dcaf0" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                        <Bar dataKey="amt" fill="red" />
                    </BarChart>


                </div>
            </div>
        </div>
    )
}

export default Chartsjs