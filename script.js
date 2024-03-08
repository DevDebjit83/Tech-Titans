function suggestJobOpportunities() {
    var class10Marks = document.getElementById('class10').value;
    var class12Marks = document.getElementById('class12').value;
    var ugMarks = document.getElementById('ug').value;
    var pgMarks = document.getElementById('pg').value;
    var stream = document.getElementById('stream').value;

    var resultDiv = document.getElementById('result');

    try {
        class10Marks = parseFloat(class10Marks);
        class12Marks = parseFloat(class12Marks);
        ugMarks = parseFloat(ugMarks);
        pgMarks = parseFloat(pgMarks);
    } catch (error) {
        resultDiv.innerHTML = "Please enter valid numeric marks.";
        return;
    }

    // Job suggestion logic based on marks and stream
    if (stream.toLowerCase() === "science") {
        if (class12Marks >= 75 && ugMarks >= 70 && pgMarks >= 75) {
            resultDiv.innerHTML = "Consider opportunities in research, engineering, or technical roles.Visit the following linkedin profiles(Search them in your respective Linkedin accounts): Codaemon ; Tata Consultancy Servies ; Deloitte ; Wipro ; Onebanc ; Infosys";
        } else {
            resultDiv.innerHTML = "Explore various science-related fields based on your strengths and interests.Visit the following linkedin profiles(Search them in your respective Linkedin accounts): NCR Voyix ; Wells Fargo ; Acutis Diagnostics ; LTI MindTree ; AI Dash ; ZF Group";
        }
    } else if (stream.toLowerCase() === "commerce") {
        if (class12Marks >= 70 && ugMarks >= 75 && pgMarks >= 70) {
          
            resultDiv.innerHTML = "Look into roles in finance, accounting, or business management. Visit the following linkedin profiles(Search them in your respective Linkedin accounts): Vaco Lannick ; The Mason Group- Strategic Search Partners ; Clarity Recruitment ; the CodeWork ||Logistics ; Fintech Technology";
        } else {
            resultDiv.innerHTML ="Consider your skills in areas like finance, marketing, or entrepreneurship. Visit the following linked in profiles(Search them in your respective Linkedin accounts): IDESLABS Private Limited ; Barclays ; Conduent ; Harman International ; EPAM Systems ; Motiva Consulting Limited; Altis recruitment";
           
         
        }
    } else if (stream.toLowerCase() === "arts") {
        if (class12Marks >= 65 && ugMarks >= 70 && pgMarks >= 65) {
            resultDiv.innerHTML = "Explore opportunities in fields like literature, social sciences, or creative arts.";
        } else {
            resultDiv.innerHTML = "Consider your strengths in areas such as writing, communication, or social sciences.";
        }
    } else {
        resultDiv.innerHTML = "Invalid stream. Please enter a valid stream (Science, Commerce, or Arts).";
    }
}