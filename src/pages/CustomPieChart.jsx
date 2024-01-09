import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

 



const data = [
  { value: 10,  },
  { value: 10,  },
  { value: 15,  },
  { value: 20, },
];

const colors=["#5397e6","#ff5e00","#b00020","#4bbf66"]

export default function CustomPieChart() {


  const totalCount = data.reduce((acc, item) => acc + item.value, 0);


  return (
    <PieChart

      series={[
        {
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 45,
          data,
          innerRadius:40,
          outerRadius:80,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
          fontSize:"12px",
          alignItems:"center"
        },
      }}
      slotProps={{

        legend: {
          labelStyle: {
            fontSize: 12,
          },

          itemMarkWidth: 19,
          itemMarkHeight: 9,
          markGap: 5,
          itemGap: 10,
        },
      }}
      width={300}
      height={200}

colors={colors}

title={{
  verticalAlign: 'middle',
  floating: true
}}
      
  >
    <text
    aria-orientation='horizontal'
    x="33%"
    y="50%"
    textAnchor='middle'
    fontSize={"13px"}
      >
        Total:231h
      </text>
  </PieChart>

  );
}