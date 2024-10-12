<!DOCTYPE html>
<html>
<head>
  <title>My First JavaScript Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p id="myParagraph"></p>

  <script>
    // Get a reference to the paragraph element
    const paragraph = document.getElementById("myParagraph");

    // Create a message
    const message = "This text was added using JavaScript.";

    // Set the content of the paragraph to the message
    paragraph.textContent = message;
  </script>
</body>
</html>
