// Function to continue with the next step of the form


function nextStep() {
    let whichTopicsTab = document.getElementById("whichtopics");
    let registerTab = document.getElementById("register");
    let summaryTab = document.getElementById("summary");

    if (registerTab.style.display !== 'none') {
        registerTab.style.display = 'none';
        whichTopicsTab.style.display = 'flex';


        let stepsText = document.querySelector('.steps p');
        if (stepsText) {
            stepsText.textContent = 'Step 2 of 3';
        }

        let currentStep = document.querySelector('.step.current');
        if (currentStep) {
            currentStep.classList.remove('current');
            currentStep.classList.add('prev');
        }
        
        let nextStep = currentStep.nextElementSibling;
        if (nextStep.classList.contains('step')) {
        nextStep.classList.add('current');
        }


    } 
    else if (whichTopicsTab.style.display !== 'none') {
        whichTopicsTab.style.display = 'none';
        summaryTab.style.display = 'flex';
        currentStep = document.querySelector('.step.current');
        if (currentStep) {
            currentStep.classList.remove('current');
            currentStep.classList.add('prev');
        }
        
        nextStep = currentStep.nextElementSibling;
        if (nextStep.classList.contains('step')) {
        nextStep.classList.add('current');
        }

        stepsText = document.querySelector('.steps p');
        if (stepsText) {
            stepsText.textContent = 'Step 3 of 3';
        }
    }
}


function check1(event) {
    event.preventDefault();
    let inputText1 = document.getElementById("email").value;
    console.log(inputText1)
    let emailFormat =  /\S+@\S+\.\S+/;
    if (inputText1 != "") {
        if (inputText1.match(emailFormat)) {
            console.log("Valid address");
            nextStep();
            return true;
        } else {
            alert("Invalid email!");
            return false;
        }
    }
}

function check2(event){
    event.preventDefault();
    let opciones = document.querySelectorAll('input[name="opciones"]');
    let selection = false;
    opciones.forEach(opcion => {
        if (opcion.checked) {
            selection = true;
        }
    }
    );
    if (selection) {
        nextStep();
    } else {
        alert ("Please select one option to continue.")
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    let selectedLabel = null;
    
    radioInputs.forEach(function(input) {
        input.addEventListener('change', function() {
            const currentLabel = input.closest('.opciones');
            
            if (selectedLabel !== null) {
                // Reset label style
                selectedLabel.style.backgroundColor = '';
                selectedLabel.style.color = '';
            }
            
            if (input.checked) {
                // Apply style
                currentLabel.style.backgroundColor = '#652CD1';
                currentLabel.style.color = '#E5E7EB';
                selectedLabel = currentLabel;
            } else {
                selectedLabel = null;
            }
        });
    });
});

function summary(){
    let inputText1 = document.getElementById("nameInput").value;
    let inputText2 = document.getElementById("email").value;
    let selectedTopic = document.querySelector('input[name="opciones"]:checked');
    let topicValue = selectedTopic.value;

    document.getElementById('nameData').textContent = inputText1;
    document.getElementById('emailData').textContent = inputText2;
    document.getElementById('topicChoiceSelected').textContent = topicValue;
}

function popUp(event){
    event.preventDefault();
    let popUp = document.getElementById("pop");
    popUp.style.display = 'flex';
}

function resetPage(event) {
    event.preventDefault();
    location.reload();
}