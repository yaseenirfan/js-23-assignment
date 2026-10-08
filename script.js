 // ==========================================
// QUESTION 1: SHOW THE BOX
// ==========================================
let showBoxBtn = document.getElementById("showBoxBtn");

showBoxBtn.onclick = function() {
    let box = document.getElementById("myBox");
    // Adds class if missing, removes if present
    box.classList.toggle("box-visible");
};

// ==========================================
// QUESTION 2: INTERACTIVE IMAGE
// ==========================================
let myImage = document.getElementById("myImage");

myImage.onmouseover = function() {
    myImage.classList.add("image-interactive");
};

myImage.onmouseout = function() {
    myImage.classList.remove("image-interactive");
};

// ==========================================
// QUESTION 3: NOTICE BOARD
// ==========================================
let highlightNoticesBtn = document.getElementById("highlightNoticesBtn");

highlightNoticesBtn.onclick = function() {
    // Select all <p> elements on the page
    let paragraphs = document.getElementsByTagName("p");

    // Loop through paragraphs using .length and [i]
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = "IMPORTANT NOTICE " + (i + 1) + ": Updated!";
        paragraphs[i].className = "notice-highlight";
    }
};

// ==========================================
// QUESTION 4: SECTION HIGHLIGHTER
// ==========================================
let highlightRulesBtn = document.getElementById("highlightRulesBtn");
let highlightCourseBtn = document.getElementById("highlightCourseBtn");

// Function to highlight Student Rules
highlightRulesBtn.onclick = function() {
    // Select the specific rules section by ID
    let rulesSection = document.getElementById("rulesSection");
    
    // Select paragraphs ONLY inside the rules section
    let ruleParagraphs = rulesSection.getElementsByTagName("p");

    for (let i = 0; i < ruleParagraphs.length; i++) {
        ruleParagraphs[i].innerHTML = "<strong>Rule " + (i + 1) + ":</strong> Updated!";
        ruleParagraphs[i].className = "rule-highlight";
    }
};

// Function to highlight Course Information
highlightCourseBtn.onclick = function() {
    // Select the specific course section by ID
    let courseSection = document.getElementById("courseSection");
    
    // Select paragraphs ONLY inside the course section
    let courseParagraphs = courseSection.getElementsByTagName("p");

    for (let i = 0; i < courseParagraphs.length; i++) {
        courseParagraphs[i].innerHTML = "<strong>Module " + (i + 1) + ":</strong> Highlighted!";
        courseParagraphs[i].className = "course-highlight";
    }
};