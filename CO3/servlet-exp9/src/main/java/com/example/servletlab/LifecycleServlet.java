package com.example.servletlab;

import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.concurrent.atomic.AtomicInteger;

/** Exercise 9: servlet lifecycle demonstration. */
@WebServlet(value = "/lifecycle", loadOnStartup = 1)
public class LifecycleServlet extends HttpServlet {
    private static final AtomicInteger CONSTRUCTOR_COUNT = new AtomicInteger();
    private static final AtomicInteger DESTROY_COUNT = new AtomicInteger();

    private final AtomicInteger initCount = new AtomicInteger();
    private final AtomicInteger serviceCount = new AtomicInteger();
    private final AtomicInteger doGetCount = new AtomicInteger();

    public LifecycleServlet() {
        int count = CONSTRUCTOR_COUNT.incrementAndGet();
        System.out.println("[LifecycleServlet] constructor() executed. Count = " + count);
    }

    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        int count = initCount.incrementAndGet();
        System.out.println("[LifecycleServlet] init() executed. Count = " + count);
    }

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int count = serviceCount.incrementAndGet();
        System.out.println("[LifecycleServlet] service() executed. Count = " + count);
        super.service(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int count = doGetCount.incrementAndGet();
        System.out.println("[LifecycleServlet] doGet() executed. Count = " + count);

        PrintWriter out = HtmlUtil.startPage(response, "Exercise 9 - Servlet Lifecycle");
        out.println("<section class=\"card\">");
        out.println("<p>Refresh this page several times and observe the Eclipse/Tomcat console.</p>");
        out.println("<table><thead><tr><th>Lifecycle method</th><th>Count in this servlet instance</th></tr></thead><tbody>");
        out.println("<tr><th>constructor()</th><td>" + CONSTRUCTOR_COUNT.get() + "</td></tr>");
        out.println("<tr><th>init()</th><td>" + initCount.get() + "</td></tr>");
        out.println("<tr><th>service()</th><td>" + serviceCount.get() + "</td></tr>");
        out.println("<tr><th>doGet()</th><td>" + doGetCount.get() + "</td></tr>");
        out.println("<tr><th>destroy()</th><td>" + DESTROY_COUNT.get() + "</td></tr>");
        out.println("</tbody></table>");
        out.println("<p><strong>Expected behavior:</strong> the constructor and init usually run once per servlet instance; "
                + "service and doGet run for requests; destroy is logged when Tomcat stops or redeploys the application.</p>");
        out.println("</section>");
        HtmlUtil.endPage(out);
    }

    @Override
    public void destroy() {
        int count = DESTROY_COUNT.incrementAndGet();
        System.out.println("[LifecycleServlet] destroy() executed. Count = " + count);
        super.destroy();
    }
}
