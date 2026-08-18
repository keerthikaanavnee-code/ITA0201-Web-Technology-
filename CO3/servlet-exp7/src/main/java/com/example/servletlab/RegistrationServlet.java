package com.example.servletlab;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.LinkedHashMap;
import java.util.Map;

/** Exercise 7: student registration form processing. */
@WebServlet("/register")
public class RegistrationServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");

        Map<String, String> values = new LinkedHashMap<>();
        values.put("Student name", clean(request.getParameter("studentName")));
        values.put("Register number", clean(request.getParameter("registerNumber")));
        values.put("Email", clean(request.getParameter("email")));
        values.put("Department", clean(request.getParameter("department")));
        values.put("Semester", clean(request.getParameter("semester")));

        boolean valid = values.values().stream().allMatch(value -> !value.isBlank());
        PrintWriter out = HtmlUtil.startPage(response, "Exercise 7 - Registration Result");
        out.println("<section class=\"card\">");

        if (!valid) {
            out.println("<p class=\"error\">Registration failed. Please complete every field.</p>");
            out.println("<p><a class=\"button\" href=\"registration.html\">Return to form</a></p>");
        } else {
            out.println("<p class=\"success\">Registration submitted successfully.</p>");
            out.println("<table><thead><tr><th>Field</th><th>Submitted value</th></tr></thead><tbody>");
            for (Map.Entry<String, String> entry : values.entrySet()) {
                out.println("<tr><th>" + HtmlUtil.escape(entry.getKey()) + "</th><td>"
                        + HtmlUtil.escape(entry.getValue()) + "</td></tr>");
            }
            out.println("</tbody></table>");
            out.println("<p><a class=\"button\" href=\"registration.html\">Register another student</a></p>");
        }

        out.println("</section>");
        HtmlUtil.endPage(out);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        response.sendRedirect(request.getContextPath() + "/registration.html");
    }

    private String clean(String value) {
        return value == null ? "" : value.trim();
    }
}
