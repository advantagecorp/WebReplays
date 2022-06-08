Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").Link("New Transfer").Click @@ script infofile_;_ZIP::ssf1.xml_;_
'select an account @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Stocks - Advantage Bank").Page("New Transfer - Advantage_2").WebList("*Account").Select "Current USD - USD - AB66ADVB511646729175362" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Stocks - Advantage Bank").Page("New Transfer - Advantage").WebRadioGroup("fillType").Select "3"
wait 3
'fill in from existing merchants 
Browser("Stocks - Advantage Bank").Page("New Transfer - Advantage").WebButton("Previous Merchants").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 3
Browser("Stocks - Advantage Bank").Page("New Transfer - Advantage").WebList("Previous Merchants").Select "SuperNet LLC." @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Stocks - Advantage Bank").Page("New Transfer - Advantage").WebNumber("amount").Set "30" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Stocks - Advantage Bank").Page("New Transfer - Advantage").WebEdit("description").Set "make a transaction" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Stocks - Advantage Bank").Page("New Transfer - Advantage").WebButton("Send").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Stocks - Advantage Bank").Page("Accounts - Advantage Bank").Link("AB66ADVB511646729175362").Click @@ script infofile_;_ZIP::ssf8.xml_;_
'check transaction amount
Browser("Stocks - Advantage Bank").Page("Transactions - Advantage").WebTable("Opening Balance342,939.96Total").WebElement("30.00").Check CheckPoint("30.00") @@ script infofile_;_ZIP::ssf9.xml_;_


