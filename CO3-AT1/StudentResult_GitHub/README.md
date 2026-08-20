# Student Result Processing - Java Servlet

A simple student result processing web application using HTML and Jakarta Servlet.

## Features
- HTML form using POST
- Servlet `doPost()` processing
- `request.getParameter()` parameter handling
- Validation for missing values and marks outside 0-100
- Total, Average and Highest Mark calculation
- Pass/Fail status
- Dynamic result generation using `PrintWriter`
- Request-specific data stored in local variables

## Technologies
HTML5, CSS3, Java, Jakarta Servlet, Eclipse IDE, Apache Tomcat 10.1+ / Tomcat 11

## Project Structure
```text
StudentResult/
├── src/com/studentresult/StudentResultServlet.java
├── WebContent/index.html
├── WebContent/WEB-INF/web.xml
└── README.md
```

## How to Run
1. Open/import the project in Eclipse as a Dynamic Web Project.
2. Configure Apache Tomcat 10.1+ or Tomcat 11.
3. Run the project on the Tomcat server.
4. Open `http://localhost:8080/StudentResult/`.

## Note
This project uses `jakarta.servlet.*` and requires Tomcat 10.1+ / Tomcat 11.
