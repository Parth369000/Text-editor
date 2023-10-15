

const forUpper = () => {
var string=document.getElementById("text-box").value;

document.getElementById("text-box").value=string.toUpperCase();
}


const forLower = () => {
    var string=document.getElementById("text-box").value;
    document.getElementById("text-box").value=string.toLowerCase();
}

const remvSpac = () => {
    var string=document.getElementById("text-box").value;
    var regexPattern= /\s+/g;
    document.getElementById("text-box").value = string.replace(/\s+/g, " ");
}

const cpyText = () => {
    var string=document.getElementById("text-box");
    navigator.clipboard.writeText(string.value);
}

const clrText = () => {
    var string=document.getElementById("text-box").value;
    document.getElementById("text-box").value="";
    document.getElementById("search-bar").value="";
    document.getElementById("para-print").innerHTML="";
}

const calcTime = () => {
var string=document.getElementById("text-box").value;

}

var textBox=document.getElementById("text-box");
var wordCountElement = document.getElementById("word-count");
var timeToread = document.getElementById("time-t-read");


textBox.addEventListener("input", () => {
    var text = textBox.value;
    var textLength = text.length;
    // const sentencesPattern = /[.!?](?:s|$)/g;
    // const sentences = text.split(sentencesPattern);
    // const nonEmptySentences = sentences.filter(sentence => sentence.trim() !== '');
    // const sentenceCount = nonEmptySentences.length;

        const sentences = text.split('.');
    
        result = sentences.length;
    var wordCount = countWords(text);
    const readingTime = calculateReadingTime(text);
    timeToread.textContent = readingTime+" minutes to read";
    wordCountElement.textContent = "Total Sentences : "+result+" and Word count: "+wordCount+" and character length : "+ textLength;
});

const countWords = (text) => {
    var words=text.split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

const calculateReadingTime = (text,wpm = 50)  => {
    const wordCount =countWords(text);
    const minutes = wordCount / wpm;
    return minutes;
}

const searchBar = () => {
    var textBox = document.getElementById("text-box");
    var searchTerm = document.getElementById("search-bar").value;
    var paraP = document.getElementById("para-print");
    var inputValue = textBox.value;
    console.log(textBox);

    const pattern = new RegExp(searchTerm,'g');
    const highlightedText = inputValue.replace(pattern, match => `<span class="highlight">${match}</span>`);
    console.log(highlightedText);
    paraP.innerHTML = highlightedText;
}

var changeFontStyle = (font) => {
    document.getElementById("text-box").style.fontFamily = font.value;
}

const bOld = () => {
    // var string=document.getElementById("text-box").innerHTML;
    document.getElementById("text-box").style.fontWeight="bold";
}

const iTalic = () => {
    document.getElementById("text-box").style.fontStyle="italic";
}