chartColor = "#FFFFFF";

// General configuration for the charts with Line gradientStroke
gradientChartOptionsConfiguration = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 5,
        yPadding: 5,
        caretPadding: 5
    },
    responsive: 1,
    scales: {
        yAxes: [{
            display: 1,
            gridLines: 0,
            ticks: {
                display: true
            },
            gridLines: {
                zeroLineColor: 'transparent',
                drawTicks: true,
                display: true,
                drawBorder: true
            }
        }],
        xAxes: [{
            display: 1,
            gridLines: 0,
            ticks: {
                display: true
            },
            gridLines: {
                zeroLineColor: 'transparent',
                drawTicks: true,
                display: true,
                drawBorder: true
            }
        }]
    },
    layout: {
        padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
};


createLineCharts = () => {
    arreglo = document.getElementsByClassName('lineChart')

    for (let graph in arreglo) {
        ctx = arreglo[graph].getContext("2d");

        gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#80b6f4');
        gradientStroke.addColorStop(1, chartColor);

        gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

        if (graph === "0") {
            myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        label: "Envios",
                        borderColor: "#f96332",
                        pointBorderColor: "#000000",
                        pointBackgroundColor: "#f96332",
                        pointBorderWidth: 2,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 1,
                        pointRadius: 4,
                        fill: true,
                        backgroundColor: gradientFill,
                        borderWidth: 2,
                        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 80))
                    }]
                },
                options: gradientChartOptionsConfiguration
            });
        } else {
            myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        label: "Envios",
                        borderColor: "#f96332",
                        pointBorderColor: "#000000",
                        pointBackgroundColor: "#f96332",
                        pointBorderWidth: 2,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 1,
                        pointRadius: 4,
                        fill: true,
                        backgroundColor: gradientFill,
                        borderWidth: 2,
                        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 80))
                    }]
                },
                options: gradientChartOptionsConfiguration
            });
        }
    }
}

createBarCharts = () => {
    arreglo = document.getElementsByClassName('barChart')

    for (let graph in arreglo) {
        ctx = arreglo[graph].getContext("2d");

        gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#80b6f4');
        gradientStroke.addColorStop(1, chartColor);

        gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Envios",
                    borderColor: "#f96332",
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 80))
                }]
            },
            options: gradientChartOptionsConfiguration
        });
    }
}

// document.addEventListener("DOMContentLoaded", function () {
//     createLineCharts();
// });

document.addEventListener("DOMContentLoaded", function () {
    createBarCharts();
});
