import React from 'react'
import { Button } from '@material-ui/core'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveBar } from '@nivo/bar'
import './App.scss'

const data = [
  {
    id: 'java',
    label: 'java',
    value: 254,
    color: 'hsl(359, 70%, 50%)',
  },
  {
    id: 'hack',
    label: 'hack',
    value: 161,
    color: 'hsl(300, 70%, 50%)',
  },
  {
    id: 'lisp',
    label: 'lisp',
    value: 299,
    color: 'hsl(210, 70%, 50%)',
  },
  {
    id: 'python',
    label: 'python 1234',
    value: 114,
    color: 'hsl(114, 70%, 50%)',
  },
  {
    id: 'css',
    label: 'css',
    value: 249,
    color: 'hsl(191, 70%, 50%)',
  },
]

const barData = [
  {
    country: 'AD',
    'hot dog': 149,
    'hot dogColor': 'hsl(19, 70%, 50%)',
    burger: 88,
    burgerColor: 'hsl(131, 70%, 50%)',
    sandwich: 87,
    sandwichColor: 'hsl(226, 70%, 50%)',
    kebab: 105,
    kebabColor: 'hsl(21, 70%, 50%)',
    fries: 141,
    friesColor: 'hsl(222, 70%, 50%)',
    donut: 113,
    donutColor: 'hsl(199, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 136,
    'hot dogColor': 'hsl(151, 70%, 50%)',
    burger: 118,
    burgerColor: 'hsl(130, 70%, 50%)',
    sandwich: 199,
    sandwichColor: 'hsl(242, 70%, 50%)',
    kebab: 124,
    kebabColor: 'hsl(193, 70%, 50%)',
    fries: 166,
    friesColor: 'hsl(223, 70%, 50%)',
    donut: 180,
    donutColor: 'hsl(112, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 59,
    'hot dogColor': 'hsl(225, 70%, 50%)',
    burger: 36,
    burgerColor: 'hsl(287, 70%, 50%)',
    sandwich: 175,
    sandwichColor: 'hsl(84, 70%, 50%)',
    kebab: 72,
    kebabColor: 'hsl(65, 70%, 50%)',
    fries: 65,
    friesColor: 'hsl(79, 70%, 50%)',
    donut: 162,
    donutColor: 'hsl(294, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 131,
    'hot dogColor': 'hsl(4, 70%, 50%)',
    burger: 122,
    burgerColor: 'hsl(213, 70%, 50%)',
    sandwich: 19,
    sandwichColor: 'hsl(270, 70%, 50%)',
    kebab: 3,
    kebabColor: 'hsl(89, 70%, 50%)',
    fries: 157,
    friesColor: 'hsl(359, 70%, 50%)',
    donut: 106,
    donutColor: 'hsl(133, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 162,
    'hot dogColor': 'hsl(333, 70%, 50%)',
    burger: 5,
    burgerColor: 'hsl(62, 70%, 50%)',
    sandwich: 46,
    sandwichColor: 'hsl(74, 70%, 50%)',
    kebab: 7,
    kebabColor: 'hsl(147, 70%, 50%)',
    fries: 114,
    friesColor: 'hsl(125, 70%, 50%)',
    donut: 16,
    donutColor: 'hsl(182, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 94,
    'hot dogColor': 'hsl(333, 70%, 50%)',
    burger: 25,
    burgerColor: 'hsl(354, 70%, 50%)',
    sandwich: 115,
    sandwichColor: 'hsl(280, 70%, 50%)',
    kebab: 113,
    kebabColor: 'hsl(308, 70%, 50%)',
    fries: 18,
    friesColor: 'hsl(35, 70%, 50%)',
    donut: 97,
    donutColor: 'hsl(278, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 158,
    'hot dogColor': 'hsl(87, 70%, 50%)',
    burger: 174,
    burgerColor: 'hsl(61, 70%, 50%)',
    sandwich: 117,
    sandwichColor: 'hsl(350, 70%, 50%)',
    kebab: 130,
    kebabColor: 'hsl(344, 70%, 50%)',
    fries: 148,
    friesColor: 'hsl(65, 70%, 50%)',
    donut: 114,
    donutColor: 'hsl(72, 70%, 50%)',
  },
]

const App = (): JSX.Element => {
  return (
    <div className="App">
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'ruby',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'c',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'go',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'python',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'scala',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'lisp',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'elixir',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'javascript',
            },
            id: 'lines',
          },
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
      <ResponsiveBar
        data={barData}
        keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'fries',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'sandwich',
            },
            id: 'lines',
          },
        ]}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
      <Button color="primary" variant="outlined">
        Click
      </Button>
    </div>
  )
}

export default App
