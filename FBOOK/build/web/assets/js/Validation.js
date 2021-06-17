/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//User Type Validation
function UTypeVld(type12)
{
    if (type12 == "Select")
    {
        alert("Please User Type");
        return false;
    }
    return true;
}

//User FirstName Validation
function FnameVld(fnme)
{
    var fun = /^[a-zA-Z]+$/.test(fnme);
    if (fnme == "")
    {
        alert("Please Enter First Name");
        return false;
    }
    else if (!fun)
    {
        alert("First Name Should Contain Only ALPHABETS");
        return false;
    }
    return true;
}

//User LastName Validation
function LnameVld(lnme)
{
    var fun = /^[a-zA-Z]+$/.test(lnme);
    if (lnme == "")
    {
        alert("Please Enter Last Name");
        return false;
    }
    else if (!fun)
    {
        alert("Last Name Also Should Contain Only ALPHABETS");
        return false;
    }
    return true;
}

//Gender Validation
function GndrVld(ass)
{
    if (ass == "Select")
    {
        alert("Please Select One gender");
        return false;
    }
    return true;
}

//Mail ID Validation
function MailVld(passmail)
{
    var mail11 = passmail;
    var mail2 = /^([\w-]+(?:\.[\w-]+)*)@((?:[a-z\-]+\.)*[a-z][a-z]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(mail11);
    if (mail11 == null)
    {
        alert("E-Mail Field Should Not Be An EMPTY");
        return false;
    }
    else if (!mail2)
    {
        alert("Please Enter Valid E-Mail Address");
        return false;
    }
    return true;
}

//Date Of birth Validation
function DofBthVld(ddob)
{
    if (ddob == "")
    {
        alert("Date Of Birth Filed Shoubld Fill");
        return false;
    }
    return true;
}

//Password Validation
function PassVld(psss)
{
    var ll = psss.length;
    if (psss == "")
    {
        alert("Password Filed Shoubld Fill");
        return false;
    }
    else if ((ll < 3) || (ll > 8))
    {
        alert("Password Filed Shoubld Contain 3 to 8 length");
        return false;
    }
    return true;
}
//Picture Validation
function PictVld(bict)
{
    var ext = bict.substring(bict.lastIndexOf('.') + 1);
    if (bict == "")
    {
        alert("Please Select Product Picture");
        return false;
    }
    else if (!(ext == "gif" || ext == "GIF" || ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "png" || ext == "PNG"))
    {
        alert("Supported File Formats gif , GIF , jpg , JPG , jpeg , JPEG , png , PNG ");
        return false;
    }
    return true;
}

//Picture Validation
function PostPictVld(bict1)
{
    var ext = bict1.substring(bict1.lastIndexOf('.') + 1);
    if (bict1 == "")
    {
        alert("Please Select Post Visuals");
        return false;
    }
    else if (!(ext == "gif" || ext == "GIF" || ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "png" || ext == "PNG"))
    {
        alert("Supported File Formats gif , GIF , jpg , JPG , jpeg , JPEG , png , PNG ");
        return false;
    }
    return true;
}
//Country Validation
function CntryVld(cvt)
{
    if (cvt == "-1")
    {
        alert("Please Select Your Country");
        document.getElementById("country").style.border = "2px solid red";
        return false;
    }
    document.getElementById("country").style.border = "";
    return true;
}

//State Validation
function StatVld(sde)
{
    if (sde == "Select")
    {
        alert("Please Select Your State");
        return false;
    }
    return true;
}

//City Validation
function CityVld(cty)
{
    var fg = /^[a-zA-Z]+$/.test(cty);
    if (cty == "Select")
    {
        alert("Please Enter Your CITY");
        return false;
    }
    else if (!fg)
    {
        alert("City Filed Contains Only ALPHABETS");
        return false;
    }
    return true;
}
//Address Validation
function AddssVld(adds1)
{
    var ano = /^[\w\#\s\.\-\,\:]+$/.test(adds1);
    if (adds1 == null)
    {
        alert("Address Field Should Not Be An EMPTY");
        return false;
    }
    else if (!ano)
    {
        alert("Address Should Not Contain Special Symbols");
        return false;
    }
    return true;
}

//Phone Number Validation
function PhoneVld(cell1)
{
    var cell = cell1.trim();
    var cll2 = /^[0-9]+$/.test(cell);
    var clen = cell.length;
    if (cell == null)
    {
        alert("Cell Field Should Not Be An EMPTY");
        return false;
    }
    else if (!cll2)
    {
        alert("Cell Field Should Contain only NUMBERS");
        return false;
    }
    else if (!(cell1.charAt(0) == "9" || cell1.charAt(0) == "8" || cell1.charAt(0) == "7"))
    {
        alert("Cell Number  Should Start With only 9 / 8 / 7");
        return false;
    }
    else if (clen != 10)
    {
        alert("Cell Field Should Contain 10 NUMBERS");
        return false;
    }

    return true;
}

//ShopName Validation
function SPnameVld(spnm)
{
    var fun = /^[a-zA-Z\s\-\_]+$/.test(spnm);
    if (spnm == "")
    {
        alert("Please Enter SHOP Name");
        return false;
    }
    else if (!fun)
    {
        alert("SHOP Name Should Contain Only ALPHABETS");
        return false;
    }
    return true;
}

//Shop PLace Validation
function SPPlaceVld(spnm)
{
    var fun = /^[a-zA-Z]+$/.test(spnm);
    if (spnm == "")
    {
        alert("Please Enter SHOP PLACE");
        return false;
    }
    else if (!fun)
    {
        alert("SHOP PLACE Should Contain Only ALPHABETS");
        return false;
    }
    return true;
}

// Shop Picture Validation
function ShopPictVld(bict1)
{
    var ext = bict1.substring(bict1.lastIndexOf('.') + 1);
    if (bict1 == "")
    {
        alert("Please Select Shop Picture");
        return false;
    }
    else if (!(ext == "gif" || ext == "GIF" || ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "png" || ext == "PNG"))
    {
        alert("Supported File Formats gif , GIF , jpg , JPG , jpeg , JPEG , png , PNG ");
        return false;
    }
    return true;
}