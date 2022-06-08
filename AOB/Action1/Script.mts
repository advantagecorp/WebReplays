'register a new account 
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Registration").Click
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("firstName").Set "Demo"
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("lastName").Set "wang"
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("email").Set "demo14@microfocus.com"
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set "demo14"
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure "6261089da00eec6f3472a047206ef7b03f0802132857a552"
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("confirmPass").SetSecure "626108a3f99cea1d4a746a0b8f5f1f7bfcfe4ecbe90e916c"
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Register").Click
wait 10

If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Register").Exist=true Then
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Click
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set "demo14"
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure "62611601899b075bb0e8889807bceb39d251779c79abd597"
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login_2").Click
End If

'sign out 
wait 4
Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Click
Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebMenu("My Profile Logout").Select "Logout"

