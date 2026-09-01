<%@ page language="java" contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html>

<head>

    <meta charset="UTF-8">

    <title>IT Service Request Management</title>

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

            display: flex;
            justify-content: center;
            align-items: center;

            padding: 40px 20px;
        }

        .container {
            width: 100%;
            max-width: 900px;

            background: rgba(255, 255, 255, 0.92);

            border: 1px solid rgba(255, 255, 255, 0.8);

            border-radius: 28px;

            padding: 45px;

            box-shadow: 0 20px 50px rgba(120, 110, 160, 0.15);
        }

        .title-section {
            text-align: center;
            margin-bottom: 35px;
        }

        .icon {
            width: 75px;
            height: 75px;

            margin: 0 auto 15px;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 50%;

            font-size: 32px;

            background: linear-gradient(
                135deg,
                #ebe7ff,
                #ffe9f2,
                #e7f8f6
            );

            box-shadow: 0 10px 25px rgba(120, 110, 160, 0.12);
        }

        h1 {
            margin: 0;
            color: #4f4b83;
            font-size: 32px;
        }

        .subtitle {
            color: #817b93;
            margin-top: 10px;
            font-size: 16px;
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 22px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        .full-width {
            grid-column: 1 / 3;
        }

        label {
            font-weight: bold;
            color: #5d5875;
            margin-bottom: 9px;
        }

        input,
        select,
        textarea {
            width: 100%;

            padding: 14px;

            border: 1px solid #e2dfee;

            border-radius: 12px;

            font-size: 15px;

            outline: none;

            background: #fbfaff;

            color: #514d67;

            transition: 0.3s;
        }

        input:focus,
        select:focus,
        textarea:focus {

            border-color: #9a93d8;

            background: white;

            box-shadow: 0 0 0 4px rgba(154, 147, 216, 0.12);
        }

        textarea {
            resize: vertical;
            min-height: 120px;
        }

        .priority-container {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }

        .priority-option {

            flex: 1;

            min-width: 130px;

            padding: 14px;

            border-radius: 12px;

            background: #fbfaff;

            border: 1px solid #e5e1f0;

            cursor: pointer;

            display: flex;

            justify-content: center;

            align-items: center;

            gap: 8px;

            transition: 0.3s;
        }

        .priority-option:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 18px rgba(120, 110, 160, 0.10);
        }

        .priority-option input {
            width: auto;
            margin: 0;
        }

        .button-container {
            text-align: center;
            margin-top: 35px;
        }

        input[type="submit"] {

            width: 280px;

            padding: 15px;

            border: none;

            border-radius: 14px;

            color: white;

            font-size: 16px;

            font-weight: bold;

            cursor: pointer;

            background: linear-gradient(
                135deg,
                #8f93dc,
                #a49be8
            );

            box-shadow: 0 12px 22px rgba(130, 120, 210, 0.25);

            transition: 0.3s;
        }

        input[type="submit"]:hover {

            transform: translateY(-3px);

            box-shadow: 0 16px 28px rgba(130, 120, 210, 0.35);
        }

        .error-message {

            background: #ffe8ee;

            color: #c94f70;

            padding: 14px 18px;

            border-radius: 12px;

            margin-bottom: 25px;

            text-align: center;

            font-weight: bold;
        }

        @media (max-width: 700px) {

            body {
                padding: 20px 12px;
            }

            .container {
                padding: 30px 20px;
            }

            .form-grid {
                grid-template-columns: 1fr;
            }

            .full-width {
                grid-column: 1;
            }

            h1 {
                font-size: 26px;
            }

            input[type="submit"] {
                width: 100%;
            }
        }

    </style>

</head>


<body>

<div class="container">


    <div class="title-section">

        <div class="icon">
            💻
        </div>

        <h1>IT Service Request</h1>

        <p class="subtitle">
            Submit your technical issue to the IT Support Team
        </p>

    </div>


    <% if (request.getAttribute("errorMessage") != null) { %>

        <div class="error-message">

            <%= request.getAttribute("errorMessage") %>

        </div>

    <% } %>


    <form action="ServiceRequestServlet" method="post">


        <div class="form-grid">


            <!-- Employee ID -->

            <div class="form-group">

                <label>Employee ID</label>

                <input
                    type="text"
                    name="employeeId"
                    placeholder="Enter Employee ID"
                    required
                >

            </div>


            <!-- Employee Name -->

            <div class="form-group">

                <label>Employee Name</label>

                <input
                    type="text"
                    name="employeeName"
                    placeholder="Enter Employee Name"
                    required
                >

            </div>


            <!-- Department -->

            <div class="form-group">

                <label>Department</label>

                <input
                    type="text"
                    name="department"
                    placeholder="Enter Department"
                    required
                >

            </div>


            <!-- Problem Category -->

            <div class="form-group">

                <label>Problem Category</label>

                <select
                    name="problemCategory"
                    required
                >

                    <option value="">
                        -- Select Category --
                    </option>

                    <option value="Network">
                        Network
                    </option>

                    <option value="Software">
                        Software
                    </option>

                    <option value="Hardware">
                        Hardware
                    </option>

                    <option value="Account">
                        Account
                    </option>

                    <option value="Other">
                        Other
                    </option>

                </select>

            </div>


            <!-- Problem Description -->

            <div class="form-group full-width">

                <label>Problem Description</label>

                <textarea
                    name="problemDescription"
                    placeholder="Describe the technical problem you are facing"
                    required
                ></textarea>

            </div>


            <!-- Priority -->

            <div class="form-group full-width">

                <label>Priority</label>

                <div class="priority-container">


                    <label class="priority-option">

                        <input
                            type="radio"
                            name="priority"
                            value="Low"
                            required
                        >

                        Low

                    </label>


                    <label class="priority-option">

                        <input
                            type="radio"
                            name="priority"
                            value="Medium"
                        >

                        Medium

                    </label>


                    <label class="priority-option">

                        <input
                            type="radio"
                            name="priority"
                            value="High"
                        >

                        High

                    </label>


                </div>

            </div>


        </div>


        <div class="button-container">

            <input
                type="submit"
                value="Submit Service Request"
            >

        </div>


    </form>


</div>

</body>

</html>