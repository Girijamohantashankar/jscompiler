// Default answers for the editors
var defaultCode1 = `// Answer for the first question
console.log("Hello from the first question!");`;


// Initialize the first CodeMirror instance
var editor1 = CodeMirror.fromTextArea(document.getElementById("code1"), {
    lineNumbers: true,
    mode: "javascript",
    theme: "default"
});



// Function to handle code execution
function runCode(editor, outputElementId) {
    var code = editor.getValue();
    var output = document.getElementById(outputElementId);

    try {
        var log = [];
        var originalConsoleLog = console.log;
        console.log = function (message) {
            log.push(message);
        };
        var result = eval(code);
        output.textContent = log.join("\n") + (result !== undefined ? "\n" + result : '');
    } catch (error) {
        output.textContent = error;
    } finally {
        console.log = originalConsoleLog;
    }
}

// Attach event listener to the first run button
document.getElementById("run-button1").addEventListener("click", function () {
    runCode(editor1, "output1");
});



// Function to show the default code
function showDefaultCode(editor, defaultCode) {
    editor.setValue(defaultCode);
}

// Attach event listener to the first show answer button
document.getElementById("show-answer-button1").addEventListener("click", function () {
    showDefaultCode(editor1, defaultCode1);
});

