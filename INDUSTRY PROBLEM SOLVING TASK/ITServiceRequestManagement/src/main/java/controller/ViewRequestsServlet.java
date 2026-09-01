package controller;

import java.io.IOException;
import java.util.List;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import model.ServiceRequest;

@WebServlet("/ViewRequestsServlet")
public class ViewRequestsServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        List<ServiceRequest> requestList =
                (List<ServiceRequest>)
                getServletContext()
                        .getAttribute("requestList");

        request.setAttribute(
                "requestList",
                requestList
        );

        RequestDispatcher dispatcher =
                request.getRequestDispatcher(
                        "requests.jsp"
                );

        dispatcher.forward(request, response);
    }
}