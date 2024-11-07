function calculateAttendance() {
    const lectureAttendance = parseFloat(document.getElementById("lectureAttendance").value) || null;
    const tutorialAttendance = parseFloat(document.getElementById("tutorialAttendance").value) || null;
    const practicalAttendance = parseFloat(document.getElementById("practicalAttendance").value) || null;
    const skillAttendance = parseFloat(document.getElementById("skillAttendance").value) || null;

    const result = document.getElementById("result");
    const message = document.getElementById("message");
    const belowGif = document.getElementById("belowGif");
    const workHardGif = document.getElementById("workHardGif");
    const midRangeGif = document.getElementById("midRangeGif");
    const aboveGif = document.getElementById("aboveGif");
    const whistleGif = document.getElementById("whistleGif");
    const below69Gif = document.getElementById("below69Gif");

    const attendanceValues = [lectureAttendance, tutorialAttendance, practicalAttendance, skillAttendance].filter(value => value !== null);

    if (attendanceValues.length === 0) {
        result.innerHTML = "<strong>Please enter at least one attendance percentage.</strong>";
        result.style.color = "red";
        return;
    }

    const overallPercentage = attendanceValues.reduce((sum, value) => sum + value, 0) / attendanceValues.length;

    result.style.color = overallPercentage >= 85 ? "green" : "red";
    result.innerHTML = `<strong>Overall Attendance: ${overallPercentage.toFixed(2)}%</strong>`;

    // Hide all GIFs
    belowGif.style.display = "none";
    workHardGif.style.display = "none";
    midRangeGif.style.display = "none";
    aboveGif.style.display = "none";
    whistleGif.style.display = "none";
    below69Gif.style.display = "none"; // Hide new GIF initially

    if (overallPercentage >= 90) {
        message.innerHTML = "<strong>Thaggedele💥</strong>";
        message.style.color = "blue";
        whistleGif.style.display = "block";
    } else if (overallPercentage >= 85) {
        message.innerHTML = "<strong>I am Safe 😅</strong>";
        message.style.color = "blue";
        aboveGif.style.display = "block";
    } else if (overallPercentage >= 70) {
        message.innerHTML = "<strong>Attendance Endi Tage Laga Undi</strong>";
        message.style.color = "blue";
        midRangeGif.style.display = "block";
    } else if (overallPercentage >= 50) {
        message.innerHTML = "<strong>Mava inka konchame nuvu cheyagalavu 🔥</strong>";
        message.style.color = "blue";
        workHardGif.style.display = "block";
        below69Gif.style.display = "block"; // Display new GIF for 50% to 69%
    } else {
        message.innerHTML = "<strong>Mava, Nuvu Attendance ki Detained 😭</strong>";
        message.style.color = "blue";
        belowGif.style.display = "block";
    }
}

function resetFields() {
    document.getElementById("lectureAttendance").value = '';
    document.getElementById("tutorialAttendance").value = '';
    document.getElementById("practicalAttendance").value = '';
    document.getElementById("skillAttendance").value = '';
    document.getElementById("result").innerHTML = '';
    document.getElementById("message").innerHTML = '';

    // Hide all GIFs
    document.getElementById("belowGif").style.display = "none";
    document.getElementById("workHardGif").style.display = "none";
    document.getElementById("midRangeGif").style.display = "none";
    document.getElementById("aboveGif").style.display = "none";
    document.getElementById("whistleGif").style.display = "none";
    document.getElementById("below69Gif").style.display = "none"; // Hide new GIF
}
