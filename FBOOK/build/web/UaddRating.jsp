<%-- 
    Document   : UaddRating
    Created on : Jul 31, 2015, 3:29:50 PM
    Author     : alaguraj
--%>

<%@page import="DATA.GetInfo.cmdlikedet"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="DATA.GetInfo.MnubarDet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="DATA.DB"%>
<%@page import="java.io.InputStream"%>
<%@page import="java.sql.ResultSet"%>
<%
        String rate = request.getParameter("rating");
        String pstid = request.getParameter("PSTID");
        String uname = request.getParameter("val");
        String city = request.getParameter("City");
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd h:mm:ss");
        java.util.Date de = new java.util.Date();
        String sdte = sdf.format(de);
        DB hb = new DB();
        MnubarDet bgr = new MnubarDet();
        String uuname = bgr.username(uname);
        int ity = hb.Insert("insert into rating(Post_ID,R_UserMail,R_UName,R_Time,Rate,City) values('" + pstid + "','" + uname + "','" +uuname + "','" + sdte + "','" + rate + "','" + city + "')");
        if (ity > 0) {
            System.out.println("Success Rated");
            response.sendRedirect("UsrHome.jsp");
        } else {
            System.out.println("ERROR");
            response.sendRedirect("UsrHome.jsp");
        }
%>
