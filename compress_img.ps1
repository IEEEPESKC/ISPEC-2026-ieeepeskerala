Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile((Join-Path (Get-Location) 'src\assets\image.png'))
$img.Save((Join-Path (Get-Location) 'src\assets\image-compressed.jpg'), [System.Drawing.Imaging.ImageFormat]::Jpeg)
$img.Dispose()
