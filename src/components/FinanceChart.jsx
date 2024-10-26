"use client";
import Image from 'next/image';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const FinanceChart = () => {

    const data = [
        {
            name: 'Jan',
            income: 4000,
            expense: 2400,
        },
        {
            name: 'Feb',
            income: 3000,
            expense: 1398,
        },
        {
            name: 'Mar',
            income: 2000,
            expense: 9800,
        },
        {
            name: 'Apr',
            income: 2780,
            expense: 3908,
        },
        {
            name: 'May',
            income: 1890,
            expense: 4800,
        },
        {
            name: 'Jun',
            income: 2390,
            expense: 3800,
        },
        {
            name: 'Jul',
            income: 3490,
            expense: 4300,
        },
        {
            name: 'Aug',
            income: 3490,
            expense: 4300,
        },
        {
            name: 'sep',
            income: 3490,
            expense: 4300,
        },
        {
            name: 'oct',
            income: 3490,
            expense: 4300,
        },
        {
            name: 'nov',
            income: 3490,
            expense: 4300,
        },
        {
            name: 'dec',
            income: 3490,
            expense: 4300,
        },

    ];
    return (
        <div className='bg-white rounded-lg w-full h-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10} />
                    <YAxis axisLine={false} tickLine={false} tickMargin={20} />
                    <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
                    <Legend align='center' verticalAlign='top' wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px", fontWeight: "600" }} />
                    <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={8} />
                    <Line type="monotone" dataKey="expense" stroke="#FAE27C" strokeWidth={8} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FinanceChart
