
var array = [];
var answers = [];
$(document).ready(function () {
    jQuery.ajax({
        url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/quiz',
        type: 'GET',
        success: function (data) {

            array = data;
            console.log(array)
            array.forEach(function (element, i) {
                answers.push(element.answer)
                $(`.box:nth-child(${i + 1}) h3`).text(
                    `Q${i + 1}.` + array[i].question
                );
                array[i].options.forEach((option, j) => {
                    var newdiv = document.createElement("div");
                    newdiv.classList.add('option1');
                    var point = document.createElement("input");
                    point.type = 'radio';
                    point.name = 'name' + i;
                    point.value = j + 1;
                    point.id = j;
                    point.required = true;
                    point.classList.add("answer");
                    var optionText = document.createElement('label');
                    optionText.classList.add("options");
                    optionText.innerText = option;
                    newdiv.appendChild(point);
                    newdiv.appendChild(optionText);
                    $(`.box:nth-child(${i + 1})`).append(newdiv)
                })
            });

        }
    })

})


var elem = document.getElementById("marks");
elem.innerHTML = 0 + "/5";

var submitQuiz = () => {

    var OptionInput = document.querySelectorAll("input[type=radio]:checked");
    let score = 0; 
    for (i = 0; i < OptionInput.length; i++) {
        if (OptionInput[i].value == answers[OptionInput[i].id]){
            score++
        }
        console.log(score)
}
let elem = document.getElementById("marks");
elem.innerHTML = score + "/5";
}

