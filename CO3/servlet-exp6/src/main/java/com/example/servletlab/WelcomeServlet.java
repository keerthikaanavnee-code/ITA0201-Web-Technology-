package com.example.servletlab;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.ZoneId;

/** Exercise 6: basic dynamic content generation. */
@WebServlet("/welcome")
public class WelcomeServlet extends HttpServlet {
    private static final DateTimeFormatter DATE_TIME_FORMATTER =
            DateTimeFormatter.ofPattern("dd MMMM yyyy, hh:mm:ss a z")
                    .withZone(ZoneId.systemDefault());

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = HtmlUtil.startPage(response, "Exercise 6 - Dynamic Welcome Servlet");
        String studentName = "Your Name";
        String courseName = "Web Programming with Java Servlets";
        String currentDateTime = DATE_TIME_FORMATTER.format(ZonedDateTime.now());

        out.println("<section class=\"card\">");
        out.println("<p class=\"success\">Welcome to the Servlet laboratory.</p>");
        out.println("<dl>");
        out.println("<dt>Student name</dt><dd>" + HtmlUtil.escape(studentName) + "</dd>");
        out.println("<dt>Course name</dt><dd>" + HtmlUtil.escape(courseName) + "</dd>");
        out.println("<dt>Current date and time</dt><dd>" + HtmlUtil.escape(currentDateTime) + "</dd>");
        out.println("</dl>");
        out.println("<p>Edit <code>studentName</code> and <code>courseName</code> in <code>WelcomeServlet.java</code>.");
        out.println("Refresh the page to see the dynamically generated time.</p>");
        out.println("</section>");
        HtmlUtil.endPage(out);
    }
}
