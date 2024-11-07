function calculateAttendance() {
    // Retrieve values from input fields and convert to numbers
    const lectureAttendance = parseFloat(document.getElementById("lectureAttendance").value) || null;
    const tutorialAttendance = parseFloat(document.getElementById("tutorialAttendance").value) || null;
    const practicalAttendance = parseFloat(document.getElementById("practicalAttendance").value) || null;
    const skillAttendance = parseFloat(document.getElementById("skillAttendance").value) || null;

    // Get references to result and message elements
    const result = document.getElementById("result");
    const message = document.getElementById("message");

    // Get references to GIF elements
    const belowGif = document.getElementById("belowGif");
    const workHardGif = document.getElementById("workHardGif");
    const midRangeGif = document.getElementById("midRangeGif");
    const aboveGif = document.getElementById("aboveGif");
    const whistleGif = document.getElementById("whistleGif");
    const below69Gif = document.getElementById("below69Gif");

    // Collect non-null attendance values
    const attendanceValues = [lectureAttendance, tutorialAttendance, practicalAttendance, skillAttendance].filter(value => value !== null);

    // Check if no attendance values were entered
    if (attendanceValues.length === 0) {
        result.innerHTML = "<strong>Please enter at least one attendance percentage.</strong>";
        result.style.color = "red";
        return;
    }

    // Calculate the overall attendance percentage
    const overallPercentage = attendanceValues.reduce((sum, value) => sum + value, 0) / attendanceValues.length;

    // Display the overall attendance percentage in the result element
    result.style.color = overallPercentage >= 85 ? "green" : "red";
    result.innerHTML = `<strong>Overall Attendance: ${overallPercentage.toFixed(2)}%</strong>`;

    // Hide all GIFs initially
    belowGif.style.display = "none";
    workHardGif.style.display = "none";
    midRangeGif.style.display = "none";
    aboveGif.style.display = "none";
    whistleGif.style.display = "none";
    below69Gif.style.display = "none";

    // Display message and show appropriate GIF based on overall percentage
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
        below69Gif.style.display = "block";
    } else {
        message.innerHTML = "<strong>Mava, Nuvu Attendance ki Detained 😭</strong>";
        message.style.color = "blue";
        belowGif.style.display = "block";
    }
}

function resetFields() {
    // Clear input fields
    document.getElementById("lectureAttendance").value = '';
    document.getElementById("tutorialAttendance").value = '';
    document.getElementById("practicalAttendance").value = '';
    document.getElementById("skillAttendance").value = '';

    // Clear result and message elements
    document.getElementById("result").innerHTML = '';
    document.getElementById("message").innerHTML = '';

    // Hide all GIFs
    document.getElementById("belowGif").style.display = "none";
    document.getElementById("workHardGif").style.display = "none";
    document.getElementById("midRangeGif").style.display = "none";
    document.getElementById("aboveGif").style.display = "none";
    document.getElementById("whistleGif").style.display = "none";
    document.getElementById("below69Gif").style.display = "none";
}
