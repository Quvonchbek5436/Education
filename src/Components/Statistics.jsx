import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { statisticsData } from "../data/Data"

const Statistics = () => {



    return (
        <StatisticsComp>
            <h3 className="heading">Viloyatlarning <span>Statistikasi</span></h3>

            <div className="bar1">
                <ResponsiveContainer height={600}>
                    <BarChart
                        layout={"vertical"}
                        // width={500}
                        // height={300}
                        data={statisticsData}
                        margin={{
                            right: 40,
                            left: 60,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="regionName" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Markazlar" fill="rgba(255, 120, 0, 0.8)" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="bar2">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        layout={"vertical"}
                        width={500}
                        height={300}
                        data={statisticsData}
                        margin={{
                            top: 5,
                            right: 50,
                            left: 60,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="regionName" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Markazlar" fill="rgba(255, 120, 0, 0.8)" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </StatisticsComp>

    );
}

export default Statistics;

const StatisticsComp = styled.section`
   .bar2 {
        display: none;
   }

.recharts-legend-item-text {
    font-size: 2rem;
}

.recharts-cartesian-axis-tick-value {
    fill: ${({ theme }) => theme.black} !important;
    font-size: 1.2rem;
}

@media(max-width: 768px) {
    .bar1 {
        display: none;
    }

    .bar2 {
        display: block;
    }
}

`
