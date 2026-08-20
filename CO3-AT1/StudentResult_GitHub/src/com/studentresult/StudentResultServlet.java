package com.studentresult;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/student-result")
public class StudentResultServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Request-specific data is stored in local variables.
        String name = request.getParameter("name");
        String regno = request.getParameter("regno");
        String mark1Text = request.getParameter("mark1");
        String mark2Text = request.getParameter("mark2");
        String mark3Text = request.getParameter("mark3");

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        out.println("<!DOCTYPE html>");
        out.println("<html><head><title>Student Result</title>");
        out.println("<style>");
        out.println("body{font-family:Arial;background:#f2f2f2;padding:30px;}");
        out.println(".result{width:450px;margin:auto;background:white;padding:25px;border-radius:10px;box-shadow:0 0 10px #999;}");
        out.println(".pass{color:green;font-weight:bold;}");
        out.println(".fail{color:red;font-weight:bold;}");
        out.println("</style></head><body>");

        if (isBlank(name) || isBlank(regno) ||
            isBlank(mark1Text) || isBlank(mark2Text) || isBlank(mark3Text)) {

            out.println("<div class='result'>");
            out.println("<h2>Validation Error</h2>");
            out.println("<p>Please provide all required values.</p>");
            out.println("<a href='index.html'>Go Back</a>");
            out.println("</div></body></html>");
            return;
        }

        try {
            int mark1 = Integer.parseInt(mark1Text);
            int mark2 = Integer.parseInt(mark2Text);
            int mark3 = Integer.parseInt(mark3Text);

            if (mark1 < 0 || mark1 > 100 ||
                mark2 < 0 || mark2 > 100 ||
                mark3 < 0 || mark3 > 100) {

                out.println("<div class='result'>");
                out.println("<h2>Validation Error</h2>");
                out.println("<p>Marks must be between 0 and 100.</p>");
                out.println("<a href='index.html'>Go Back</a>");
                out.println("</div></body></html>");
                return;
            }

            int total = mark1 + mark2 + mark3;
            double average = total / 3.0;
            int highest = Math.max(mark1, Math.max(mark2, mark3));

            // Pass if the student scores at least 40 in every subject.
            boolean passed = mark1 >= 40 && mark2 >= 40 && mark3 >= 40;

            out.println("<div class='result'>");
            out.println("<h2>Student Result</h2>");
            out.println("<p><b>Name:</b> " + escapeHtml(name) + "</p>");
            out.println("<p><b>Register Number:</b> " + escapeHtml(regno) + "</p>");
            out.println("<p><b>Subject 1:</b> " + mark1 + "</p>");
            out.println("<p><b>Subject 2:</b> " + mark2 + "</p>");
            out.println("<p><b>Subject 3:</b> " + mark3 + "</p>");
            out.println("<hr>");
            out.println("<p><b>Total:</b> " + total + " / 300</p>");
            out.println("<p><b>Average:</b> " + String.format("%.2f", average) + "</p>");
            out.println("<p><b>Highest Mark:</b> " + highest + "</p>");

            if (passed) {
                out.println("<p class='pass'>Status: PASS</p>");
            } else {
                out.println("<p class='fail'>Status: FAIL</p>");
            }

            out.println("<a href='index.html'>Process Another Student</a>");
            out.println("</div></body></html>");

        } catch (NumberFormatException e) {
            out.println("<div class='result'>");
            out.println("<h2>Validation Error</h2>");
            out.println("<p>Marks must be valid numbers.</p>");
            out.println("<a href='index.html'>Go Back</a>");
            out.println("</div></body></html>");
        }
    }

    private boolean isBlank(String value) {
        return value == null || value.trim().isEmpty();
    }

    private String escapeHtml(String value) {
        return value.replace("&", "&amp;")
                    .replace("<", "&lt;")
                    .replace(">", "&gt;")
                    .replace(""", "&quot;")
                    .replace("'", "&#39;");
    }
}
