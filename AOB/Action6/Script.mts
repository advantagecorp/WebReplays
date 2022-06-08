CurrentURL = DataTable.RawValue("A","Global")

print CurrentURL

LaunchBrowser CurrentURL

Reporter.ReportEvent micDone,"browser version: ", Browser("micclass:=Browser").GetROProperty("version")
