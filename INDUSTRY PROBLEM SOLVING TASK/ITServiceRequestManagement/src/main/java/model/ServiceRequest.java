package model;

public class ServiceRequest {

    private String requestNumber;
    private String employeeId;
    private String employeeName;
    private String department;
    private String problemCategory;
    private String problemDescription;
    private String priority;

    public ServiceRequest(
            String requestNumber,
            String employeeId,
            String employeeName,
            String department,
            String problemCategory,
            String problemDescription,
            String priority) {

        this.requestNumber = requestNumber;
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.department = department;
        this.problemCategory = problemCategory;
        this.problemDescription = problemDescription;
        this.priority = priority;
    }

    public String getRequestNumber() {
        return this.requestNumber;
    }

    public String getEmployeeId() {
        return this.employeeId;
    }

    public String getEmployeeName() {
        return this.employeeName;
    }

    public String getDepartment() {
        return this.department;
    }

    public String getProblemCategory() {
        return this.problemCategory;
    }

    public String getProblemDescription() {
        return this.problemDescription;
    }

    public String getPriority() {
        return this.priority;
    }
}