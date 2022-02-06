document.getElementById("gpaConverter").addEventListener('click', () => {
    let inputValue = Number(document.getElementById("textInput").value);
    let outputText = document.getElementById("textOutput");

    if (!inputText) {
        outputText.innerHTML = '0';
    } else {
        if (Number(inputText) < 60) outputText.innerHTML = '0';
        else if (inputValue == 60) outputText.innerHTML = '1';
        else if (inputValue > 60 && inputValue <= 62) outputText.innerHTML = '1.3';
        else if (inputValue > 62 && inputValue <= 65) outputText.innerHTML = '1.7';
        else if (inputValue > 65 && inputValue <= 69) outputText.innerHTML = '2';
        else if (inputValue > 69 && inputValue <= 72) outputText.innerHTML = '2.3';
        else if (inputValue > 72 && inputValue <= 75) outputText.innerHTML = '2.7';
        else if (inputValue > 75 && inputValue <= 79) outputText.innerHTML = '3';
        else if (inputValue > 79 && inputValue <= 84) outputText.innerHTML = '3.3';
        else if (inputValue > 84 && inputValue <= 89) outputText.innerHTML = '3.7';
        else if (inputValue > 89 && inputValue <= 100) outputText.innerHTML = '3.7';
    }
})

document.getElementById("getCgpa").addEventListener('click', () => {
    let subjectCredit = Number(document.getElementById("subject_credit").value);
    let subjectGpa = Number(document.getElementById("subject_gpa").value);

    document.getElementById("gpa-show").innerHTML = subjectGpa;
    document.getElementById("credit-show").innerHTML = subjectCredit;
    document.getElementById("gpaXcredit-show").innerHTML = subjectGpa * subjectCredit;

    let sumOfCredit = parseFloat(document.getElementById("sumCredit-show").innerText);
    sumOfCredit = sumOfCredit + subjectCredit;
    document.getElementById("sumCredit-show").innerHTML = sumOfCredit;

    let sumOfGpaXcredit = parseFloat(document.getElementById("sumGpaCredit-show").innerText);
    sumOfGpaXcredit = sumOfGpaXcredit + (subjectCredit * subjectGpa);
    document.getElementById("sumGpaCredit-show").innerHTML = sumOfGpaXcredit;

    let overallCgpa = sumOfGpaXcredit / sumOfCredit;
    document.getElementById("overallGpa-show").innerHTML = overallCgpa;
})