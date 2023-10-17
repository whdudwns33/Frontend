for (let i = 2; i < 10; i++) {
    document.write("<div class = 'container'>");
    document.write("<div class = 'test'>");
    for (let j = 1; j <10; j ++) {
        document.write("<p class = 'rst'>" + i + " X " + j + " = " + i*j + "</p>");
    }
    document.write("</div>");
    document.write("</div>");

}