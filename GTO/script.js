document.addEventListener('DOMContentLoaded', function () {
    // Configurar gráficos
    const userCtx = document.getElementById('userChart').getContext('2d');
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    const radarCtx = document.getElementById('radarChart').getContext('2d');

    const userChart = new Chart(userCtx, {
        type: 'bar',
        data: {
            labels: ['Momento de aprendizaje 1', 'Momento de aprendizaje 2', 'Momento de aprendizaje 3', 'Momento de aprendizaje 4', 'Momento de aprendizaje 5'],
            datasets: [{
                label: 'Usuarios Nuevos',
                data: [75, 60, 80, 40, 90],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    const salesChart = new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['Momento de aprendizaje 1', 'Momento de aprendizaje 2', 'Momento de aprendizaje 3', 'Momento de aprendizaje 4', 'Momento de aprendizaje 5'],
            datasets: [{
                label: 'Ventas Mensuales',
                data: [50, 30, 70, 20, 80],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    const radarChart = new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: ['Momento de aprendizaje 1', 'Momento de aprendizaje 2', 'Momento de aprendizaje 3', 'Momento de aprendizaje 4', 'Momento de aprendizaje 5'],
            datasets: [{
                label: 'Desempeño',
                data: [75, 60, 80, 40, 90],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                r: {
                    min: 0,
                    max: 100
                }
            }
        }
    });
});

function showDashboard(alumno) {
    // Simular datos para los dashboards de los alumnos
    const dashboardData = {
        alumno1: {
            usersData: [75, 60, 80, 40, 90],
            salesData: [50, 30, 70, 20, 80]
        },
        alumno2: {
            usersData: [60, 70, 50, 30, 80],
            salesData: [40, 60, 30, 20, 70]
        },
        alumno3: {
            usersData: [80, 90, 70, 60, 95],
            salesData: [70, 80, 60, 50, 90]
        }
    };

    const userChart = Chart.getChart('userChart');
    const salesChart = Chart.getChart('salesChart');
    const radarChart = Chart.getChart('radarChart');

    // Actualizar datos de los gráficos según el alumno seleccionado
    userChart.data.datasets[0].data = dashboardData[alumno].usersData;
    salesChart.data.datasets[0].data = dashboardData[alumno].salesData;
    radarChart.data.datasets[0].data = dashboardData[alumno].usersData;

    userChart.update();
    salesChart.update();
    radarChart.update();
}
