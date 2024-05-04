var countdownTimer;

function toggleFields() {
    // Toggle fields logic remains the same
}

function showChoices(event) {
    // showChoices function logic remains the same
}

function submitRegistrarForm(event) {
    event.preventDefault();
    var name = document.getElementById("registrarName").value;
    var lastName = document.getElementById("registrarLastName").value;
    document.getElementById("studentName").textContent = "Student: " + name + " " + lastName;
    document.getElementById("registrarForm").style.display = "none";
    document.getElementById("queueForm").style.display = "block";
    startQueueTimer();
    updateQueuePosition(); // Update queue position
}

function submitCashierForm(event) {
    event.preventDefault();
    var name = document.getElementById("cashierName").value;
    var lastName = document.getElementById("cashierLastName").value;
    var studentNameElement = document.getElementById("studentName");
    studentNameElement.textContent = "Student: " + name + " " + lastName;

    var paymentType = document.getElementById("paymentType").value;
    var year = document.getElementById("year").value;
    var course = document.getElementById("course").value;

    document.getElementById("cashierForm").style.display = "none";
    document.getElementById("queueForm").style.display = "block";
    startQueueTimer();
    updateQueuePosition(); // Update queue position
}

function startQueueTimer() {
    // startQueueTimer function logic remains the same
}

function endQueue() {
    // Calculate queue position based on number of submissions
    var positionElement = document.getElementById("position");
    var queueElements = document.querySelectorAll('.queue-item');
    var queuePosition = queueElements.length + 1;
    positionElement.textContent = "Your position in the queue: " + queuePosition;
}

function requeue() {
    clearInterval(countdownTimer);
    startQueueTimer(); // Reset the timer
}

function leave() {
    window.close();
}

function goBack() {
    var onqTechContent = document.getElementById("onqTechContent");
    var registrarForm = document.getElementById("registrarForm");
    var cashierForm = document.getElementById("cashierForm");

    onqTechContent.style.display = "block";
    registrarForm.style.display = "none";
    cashierForm.style.display = "none";
}

function updateQueuePosition() {
    var positionElement = document.getElementById("position");
    var queueElements = document.querySelectorAll('.queue-item');
    var queuePosition = queueElements.length + 1;
    positionElement.textContent = "Your position in the queue: " + queuePosition;
}
