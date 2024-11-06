function calculateAttendance() {
    const lectureAttendance = parseFloat(document.getElementById("lectureAttendance").value) || null;
    const tutorialAttendance = parseFloat(document.getElementById("tutorialAttendance").value) || null;
    const practicalAttendance = parseFloat(document.getElementById("practicalAttendance").value) || null;
    const skillAttendance = parseFloat(document.getElementById("skillAttendance").value) || null;

    const result = document.getElementById("result");
    const message = document.getElementById("message");
    const belowGif = document.getElementById("belowGif");
    const aboveGif = document.getElementById("aboveGif");
    const whistleGif = document.getElementById("whistleGif");

    const attendanceValues = [lectureAttendance, tutorialAttendance, practicalAttendance, skillAttendance].filter(value => value !== null);

    if (attendanceValues.length === 0) {
        result.innerHTML = "<strong>Please enter at least one attendance percentage.</strong>";
        result.style.color = "red";
        return;
    }

    const overallPercentage = attendanceValues.reduce((sum, value) => sum + value, 0) / attendanceValues.length;

    result.style.color = overallPercentage >= 85 ? "green" : "red";
    result.innerHTML = `<strong>Overall Attendance: ${overallPercentage.toFixed(2)}%</strong>`;

    if (overallPercentage >= 90) {
        message.innerHTML = "<strong>EXCELLENT 🎉</strong>";
        message.style.color = "blue";
        belowGif.style.display = "none";
        aboveGif.style.display = "none";
        whistleGif.style.display = "block";
    } else if (overallPercentage >= 85) {
        message.innerHTML = "<strong>Good 🤩</strong>";
        message.style.color = "blue"; // Changed from green to blue
        belowGif.style.display = "none";
        aboveGif.style.display = "block";
        whistleGif.style.display = "none";
    } else {
        message.innerHTML = "<strong>Mava, Nuvu Classes Ki Vellali 😡</strong>";
        message.style.color = "blue"; // Changed from orange to blue
        belowGif.style.display = "block";
        aboveGif.style.display = "none";
        whistleGif.style.display = "none";
    }
}

function resetFields() {
    // Reset input fields
    document.getElementById("lectureAttendance").value = "";
    document.getElementById("tutorialAttendance").value = "";
    document.getElementById("practicalAttendance").value = "";
    document.getElementById("skillAttendance").value = "";

    // Reset result and message
    const result = document.getElementById("result");
    const message = document.getElementById("message");
    const belowGif = document.getElementById("belowGif");
    const aboveGif = document.getElementById("aboveGif");
    const whistleGif = document.getElementById("whistleGif");

    result.innerHTML = "";
    message.innerHTML = "";

    // Hide gifs
    belowGif.style.display = "none";
    aboveGif.style.display = "none";
    whistleGif.style.display = "none";
}

// Add event listener for Reset Fields button
document.getElementById("resetButton").addEventListener("click", resetFields);
