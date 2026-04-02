const buttonsEL = document.querySelectorAll("button");
const inputfield = document.getElementById("result");

buttonsEL.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            clearResult();
        } else if (value === "DEL") {
            deleteLast();
        } else if (value === "=") {
            calculateResult();
        } else {
            appendValue(value);
        }
    });
});

function clearResult() {
    inputfield.value = "";
}

function deleteLast() {
    inputfield.value = inputfield.value.slice(0, -1);
}

function calculateResult() {
    try {
        inputfield.value = eval(inputfield.value);
    } catch {
        inputfield.value = "Error";
    }
}

function appendValue(value) {
    const lastChar = inputfield.value.slice(-1);

    if ("+-*/".includes(lastChar) && "+-*/".includes(value)) {
        return;
    }

    inputfield.value += value;
}

// ⌨️ Keyboard support
document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === "Enter") {
        calculateResult();
    } else if (e.key === "Backspace") {
        deleteLast();
    } else if (e.key === "Escape") {
        clearResult();
    }
});