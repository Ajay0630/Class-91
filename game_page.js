play1name = localStorage.getItem("name1");
play2name = localStorage.getItem("name2");
play1score = 0;
play2score = 0;
document.getElementById("nick1").innerHTML = play1name + ":";
document.getElementById("nick2").innerHTML = play2name + ":";
document.getElementById("nick1score").innerHTML = play1score;
document.getElementById("nick2score").innerHTML = play2score;
document.getElementById("questionplay").innerHTML = "It is " + play1name + "'s turn for question.";
document.getElementById("answerplay").innerHTML = "It is " + play2name + "'s turn for answer.";

function dotheobvious() {
    getWord = document.getElementById("guessthe_").value;
    word = getWord.toLowerCase();
    console.log(word);
    charat1 = word.charAt(1);
    console.log(charat1);
    length_2 = Math.floor(word.length/2);
    charat2 = word.charAt(length_2);
    console.log(charat2);
    lengthminus1 = word.length - 1;
    charat3 = word.charAt(lengthminus1);
    console.log(charat3);
    replace1 = word.replace(charat1, "_");
    replace2 = replace1.replace(charat2, "_");
    replace3 = replace2.replace(charat3, "_");
    console.log(replace3);
    question_word = "<h4 id='word_display'>Q. " + replace3 + "</h4>";
    input_box = "<br><br><input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='checkans()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("guessthe_").value = "";
    word = "";
}