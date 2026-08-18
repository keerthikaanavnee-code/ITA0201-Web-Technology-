package com.example.servletlab;

import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/** Shared helpers for safe output and consistent pages. */
public final class HtmlUtil {
    private HtmlUtil() {
    }

    public static PrintWriter startPage(HttpServletResponse response, String title) throws IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE html>");
        out.println("<html lang=\"en\"><head><meta charset=\"UTF-8\">");
        out.println("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
        out.println("<title>" + escape(title) + "</title>");
        out.println("<link rel=\"stylesheet\" href=\"" + response.encodeURL("style.css") + "\">");
        out.println("</head><body><main class=\"container\">");
        out.println("<p><a href=\"" + response.encodeURL("index.html") + "\">&larr; Home</a></p>");
        out.println("<h1>" + escape(title) + "</h1>");
        return out;
    }

    public static void endPage(PrintWriter out) {
        out.println("</main></body></html>");
    }

    public static String escape(String value) {
        if (value == null) {
            return "";
        }
        return value.replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;")
                .replace("'", "&#39;");
    }
}
