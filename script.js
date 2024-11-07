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
    const midRangeGif = document.getElementById("midRangeGif");  // Added new GIF element

    // Filter out null attendance values
    const attendanceValues = [lectureAttendance, tutorialAttendance, practicalAttendance, skillAttendance].filter(value => value !== null);

    if (attendanceValues.length === 0) {
        result.innerHTML = "<strong>Please enter at least one attendance percentage.</strong>";
        result.style.color = "red";
        return;
    }

    // Calculate overall attendance percentage
    const overallPercentage = attendanceValues.reduce((sum, value) => sum + value, 0) / attendanceValues.length;

    result.style.color = overallPercentage >= 85 ? "green" : "red";
    result.innerHTML = `<strong>Overall Attendance: ${overallPercentage.toFixed(2)}%</strong>`;

    // Hide all GIFs initially
    belowGif.style.display = "none";
    aboveGif.style.display = "none";
    whistleGif.style.display = "none";
    midRangeGif.style.display = "none";  // Hide mid-range GIF initially

    // Show relevant GIF based on attendance percentage
    if (overallPercentage >= 90) {
        message.innerHTML = "<strong>Thaggedele💥</strong>";
        message.style.color = "blue";
        whistleGif.style.display = "block";
    } else if (overallPercentage >= 85) {
        message.innerHTML = "<strong>I am Safe 😅</strong>";
        message.style.color = "blue";
        aboveGif.style.display = "block";
    } else if (overallPercentage >= 70 && overallPercentage <= 84) {  // Show the mid-range GIF for 70-84%
        message.innerHTML = "<strong>Attendance Endi Tage Laga Undi</strong>";
        message.style.color = "blue";
        midRangeGif.style.display = "block";  // Display the new GIF
    } else {
        message.innerHTML = "<strong>Mava, Nuvu Classes Ki Vellali 😡</strong>";
        message.style.color = "blue";
        belowGif.style.display = "block";
    }
}
