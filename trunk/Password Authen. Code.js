<script language="javascript">
<!--//
/*This Script allows people to enter by using a form that asks for a
UserID and Password*/
function pasuser(form) {
if (form.id.value=="dhirajjadhao") {
if (form.pass.value=="radhekrishna") {
location="http://192.168.1.102"
} else {
alert("Invalid Password")
}
} else {  alert("Invalid UserID")
}
}
//-->
</script>

<center>
<table bgcolor="#E0E0E0 " cellpadding="2" border="3" style="border: 0px dashed #FF0000">
<tr><td colspan="2" bordercolor="black" style="border: 1px solid black"><center><h1><i><b>
        <img border="0" src="https://lh5.googleusercontent.com/-ztamhm3a418/UErxfswzhqI/AAAAAAAAAY0/OUwj0zJ2k4w/s960/logo.jpg" alt="arduino autohome" width="400" height="100" /></b></i></h1></center></td></tr>
<tr>
<td height="30" bordercolor="#FFFF00" style="border: 1px solid black">
<center><h1><i><b><font size="3">UserID:</font></b></i></h1></center>
</td>
<td height="64" bordercolor="#FFFF00" style="border: 1px solid black">
<form name="login">
<input name="id" type="text">
</td>
</tr>
<tr><td bordercolor="#FFFF00" style="border: 1px solid black">
<center><h1><i><b><font size="3">Password:</font></b></i></h1></center>
</td>
<td bordercolor="#FFFF00" style="border: 1px solid black"><input name="pass"
type="password"></td></tr>
<tr><td bordercolor="#FFFF00" style="border: 1px solid black" height="51"><center><input type="button" value="Login"
onClick="pasuser(this.form)"></center></td>
        <td bordercolor="#FFFF00" style="border: 1px solid black" height="51"><center><input
type="Reset"></form></td></tr></table></center>




