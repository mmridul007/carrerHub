import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Assignment-1',
    A: 60,
    fullMark: 60,
  },
  {
    subject: 'G3-Architect',
    A: 58,
    fullMark: 60,
  },
  {
    subject: 'EdTect Landing Page',
    A: 60,
    fullMark: 60,
  },
  {
    subject: 'Problem Solving',
    A: 60,
    fullMark: 60,
  },
  {
    subject: 'GeoMetry Genious',
    A: 57,
    fullMark: 60,
  },
  {
    subject: 'AI Universe Using API',
    A: 57,
    fullMark: 60,
  },
  {
    subject: 'Debug and Devtool',
    A: 60,
    fullMark: 60,
  }
];

export default class PieCharts extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';

  render() {
    return (
        <div>
            <div>
                <h1 className='font-bold text-2xl text-center py-12'>Statistics</h1>
            </div>
            <div className='w-[100%] overflow-hidden flex justify-center mb-40'>
        
        <ResponsiveContainer width={600} height={350}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
        </div>
        </div>
      
    );
  }
}