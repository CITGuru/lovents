<!DOCTYPE html>
<html>
<head>
	<title>Lovents | Your Personal Assistant Events Creator</title>
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="../css/font-awesome.css">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
</head>
<body>
<div class="header">
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
	<div class="banner-wrapper" style="background-image: url(../img/slide-lovent.png);">
		<div class="container banner">
			<div class="banner-text">
				<h3 class="text-center" style="color: white;">Be Creative and Intelligent with your Events</h3>
			</div>
			<form class="search-box" method="get" action="/search">
			<div class="input-group">
            	<input type="text" class="form-control" placeholder="Search for Events" name="q" required="">
                <span class="input-group-btn">
                	<button class="btn btn-default" type="submit"><i class="fa fa-search" name="search-btn"></i></button>
           	    </span>
            </div>
		</div>
	</div>


<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</body>
</html>