& {
  # $file = Get-ChildItem "C:\Users\beyph\Documents\Book1.xlsm"
  $file = Get-ChildItem .\Book1.xlsm
  $excel = new-object -comobject excel.application
  $workbook = $excel.workbooks.open($file.fullname)
  $excel.Run('funky')
  $workbook.close()
  $excel.quit()
}