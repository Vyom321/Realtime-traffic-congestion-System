// script.js

function predictTraffic() {
    const hour = document.getElementById('hour').value;
    const dayOfWeek = document.getElementById('day_of_week').value;

    if (hour === "" || dayOfWeek === "") {
        alert("Please enter valid values for hour and day of week.");
        return;
    }

    // Example threshold for traffic volume
    const TRAFFIC_THRESHOLD = 50;  // Simulated threshold for high traffic
    const predictedTrafficVolume = Math.random() * 100;  // Simulating prediction with a random number between 0-100

    document.getElementById('prediction-result').innerText = `Predicted Traffic Volume: ${predictedTrafficVolume.toFixed(2)}`;

    // Traffic management decision based on predicted volume
    if (predictedTrafficVolume > TRAFFIC_THRESHOLD) {
        document.getElementById('traffic-decision').innerText = "Adjusting traffic light timings to REDUCE congestion.";
        document.getElementById('traffic-decision').style.color = "red";
    } else {
        document.getElementById('traffic-decision').innerText = "Traffic flow is normal. No adjustment needed.";
        document.getElementById('traffic-decision').style.color = "green";
    }
}
