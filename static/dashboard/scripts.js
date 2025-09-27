// SIDEBAR TOGGLE
let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// BAR CHART (Daily Usage)
const barChartOptions = {
  series: [
    {
      name: 'Electricity (kWh)',
      data: [12, 15, 10, 8, 14, 9, 11], // example daily usage
    },
    {
      name: 'Water (Liters)',
      data: [120, 100, 140, 130, 110, 125, 135], // example daily usage
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: { show: false },
  },
  colors: ['#246dec', '#4f35a1'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '40%',
      borderRadius: 4,
    },
  },
  dataLabels: { enabled: false },
  legend: { show: true },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yaxis: {
    title: { text: 'Usage' },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART (Monthly Usage)
const areaChartOptions = {
  series: [
    {
      name: 'Electricity (kWh)',
      data: [320, 280, 300, 350, 400, 380, 360], // monthly data
    },
    {
      name: 'Water (Liters)',
      data: [4000, 4200, 3800, 4500, 4700, 4400, 4600], // monthly data
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: { show: false },
  },
  colors: ['#246dec', '#4f35a1'],
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth' },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  markers: { size: 0 },
  yaxis: [
    { title: { text: 'Electricity (kWh)' } },
    { opposite: true, title: { text: 'Water (Liters)' } },
  ],
  tooltip: { shared: true, intersect: false },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

