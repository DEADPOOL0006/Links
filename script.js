function calculateAttendance() {
    const lectureAttendance = parseFloat(document.getElementById("lectureAttendance").value) || null;
    const tutorialAttendance = parseFloat(document.getElementById("tutorialAttendance").value) || null;
    const practicalAttendance = parseFloat(document.getElementById("practicalAttendance").value) || null;
    const skillAttendance = parseFloat(document.getElementById("skillAttendance").value) || null;

    const result = document.getElementById("result");
    const message = document.getElementById("message");
    const belowGif = document.getElementById("belowGif");
    const mediumGif = document.getElementById("mediumGif");
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

    // Hide all GIFs initially
    belowGif.style.display = "none";
    mediumGif.style.display = "none";
    aboveGif.style.display = "none";
    whistleGif.style.display = "none";

    // Show relevant GIF based on attendance percentage
    if (overallPercentage >= 90) {
        message.innerHTML = "<strong>Thaggedele💥</strong>";
        message.style.color = "blue";
        whistleGif.style.display = "block";
    } else if (overallPercentage >= 85) {
        message.innerHTML = "<strong>I am Safe 😅</strong>";
        message.style.color = "blue";
        aboveGif.style.display = "block";
    } else if (overallPercentage >= 60) {
        message.innerHTML = "<strong>Attendance Endi Tage Laga Undi</strong>";
        message.style.color = "blue";
        mediumGif.style.display = "block";
    } else {
        message.innerHTML = "<strong>Mava, Nuvu Classes Ki Vellali 😡</strong>";
        message.style.color = "blue";
        belowGif.style.display = "block";
    }
}
