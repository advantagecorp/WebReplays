'go to stoock tab
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").Link("Stocks").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 3
'add new watch list @@ script infofile_;_ZIP::ssf31.xml_;_
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebList("Add to my watchlist").Select "NVDA - NVIDIA Corporation" @@ script infofile_;_ZIP::ssf2.xml_;_
wait 2
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebEdit("Example: Tesla, Apple").Set "NVDA - NVIDIA Corporation" @@ script infofile_;_ZIP::ssf3.xml_;_
wait 1
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebButton("Add").Click @@ script infofile_;_ZIP::ssf4.xml_;_
'buy stock
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebButton("Buy").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebNumber("amount").Set "50" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebButton("Buy_2").Click @@ script infofile_;_ZIP::ssf7.xml_;_
'sell stock
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebButton("Sell").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebNumber("amount").Set "20" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebButton("Sell_2").Click @@ script infofile_;_ZIP::ssf10.xml_;_
'check transaction in portfolio
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebButton("My Portfolio").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").Link("View Stock Transactions").Click
Browser("Transactions - Advantage").Page("Transactions - Advantage").WebTable("Total: $-210").WebElement("$-50.00").Check CheckPoint("$-50.00") @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("Transactions - Advantage").Page("Transactions - Advantage").WebTable("Total: $-210").WebElement("$20.00").Check CheckPoint("$20.00") @@ script infofile_;_ZIP::ssf19.xml_;_
'check transation in account @@ hightlight id_;_66098_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Transactions - Advantage").Page("Transactions - Advantage").Link("Accounts").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Transactions - Advantage").Page("Accounts - Advantage Bank").Link("AB66ADVB511646729175362").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Transactions - Advantage").Page("Transactions - Advantage_2").WebTable("Opening Balance342,939.96Total").WebElement("20.00").Check CheckPoint("20.00")
Browser("Transactions - Advantage").Page("Transactions - Advantage_2").WebTable("Opening Balance342,939.96Total").WebElement("50.00").Check CheckPoint("50.00")
'delete watch list @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("Transactions - Advantage").Page("Transactions - Advantage_2").Link("Stocks").Click @@ script infofile_;_ZIP::ssf24.xml_;_
Browser("Transactions - Advantage").Page("Stocks - Advantage Bank").WebButton("close").Click @@ script infofile_;_ZIP::ssf29.xml_;_
