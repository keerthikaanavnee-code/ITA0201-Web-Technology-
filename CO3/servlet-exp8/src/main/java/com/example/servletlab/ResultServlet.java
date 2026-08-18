package com.example.servletlab;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

/** Exercise 8: online student result processing. */
@WebServlet("/result")
public class ResultServlet extends HttpServlet {
    private static final String[] SUBJECTS = {
            "Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"
    };

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String studentName = clean(request.getParameter("studentName"));
        String registerNumber = clean(request.getParameter("registerNumber"));
        List<String> errors = new ArrayList<>();

        if (studentName.isBlank()) {
            errors.add("Student name is required.");
        }
        if (registerNumber.isBlank()) {
            errors.add("Register number is required.");
        }

        int[] marks = new int[SUBJECTS.length];
        for (int i = 0; i < SUBJECTS.length; i++) {
            String rawMark = clean(request.getParameter("subject" + (i + 1)));
            if (rawMark.isBlank()) {
                errors.add(SUBJECTS[i] + " is required.");
                continue;
            }
            try {
                marks[i] = Integer.parseInt(rawMark);
                if (marks[i] < 0 || marks[i] > 100) {
                    errors.add(SUBJECTS[i] + " must be between 0 and 100.");
                }
            } catch (NumberFormatException exception) {
                errors.add(SUBJECTS[i] + " must be a whole number.");
            }
        }

        PrintWriter out = HtmlUtil.startPage(response, "Exercise 8 - Result Report");
        out.println("<section class=\"card\">");
        if (!errors.isEmpty()) {
            out.println("<p class=\"error\">The result could not be calculated.</p><ul>");
            for (String error : errors) {
                out.println("<li>" + HtmlUtil.escape(error) + "</li>");
            }
            out.println("</ul><p><a class=\"button\" href=\"result.html\">Return to form</a></p>");
        } else {
            int total = 0;
            int highest = marks[0];
            int lowest = marks[0];
            boolean passed = true;

            for (int mark : marks) {
                total += mark;
                highest = Math.max(highest, mark);
                lowest = Math.min(lowest, mark);
                if (mark < 40) {
                    passed = false;
                }
            }

            double average = total / (double) marks.length;
            String grade = calculateGrade(average, passed);

            out.println("<p class=\"success\">Result calculated successfully.</p>");
            out.println("<table><thead><tr><th>Student</th><th>Register number</th></tr></thead><tbody>");
            out.println("<tr><td>" + HtmlUtil.escape(studentName) + "</td><td>"
                    + HtmlUtil.escape(registerNumber) + "</td></tr></tbody></table>");
            out.println("<table><thead><tr><th>Subject</th><th>Mark</th></tr></thead><tbody>");
            for (int i = 0; i < SUBJECTS.length; i++) {
                out.println("<tr><td>" + SUBJECTS[i] + "</td><td>" + marks[i] + "</td></tr>");
            }
            out.println("</tbody></table>");
            out.println("<table><thead><tr><th>Total</th><th>Average</th><th>Highest</th><th>Lowest</th><th>Grade</th><th>Status</th></tr></thead><tbody>");
            out.println("<tr><td>" + total + "/500</td><td>" + String.format("%.2f", average)
                    + "</td><td>" + highest + "</td><td>" + lowest + "</td><td>" + grade
                    + "</td><td>" + (passed ? "PASS" : "FAIL") + "</td></tr>");
            out.println("</tbody></table>");
            out.println("<p><small>Policy used: a student passes only when every subject mark is at least 40. "
                    + "Grade bands are A (90+), B (75-89), C (60-74), D (50-59), E (40-49), and F (below 40 or failed).</small></p>");
            out.println("<p><a class=\"button\" href=\"result.html\">Process another result</a></p>");
        }
        out.println("</section>");
        HtmlUtil.endPage(out);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        response.sendRedirect(request.getContextPath() + "/result.html");
    }

    private String calculateGrade(double average, boolean passed) {
        if (!passed) {
            return "F";
        }
        if (average >= 90) {
            return "A";
        }
        if (average >= 75) {
            return "B";
        }
        if (average >= 60) {
            return "C";
        }
        if (average >= 50) {
            return "D";
        }
        return "E";
    }

    private String clean(String value) {
        return value == null ? "" : value.trim();
    }
}
