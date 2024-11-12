function calculateAttendance() {
    // Get the attendance values from the input fields
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

    const attendanceValues = [
        { value: lectureAttendance, weight: 0.93 }, // Lecture: 93% weight
        { value: tutorialAttendance, weight: 0.86 }, // Tutorial: 86% weight
        { value: practicalAttendance, weight: 0.44 }, // Practical: 44% weight
        { value: skillAttendance, weight: 0.25 } // Skill: 25% weight
    ].filter(item => item.value !== null);

    if (attendanceValues.length === 0) {
        result.innerHTML = "<strong>Please enter at least one attendance percentage.</strong>";
        result.style.color = "red";
        return;
    }

    // Calculate weighted attendance
    const weightedSum = attendanceValues.reduce((sum, item) => sum + (item.value * item.weight), 0);
    const totalWeight = attendanceValues.reduce((sum, item) => sum + item.weight, 0);
    const overallPercentage = weightedSum / totalWeight;

    result.style.color = overallPercentage >= 85 ? "green" : "red";
    result.innerHTML = `<strong>Overall Attendance: ${overallPercentage.toFixed(2)}%</strong>`;

    // Hide all GIFs initially
    belowGif.style.display = "none";
    workHardGif.style.display = "none";
    midRangeGif.style.display = "none";
    aboveGif.style.display = "none";
    whistleGif.style.display = "none";
    below69Gif.style.display = "none"; 

    // Display message and corresponding GIF based on overall percentage
    if (overallPercentage >= 90) {
        message.innerHTML = "<strong>Thaggedele💥</strong>";
        message.style.color = "blue";
        whistleGif.style.display = "block";
    } else if (overallPercentage >= 85) {
        message.innerHTML = "<strong>I am Safe 😅</strong>";
        message.style.color = "blue";
        aboveGif.style.display = "block";
    } else if (overallPercentage >= 70) {
        message.innerHTML = "<strong>Attendance Endi Tagge Laga Undi</strong>";
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
