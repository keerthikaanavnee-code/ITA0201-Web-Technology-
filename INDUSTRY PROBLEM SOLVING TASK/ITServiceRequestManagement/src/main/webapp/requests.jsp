<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ page import="java.util.List" %>
<%@ page import="model.ServiceRequest" %>

<!DOCTYPE html>
<html>

<head>

    <meta charset="UTF-8">

    <title>All Service Requests</title>

    <style>

        * {
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            margin: 0;
            min-height: 100vh;

            background:
                radial-gradient(circle at 10% 10%, #d9d7ff 0, transparent 25%),
                radial-gradient(circle at 90% 20%, #ffd9e8 0, transparent 22%),
                radial-gradient(circle at 85% 85%, #cceff0 0, transparent 25%),
                linear-gradient(135deg, #f8f7ff, #fff7f9, #f4fbff);

            padding: 40px 20px;
        }

        .container {
            max-width: 1200px;
            margin: auto;

            background: rgba(255, 255, 255, 0.90);

            border-radius: 28px;

            padding: 40px;

            box-shadow: 0 20px 50px rgba(120, 110, 160, 0.15);
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-bottom: 35px;

            flex-wrap: wrap;
            gap: 20px;
        }

        h1 {
            margin: 0;
            color: #4f4b83;
        }

        .subtitle {
            color: #817b93;
            margin-top: 8px;
        }

        .new-request {
            text-decoration: none;

            background: linear-gradient(
                135deg,
                #8f93dc,
                #a49be8
            );

            color: white;

            padding: 14px 22px;

            border-radius: 12px;

            font-weight: bold;

            box-shadow: 0 8px 18px rgba(130, 120, 210, 0.25);

            transition: 0.3s;
        }

        .new-request:hover {
            transform: translateY(-3px);
        }

        .table-container {
            overflow-x: auto;

            border-radius: 18px;

            border: 1px solid #e8e4f0;
        }

        table {
            width: 100%;

            border-collapse: collapse;

            min-width: 950px;
        }

        th {
            background: linear-gradient(
                135deg,
                #ebe7ff,
                #f8e9f1
            );

            color: #5d5787;

            padding: 16px;

            text-align: left;
        }

        td {
            padding: 16px;

            border-top: 1px solid #eeeaf4;

            color: #5e596d;

            vertical-align: top;
        }

        tr:hover {
            background: #faf9ff;
        }

        .priority {
            padding: 7px 12px;

            border-radius: 20px;

            font-size: 13px;

            font-weight: bold;
        }

        .low {
            background: #e3f7f2;
            color: #4d9685;
        }

        .medium {
            background: #fff3e3;
            color: #c27a2c;
        }

        .high {
            background: #ffe8ee;
            color: #d65c7a;
        }

        .empty {
            text-align: center;

            padding: 50px;

            color: #817b93;

            font-size: 18px;
        }

        @media (max-width: 600px) {

            .container {
                padding: 25px 15px;
            }

            .header {
                align-items: flex-start;
            }

        }

    </style>

</head>

<body>

<div class="container">

    <div class="header">

        <div>

            <h1>📋 Service Requests</h1>

            <p class="subtitle">
                View all submitted IT support requests
            </p>

        </div>

        <a href="serviceRequest.jsp" class="new-request">
            + New Request
        </a>

    </div>


    <%

        List<ServiceRequest> requestList =
                (List<ServiceRequest>)
                request.getAttribute("requestList");

    %>


    <% if (requestList != null && !requestList.isEmpty()) { %>

        <div class="table-container">

            <table>

                <tr>

                    <th>Request No.</th>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Department</th>
                    <th>Category</th>
                    <th>Priority</th>
                    <th>Problem Description</th>

                </tr>


                <% for (ServiceRequest serviceRequest : requestList) { %>

                    <tr>

                        <td>

                            <strong>
                                ${serviceRequest.requestNumber}
                            </strong>

                        </td>


                        <td>
                            <%= serviceRequest.getEmployeeId() %>
                        </td>


                        <td>
                            <%= serviceRequest.getEmployeeName() %>
                        </td>


                        <td>
                            <%= serviceRequest.getDepartment() %>
                        </td>


                        <td>
                            <%= serviceRequest.getProblemCategory() %>
                        </td>


                        <td>

                            <span class="priority <%= serviceRequest.getPriority().toLowerCase() %>">

                                <%= serviceRequest.getPriority() %>

                            </span>

                        </td>


                        <td>
                            <%= serviceRequest.getProblemDescription() %>
                        </td>

                    </tr>

                <% } %>

            </table>

        </div>


    <% } else { %>

        <div class="empty">

            No service requests have been submitted yet.

        </div>

    <% } %>


</div>

</body>

</html>