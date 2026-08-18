# Experiment 10 - Thread-Safe Concurrent Visitor Counter

This is a standalone Maven web project for Apache Tomcat 11.

## Included files

- `pom.xml`
- `src/main/java/com/example/servletlab/HtmlUtil.java`
- `src/main/java/com/example/servletlab/UnsafeCounterServlet.java`
- `src/main/java/com/example/servletlab/SafeCounterServlet.java`
- `src/main/webapp/index.html`
- `src/main/webapp/style.css`
- `src/main/webapp/WEB-INF/web.xml`

## Run

Import the extracted folder into Eclipse as an existing Maven project or copy it into a Dynamic Web Project targeted to Tomcat 11. Run it on the server and open `/servlet-exp10/`. The home page links to both counter versions.

The unsafe servlet demonstrates a race condition on a shared instance variable. The safe servlet uses `AtomicInteger.incrementAndGet()`.

Tomcat 11 requires the `jakarta.servlet.*` namespace. The Maven dependency is already included in `pom.xml`.
