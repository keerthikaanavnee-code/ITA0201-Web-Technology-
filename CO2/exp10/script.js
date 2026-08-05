function testConsole() {
    console.log("--- Debugging Session Started ---");
    const student = {
        name: "Alex",
        id: "STU001",
        grades: [85, 90, 78]
    };
    console.table(student);
    console.info("You can use console.table() to view objects clearly!");
    alert("Check the console (F12) to see the output!");
}

function testError() {
    const display = document.getElementById('error-display');
    display.style.display = 'block';
    
    try {
        // Intentional error: calling a function that doesn't exist
        nonExistentFunction();
    } catch (err) {
        console.error("Caught an error:", err.message);
        display.className = 'status-msg error';
        display.innerText = "Error caught: " + err.message;
    }
}

function testDebugger() {
    console.log("The debugger will pause execution if DevTools is open.");
    alert("If you have DevTools open, the code will pause now.");
    debugger; // Execution stops here
    console.log("Execution resumed.");
}

function fixCSS() {
    const box = document.getElementById('css-box');
    box.style.background = "#ffffff";
    box.style.color = "#334155";
    box.style.textAlign = "center";
    
    const msg = document.createElement('p');
    msg.className = "status-msg success";
    msg.style.display = "block";
    msg.innerText = "CSS Fixed via JavaScript DOM manipulation!";
    box.appendChild(msg);
}

// Log a message on load
window.onload = () => {
    console.log("Welcome to the Debugging Lab. Press F12 to start.");
};
