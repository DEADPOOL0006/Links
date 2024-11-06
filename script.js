function calculateAttendance() {
    const lectureAttendance = parseFloat(document.getElementById("lectureAttendance").value) || null;
    const tutorialAttendance = parseFloat(document.getElementById("tutorialAttendance").value) || null;
    const practicalAttendance = parseFloat(document.getElementById("practicalAttendance").value) || null;
    const skillAttendance = parseFloat(document.getElementById("skillAttendance").value) || null;

    const result = document.getElementById("result");
    const message = document.getElementById("message");
    const belowGif = document.getElementById("belowGif");
    const aboveGif = document.getElementById("aboveGif");

    const attendanceValues = [lectureAttendance, tutorialAttendance, practicalAttendance, skillAttendance].filter(value => value !== null);

    if (attendanceValues.length === 0) {
        result.innerHTML = "<strong>Please enter at least one attendance percentage.</strong>";
        result.style.color = "red";
        return;
    }

    const overallPercentage = attendanceValues.reduce((sum, value) => sum + value, 0) / attendanceValues.length;

    result.style.color = overallPercentage >= 85 ? "green" : "red";
    result.innerHTML = `<strong>Overall Attendance: ${overallPercentage.toFixed(2)}%</strong>`;

    // Show or hide GIFs and messages based on attendance percentage
    if (overallPercentage < 85) {
        message.innerHTML = "<strong>⚠️ MAVA, NUVU CLASSES KI VELLALI!</strong>";
        message.style.color = "orange";
        belowGif.style.display = "block";
        aboveGif.style.display = "none";
    } else {
        message.innerHTML = "<strong>SUPER MAVA 🤩</strong>";
        message.style.color = "green";
        belowGif.style.display = "none";
        aboveGif.style.display = "block";
    }
}

function resetFields() {
    document.getElementById("lectureAttendance").value = "";
    document.getElementById("tutorialAttendance").value = "";
    document.getElementById("practicalAttendance").value = "";
    document.getElementById("skillAttendance").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("message").innerHTML = ""; 
    document.getElementById("belowGif").style.display = "none"; 
    document.getElementById("aboveGif").style.display = "none"; 
}
