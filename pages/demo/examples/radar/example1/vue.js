export const template =
`<template>
<div>
  <v-chart :force-fit="true" :height="height" :data="data" :dataPre="dataPre" :scale="scale">
    <v-tooltip />
    <v-axis :dataKey="axis1Opts.dataKey" :line="axis1Opts.line" :tickLine="axis1Opts.tickLine" :grid="axis1Opts.grid"/>
    <v-axis :dataKey="axis2Opts.dataKey" :line="axis2Opts.line" :tickLine="axis2Opts.tickLine" :grid="axis2Opts.grid"/>
    <v-legend />
    <v-coord :type="'polar'" :radius="0.8" />
    <v-line :position="'item*score'" :color="'user'" :size="2"/>
    <v-point :position="'item*score'" :color="'user'" :size="4"/>
    <v-area :position="'item*score'" :color="'user'" />
  </v-chart>
</div>
</template>

<script>

const data = [
  { item: 'Design', a: 70, b: 30 },
  { item: 'Development', a: 60, b: 70 },
  { item: 'Marketing', a: 50, b: 60 },
  { item: 'Users', a: 40, b: 50 },
  { item: 'Test', a: 60, b: 70 },
  { item: 'Language', a: 70, b: 50 },
  { item: 'Technology', a: 50, b: 40 },
  { item: 'Support', a: 30, b: 40 },
  { item: 'Sales', a: 60, b: 40 },
  { item: 'UX', a: 50, b: 60 }
];

const dataPre = {
  transform: {
    type: 'fold',
    fields: ['a', 'b'],
    key: 'user',
    value: 'score',
  },
};

const scale = [{
  dataKey: 'score',
  min: 0,
  max: 80,
}];

const axis1Opts = {
  dataKey: 'item',
  line: null,
  tickLine: null,
  grid: {
    lineStyle: {
      lineDash: null
    },
    hideFirstLine: false,
  }
};
const axis2Opts = {
  dataKey: 'score',
  line: null,
  tickLine: null,
  grid: {
    type: 'polygon',
    lineStyle: {
      lineDash: null,
    },
  },
};

export default {
  data() {
    return {
      data,
      dataPre,
      scale,
      axis1Opts,
      axis2Opts,
      height: 400,
    };
  }
};
</script>
`;