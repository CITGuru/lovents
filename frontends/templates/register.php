<!DOCTYPE html>
<html>
<head>
	<title>Lovents | Your Personal Assistant Events Creator</title>
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="../css/font-awesome.css">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
</head>
<body style="background-image: url(../img/slide-lovent.png);background-size: cover;">
<div class="header" style="background-color: transparent;box-shadow: none;">
	<div class="container-fluid">
		<div class="logo">
			<h1 style="color: white;">Lovents</h1>
		</div>
		<div class="nav large-nav-only">
			<ul class="navbar">
				<li><a href="">Home</a></li>
				<li><a href="">Create</a></li>
				<li><a href="">Login</a></li>
				<li><a href="">Register</a></li>
			</ul>
		</div>
		<div class="nav mobile-nav small-nav-only dropdown" style="display: none;">
			<a class="dropdown-toggle" class="btn btn-info" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true" style="overflow: hidden;"><i class="fa fa-align-justify"></i></a>
			<ul class="navbar dropdown-menu">
				<li><a href="">Home</a></li>
				<li><a href="">Create</a></li>
				<li><a href="">Login</a></li>
				<li><a href="">Register</a></li>
			</ul>
		</div>
	</div>
</div>
<div class="content-wrapper">
	<div class="container">
		<div class="login-registration-wrapper">
			<form>
				<label for="first_name">First Name</label>
				<input type="text" name="first_name" class="form-control" id="first_name">
				<label for="last_name">Last Name</label>
				<input type="text" name="last_name" class="form-control" id="last_name">
				<label for="email">Email</label>
				<input type="email" name="email" class="form-control" id="email">
				<label for="phone">Phone</label>
				<input type="text" name="phone" id="phone" class="form-control">
				<label for="city">City</label>
				<input type="text" name="city" id="city" class="form-control">
				<label for="country">Country</label>
				<input type="text" name="country" id="country" class="form-control">
				<label for="password">Password</label>
				<input type="password" name="password" class="form-control" id="password">
				<label for="cpassword">Confirm Password</label>
				<input type="password" name="cpassword" class="form-control" id="cpassword">
				<input type="submit" name="submit" class="btn btn-danger" value="Create Account">
			</form>
		</div>
	</div>
</div>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</body>
</html>