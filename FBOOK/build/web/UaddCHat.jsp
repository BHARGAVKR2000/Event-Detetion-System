<%-- 
    Document   : UaddCHat
    Created on : Jul 21, 2015, 3:33:00 PM
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
    String cntnt = request.getParameter("usermsg");
    String fuser = request.getParameter("FUser");
    String tuser = request.getParameter("TUser");
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd h:mm:ss");
    java.util.Date de = new java.util.Date();
    String sdte = sdf.format(de);
    DB hb = new DB();
    MnubarDet bgr = new MnubarDet();
    String funame = bgr.username(fuser);
    String tuname = bgr.username(tuser);
    System.out.println("insert into chat(F_UName,T_UName,MESSAGE,S_Time,F_UMail,T_UMail) values('" + funame + "','" + tuname + "','" + cntnt + "','" + sdte + "','" + fuser + "','" + tuser + "')");
    int ity = hb.Insert("insert into chat(F_UName,T_UName,MESSAGE,S_Time,F_UMail,T_UMail) values('" + funame + "','" + tuname + "','" + cntnt + "','" + sdte + "','" + fuser + "','" + tuser + "')");
    if (ity > 0) {
        out.println("Success Comment");
        response.sendRedirect("UviewMessages.jsp?TOUSR=" + tuser);
    } else {
        out.println("ERROR Comment");
        response.sendRedirect("UviewMessages.jsp?TOUSR=" + tuser);
    }
%>
