'set user name and password
Browser("Browser").Page("Home - Advantage Bank").WebEdit("username").Set "admin"
Browser("Browser").Page("Home - Advantage Bank").WebEdit("password").SetSecure "62610971832c0acc08cab6f3f255"
Browser("Browser").Page("Home - Advantage Bank").WebButton("Login").Click

