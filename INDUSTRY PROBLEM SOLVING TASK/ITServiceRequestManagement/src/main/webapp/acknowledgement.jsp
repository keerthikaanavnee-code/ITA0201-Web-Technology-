<%@ page language="java" contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html>

<head>

    <meta charset="UTF-8">

    <title>Request Submitted Successfully</title>

    <style>

        * {
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        /* PAGE BACKGROUND */

        body {
            margin: 0;
            min-height: 100vh;

            background:
                radial-gradient(circle at 10% 10%, #d9d7ff 0, transparent 25%),
                radial-gradient(circle at 90% 20%, #ffd9e8 0, transparent 22%),
                radial-gradient(circle at 85% 85%, #cceff0 0, transparent 25%),
                linear-gradient(135deg, #f8f7ff, #fff7f9, #f4fbff);

            display: flex;
            justify-content: center;
            align-items: center;

            padding: 40px 20px;
        }

        /* MAIN CARD */

        .container {
            width: 100%;
            max-width: 900px;

            background: rgba(255, 255, 255, 0.90);

            backdrop-filter: blur(10px);

            border: 1px solid rgba(255, 255, 255, 0.8);

            border-radius: 28px;

            overflow: hidden;

            box-shadow:
                0 20px 50px rgba(120, 110, 160, 0.15);
        }

        /* HEADER */

        .header {
            text-align: center;

            padding: 45px 30px 35px;

            background:
                linear-gradient(
                    135deg,
                    #ebe7ff,
                    #ffe9f2,
                    #e7f8f6
                );
        }

        .success-icon {
            width: 78px;
            height: 78px;

            margin: 0 auto 18px;

            border-radius: 50%;

            background: white;

            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 38px;

            color: #7b70c9;

            box-shadow:
                0 10px 25px rgba(120, 110, 180, 0.15);
        }

        .header h1 {
            margin: 0;

            color: #4f4b83;

            font-size: 32px;
        }

        .header p {
            margin-top: 12px;

            color: #77738f;

            font-size: 16px;
        }

        /* CONTENT */

        .content {
            padding: 40px 50px;
        }

        /* REQUEST NUMBER */

        .request-number-card {
            background:
                linear-gradient(
                    135deg,
                    #f3f1ff,
                    #fff5f9
                );

            border: 1px solid #e5e0f3;

            border-radius: 18px;

            padding: 22px 25px;

            text-align: center;

            margin-bottom: 35px;
        }

        .request-label {
            font-size: 14px;

            color: #77738f;

            margin-bottom: 8px;
        }

        .request-number {
            font-size: 28px;

            font-weight: bold;

            color: #7168bd;

            letter-spacing: 1px;
        }

        /* DETAILS TITLE */

        .details-title {
            text-align: center;

            margin-bottom: 25px;

            color: #4f4b83;

            font-size: 24px;
        }

        /* DETAILS GRID */

        .details-grid {
            display: grid;

            grid-template-columns: 1fr 1fr;

            gap: 18px;
        }

        .detail-card {
            background: #fbfaff;

            border: 1px solid #ebe8f4;

            border-radius: 16px;

            padding: 20px;

            transition: 0.3s;
        }

        .detail-card:hover {
            transform: translateY(-3px);

            box-shadow:
                0 10px 22px rgba(130, 120, 180, 0.10);
        }

        .detail-card.full {
            grid-column: 1 / 3;
        }

        .label {
            font-size: 13px;

            font-weight: bold;

            color: #918ba5;

            margin-bottom: 8px;

            text-transform: uppercase;

            letter-spacing: 0.5px;
        }

        .value {
            font-size: 17px;

            font-weight: bold;

            color: #514d67;

            word-break: break-word;
        }

        /* PRIORITY BADGE */

        .priority {
            display: inline-block;

            padding: 8px 16px;

            border-radius: 20px;

            background: #ffe8ee;

            color: #d65c7a;

            font-size: 15px;
        }

        /* FOOTER */

        .footer {
            text-align: center;

            padding: 35px 25px;

            background:
                linear-gradient(
                    135deg,
                    #f7f5ff,
                    #fff8fb
                );

            border-top: 1px solid #eeeaf5;
        }

        .footer h3 {
            margin: 0 0 10px;

            color: #5c5687;

            font-size: 22px;
        }

        .footer p {
            color: #817b93;

            margin-bottom: 22px;
        }

        /* BUTTON CONTAINER */

        .button-group {
            display: flex;

            justify-content: center;

            align-items: center;

            gap: 15px;

            flex-wrap: wrap;
        }

        /* BUTTON */

        .new-request {
            display: inline-block;

            padding: 14px 30px;

            border-radius: 14px;

            text-decoration: none;

            color: white;

            font-weight: bold;

            background:
                linear-gradient(
                    135deg,
                    #8f93dc,
                    #a49be8
                );

            box-shadow:
                0 10px 20px rgba(130, 120, 210, 0.25);

            transition: 0.3s;
        }

        .new-request:hover {
            transform: translateY(-3px);

            box-shadow:
                0 15px 25px rgba(130, 120, 210, 0.35);
        }

        /* SECOND BUTTON */

        .view-requests {
            display: inline-block;

            padding: 14px 30px;

            border-radius: 14px;

            text-decoration: none;

            color: #5c5687;

            font-weight: bold;

            background: #ffffff;

            border: 1px solid #dcd7ed;

            box-shadow:
                0 8px 18px rgba(130, 120, 180, 0.12);

            transition: 0.3s;
        }

        .view-requests:hover {
            transform: translateY(-3px);

            background: #f3f1ff;
        }

        /* MOBILE */

        @media (max-width: 650px) {

            body {
                padding: 20px 12px;
            }

            .content {
                padding: 30px 20px;
            }

            .details-grid {
                grid-template-columns: 1fr;
            }

            .detail-card.full {
                grid-column: 1;
            }

            .header h1 {
                font-size: 25px;
            }

            .button-group {
                flex-direction: column;
            }

            .new-request,
            .view-requests {
                width: 100%;
                max-width: 300px;
            }
        }

    </style>

</head>

<body>

<div class="container">

    <!-- SUCCESS HEADER -->

    <div class="header">

        <div class="success-icon">
            ✓
        </div>

        <h1>Request Submitted Successfully!</h1>

        <p>
            Your IT service request has been received successfully.
        </p>

    </div>


    <!-- DETAILS -->

    <div class="content">

        <!-- REQUEST NUMBER -->

        <div class="request-number-card">

            <div class="request-label">
                SERVICE REQUEST NUMBER
            </div>

            <div class="request-number">
                ${requestNumber}
            </div>

        </div>


        <h2 class="details-title">
            Service Request Details
        </h2>


        <div class="details-grid">

            <!-- EMPLOYEE ID -->

            <div class="detail-card">

                <div class="label">
                    Employee ID
                </div>

                <div class="value">
                    ${serviceRequest.employeeId}
                </div>

            </div>


            <!-- EMPLOYEE NAME -->

            <div class="detail-card">

                <div class="label">
                    Employee Name
                </div>

                <div class="value">
                    ${serviceRequest.employeeName}
                </div>

            </div>


            <!-- DEPARTMENT -->

            <div class="detail-card">

                <div class="label">
                    Department
                </div>

                <div class="value">
                    ${serviceRequest.department}
                </div>

            </div>


            <!-- CATEGORY -->

            <div class="detail-card">

                <div class="label">
                    Problem Category
                </div>

                <div class="value">
                    ${serviceRequest.problemCategory}
                </div>

            </div>


            <!-- PRIORITY -->

            <div class="detail-card">

                <div class="label">
                    Priority
                </div>

                <div class="value priority">
                    ${serviceRequest.priority}
                </div>

            </div>


            <!-- PROBLEM DESCRIPTION -->

            <div class="detail-card full">

                <div class="label">
                    Problem Description
                </div>

                <div class="value">
                    ${serviceRequest.problemDescription}
                </div>

            </div>

        </div>

    </div>


    <!-- FOOTER -->

    <div class="footer">

        <h3>Thank You! 💜</h3>

        <p>
            Your request has been successfully submitted to the IT Support Team.
        </p>


        <div class="button-group">

            <a href="serviceRequest.jsp" class="new-request">
                + Submit Another Request
            </a>

            <a href="ViewRequestsServlet" class="view-requests">
                📋 View All Requests
            </a>

        </div>

    </div>

</div>

</body>

</html>