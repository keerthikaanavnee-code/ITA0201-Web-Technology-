package com.example.servletlab;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

/** Exercise 10: deliberately unsafe counter for comparison. */
@WebServlet("/unsafe-counter")
public class UnsafeCounterServlet extends HttpServlet {
    private int visitorCount;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // This read-modify-write sequence is not atomic and is intentionally unsafe.
        int current = visitorCount;
        Thread.yield();
        visitorCount = current + 1;

        PrintWriter out = HtmlUtil.startPage(response, "Exercise 10 - Unsafe Counter");
        out.println("<section class=\"card\">");
        out.println("<p class=\"warning\">Unsafe counter value: <strong>" + visitorCount + "</strong></p>");
        out.println("<p>This servlet stores request-shared state in an ordinary instance variable. "
                + "Two request threads can read the same value before either writes the incremented value, "
                + "so updates can be lost under concurrent access.</p>");
        out.println("<p>Open the safe version at <a href=\"safe-counter\">/safe-counter</a>.</p>");
        out.println("</section>");
        HtmlUtil.endPage(out);
    }
}
