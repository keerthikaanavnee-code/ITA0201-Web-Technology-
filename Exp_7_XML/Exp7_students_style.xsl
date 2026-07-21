<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>

<head>

<title>SIMATS Student Records</title>

<style>

body{

font-family:Segoe UI,sans-serif;

background:linear-gradient(135deg,#74ebd5,#ACB6E5);

margin:0;

padding:40px;

}

.container{

width:90%;

margin:auto;

background:white;

padding:30px;

border-radius:20px;

box-shadow:0 10px 30px rgba(0,0,0,.3);

}

h1{

text-align:center;

color:#0f4c81;

margin-bottom:5px;

}

h3{

text-align:center;

color:#008080;

margin-top:0;

}

table{

width:100%;

border-collapse:collapse;

margin-top:30px;

}

th{

background:#0f4c81;

color:white;

padding:15px;

font-size:17px;

}

td{

padding:12px;

text-align:center;

border-bottom:1px solid #ddd;

}

tr:nth-child(even){

background:#f5f9fc;

}

tr:hover{

background:#d9f6ff;

transition:.3s;

}

.footer{

text-align:center;

margin-top:25px;

color:#555;

font-weight:bold;

}

</style>

</head>

<body>

<div class="container">

<h1>🏫 SIMATS School of Engineering</h1>

<h3>Student Information Management System</h3>

<table>

<tr>

<th>Roll No</th>

<th>Name</th>

<th>Department</th>

<th>Year</th>

<th>Email</th>

<th>Mobile</th>

</tr>

<xsl:for-each select="students/student">

<tr>

<td><xsl:value-of select="rollno"/></td>

<td><xsl:value-of select="name"/></td>

<td><xsl:value-of select="department"/></td>

<td><xsl:value-of select="year"/></td>

<td><xsl:value-of select="email"/></td>

<td><xsl:value-of select="mobile"/></td>

</tr>

</xsl:for-each>

</table>

<div class="footer">

© 2026 SIMATS School of Engineering

</div>

</div>

</body>

</html>

</xsl:template>

</xsl:stylesheet>