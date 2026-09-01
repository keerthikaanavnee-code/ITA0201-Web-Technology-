package controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import model.ServiceRequest;

@WebServlet("/ServiceRequestServlet")
public class ServiceRequestServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        String employeeId = request.getParameter("employeeId");
        String employeeName = request.getParameter("employeeName");
        String department = request.getParameter("department");
        String problemCategory = request.getParameter("problemCategory");
        String problemDescription = request.getParameter("problemDescription");
        String priority = request.getParameter("priority");

        // Validate all fields
        if (employeeId == null || employeeId.trim().isEmpty()
                || employeeName == null || employeeName.trim().isEmpty()
                || department == null || department.trim().isEmpty()
                || problemCategory == null || problemCategory.trim().isEmpty()
                || problemDescription == null || problemDescription.trim().isEmpty()
                || priority == null || priority.trim().isEmpty()) {

            request.setAttribute(
                    "errorMessage",
                    "Please fill in all required fields."
            );

            RequestDispatcher dispatcher =
                    request.getRequestDispatcher("serviceRequest.jsp");

            dispatcher.forward(request, response);
            return;
        }

        ServletContext context = getServletContext();

        String requestNumber;
        ServiceRequest serviceRequest;

        synchronized (context) {

            Integer requestCounter =
                    (Integer) context.getAttribute("requestCounter");

            // First request will be SR-1001
            if (requestCounter == null) {
                requestCounter = 1000;
            }

            requestCounter++;

            context.setAttribute(
                    "requestCounter",
                    requestCounter
            );

            requestNumber = "SR-" + requestCounter;

            // Create Service Request object
            serviceRequest = new ServiceRequest(
                    requestNumber,
                    employeeId.trim(),
                    employeeName.trim(),
                    department.trim(),
                    problemCategory.trim(),
                    problemDescription.trim(),
                    priority.trim()
            );

            List<ServiceRequest> requestList =
                    (List<ServiceRequest>)
                    context.getAttribute("requestList");

            // Create the list for the first request
            if (requestList == null) {

                requestList = new ArrayList<>();

                context.setAttribute(
                        "requestList",
                        requestList
                );
            }

            // Add request to list
            requestList.add(serviceRequest);
        }

        // Send request data to acknowledgement.jsp
        request.setAttribute(
                "serviceRequest",
                serviceRequest
        );

        request.setAttribute(
                "requestNumber",
                requestNumber
        );

        RequestDispatcher dispatcher =
                request.getRequestDispatcher(
                        "acknowledgement.jsp"
                );

        dispatcher.forward(request, response);
    }
}