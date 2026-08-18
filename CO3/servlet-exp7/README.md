# Experiment 7 - Student Registration Form Processing

This is a standalone Maven web project for Apache Tomcat 11.

## Included files

- `pom.xml`
- `src/main/java/com/example/servletlab/HtmlUtil.java`
- `src/main/java/com/example/servletlab/RegistrationServlet.java`
- `src/main/webapp/index.html` — the registration form
- `src/main/webapp/style.css`
- `src/main/webapp/WEB-INF/web.xml`

## Run

Import the extracted folder into Eclipse as an existing Maven project or copy it into a Dynamic Web Project targeted to Tomcat 11. Run it on the server and open `/servlet-exp7/`. Submit the form to test POST processing and empty-field validation.

Tomcat 11 requires the `jakarta.servlet.*` namespace. The Maven dependency is already included in `pom.xml`.
