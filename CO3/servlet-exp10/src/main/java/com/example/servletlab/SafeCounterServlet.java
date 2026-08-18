package com.example.servletlab;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.concurrent.atomic.AtomicInteger;

/** Exercise 10: thread-safe visitor counter. */
@WebServlet("/safe-counter")
public class SafeCounterServlet extends HttpServlet {
    private final AtomicInteger visitorCount = new AtomicInteger();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int currentValue = visitorCount.incrementAndGet();

        PrintWriter out = HtmlUtil.startPage(response, "Exercise 10 - Thread-Safe Counter");
        out.println("<section class=\"card\">");
        out.println("<p class=\"success\">Thread-safe counter value: <strong>" + currentValue + "</strong></p>");
        out.println("<p><code>AtomicInteger.incrementAndGet()</code> performs the increment as one atomic operation, "
                + "so concurrent request threads do not overwrite one another's updates.</p>");
        out.println("<p>Compare it with the <a href=\"unsafe-counter\">unsafe counter</a>.</p>");
        out.println("</section>");
        HtmlUtil.endPage(out);
    }
}
