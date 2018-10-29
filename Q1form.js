<!DOCTYPE html>
<html>
<head>
 <title>form</title>
 <script type="text/javascript">
 	function validate(frm)
 	{
 		var username=frm.uname.value;
 		var regno=frm.uregno.value;
 		var contact=frm.ucontact.value;
 		              var exp2=/^[0-9]{8}/;
 		 		var exp1=/^[7|8|9][0-9]{9}$/;
 		
		
 		
 		
 		else if(!contact.match(exp1)){
 			alert('kindly check your password. Enter a valid password.');
 			frm.ucontact.focus();
 			return false;
 		}
 		if(!regno.match(exp2)){
 			alert('kindly enter username between 3 to 32 character..');
 			frm.uregno.focus();
 			return false;
 		}
 		return true;
 	}
 	
 </script>
 </head>
 <body>
 	<fieldset>
 		<legend>Box</legend>
 	<form method="post" action="" onsubmit="return validate(this);">
 		Reg. No :<br/><br/>
 		<input type="text" name="uregno" value="" placeholder="enter registration number" /><br/><br/>
 		name:<br /><br/>
 		<input type="text" name="uname" value="" placeholder="enter name" /><br/><br/>
 		contact:<br /><br/>
 		<input type="text" name="ucontact" value="" placeholder="enter contact" /><br/><br/>
 		email:<br /><br/>
 		<input type="text" name="uemail" value="" placeholder="enter email" /><br/><br/>
 		<input type="submit" name="btm" value="submit" />

 		
 	</form>
 	</fieldset>
 </body>
 </html>
