$ErrorActionPreference = "Continue"
$root = Join-Path $PSScriptRoot "..\public\videos"
$files = Get-ChildItem -Path $root -Recurse -File | Where-Object {
  $_.Extension -match '\.(mp4|mov)$'
}

foreach ($f in $files) {
  $src = $f.FullName
  $before = $f.Length
  $name = $f.Name

  if ($before -lt 2.5MB -and $f.Extension -eq ".mp4") {
    Write-Output ("SKIP {0} ({1:N1} MB)" -f $name, ($before / 1MB))
    continue
  }

  $tmp = Join-Path $f.DirectoryName ($f.BaseName + ".compress-tmp.mp4")
  $crf = "28"
  $vf = "scale='min(1280,iw)':-2"
  if ($name -eq "hero.mp4" -or $before -gt 35MB) {
    $crf = "30"
    $vf = "scale='min(720,iw)':-2"
  }

  Write-Output ("ENC {0} ({1:N1} MB)..." -f $name, ($before / 1MB))
  & ffmpeg -y -hide_banner -loglevel error -i $src -c:v libx264 -crf $crf -preset fast -vf $vf -c:a aac -b:a 96k -movflags +faststart $tmp
  if ($LASTEXITCODE -ne 0 -or -not (Test-Path $tmp)) {
    Write-Output ("FAIL {0}" -f $name)
    if (Test-Path $tmp) { Remove-Item $tmp -Force }
    continue
  }

  $after = (Get-Item $tmp).Length
  if ($after -lt $before) {
    Move-Item -Force $tmp $src
    Write-Output ("OK  {0} {1:N1} MB -> {2:N1} MB" -f $name, ($before / 1MB), ($after / 1MB))
  } else {
    Remove-Item $tmp -Force
    Write-Output ("KEEP {0} (already smaller)" -f $name)
  }
}

Write-Output "DONE_COMPRESS"
