$raw = Get-Content "data-snapshot.js" -Raw
$idx = $raw.IndexOf('[')
$lastIdx = $raw.LastIndexOf(']')
$jsonStr = $raw.Substring($idx, $lastIdx - $idx + 1)
$data = $jsonStr | ConvertFrom-Json

$coastalIssues = @()

foreach ($item in $data) {
    $row = $item.value
    $id = $row[0]
    $client = $row[1]
    $veh = $row[2]
    $loc = $row[11]
    $lat = [double]$row[12]
    $lng = [double]$row[13]

    $inWater = $false
    $region = ""

    # 1. West Coast (Arabian Sea):
    if ($lat -ge 8.0 -and $lat -lt 9.5 -and $lng -lt 76.90) {
        $inWater = $true; $region = "South Kerala coast (Arabian Sea)"
    } elseif ($lat -ge 9.5 -and $lat -lt 10.5 -and $lng -lt 76.28) {
        $inWater = $true; $region = "Kochi / Central Kerala (Arabian Sea)"
    } elseif ($lat -ge 10.5 -and $lat -lt 12.0 -and $lng -lt 75.78) {
        $inWater = $true; $region = "Calicut / North Kerala (Arabian Sea)"
    } elseif ($lat -ge 12.0 -and $lat -lt 13.2 -and $lng -lt 74.84) {
        $inWater = $true; $region = "Mangalore coast (Arabian Sea)"
    } elseif ($lat -ge 13.2 -and $lat -le 13.6 -and $lng -lt 74.78) {
        $inWater = $true; $region = "Manipal / Udupi coast (Arabian Sea)"
    } elseif ($lat -gt 13.6 -and $lat -lt 15.0 -and $lng -lt 74.30) {
        $inWater = $true; $region = "Karwar coast (Arabian Sea)"
    } elseif ($lat -ge 15.0 -and $lat -lt 18.5 -and $lng -lt 73.35) {
        $inWater = $true; $region = "Goa / Konkan coast (Arabian Sea)"
    } elseif ($lat -ge 18.5 -and $lat -le 19.4 -and $lng -lt 72.825) {
        $inWater = $true; $region = "Mumbai offshore (Arabian Sea)"
    } elseif ($lat -gt 19.4 -and $lat -le 20.2 -and $lng -lt 72.75) {
        $inWater = $true; $region = "Daman / Gujarat south offshore"
    } elseif ($lat -ge 20.8 -and $lat -le 21.8 -and $lng -gt 72.0 -and $lng -lt 72.65) {
        $inWater = $true; $region = "Gulf of Khambhat"
    } elseif ($lat -ge 21.5 -and $lat -le 23.0 -and $lng -lt 69.60) {
        $inWater = $true; $region = "Arabian Sea west of Dwarka"
    }
    
    # 2. East Coast (Bay of Bengal):
    if ($lat -ge 8.1 -and $lat -lt 10.5 -and $lng -gt 79.25) {
        $inWater = $true; $region = "Palk Strait / Bay of Bengal"
    } elseif ($lat -ge 10.5 -and $lat -lt 12.7 -and $lng -gt 79.82) {
        $inWater = $true; $region = "Puducherry / TN coast (Bay of Bengal)"
    } elseif ($lat -ge 12.7 -and $lat -le 13.5 -and $lng -gt 80.255) {
        $inWater = $true; $region = "Chennai offshore (Bay of Bengal)"
    } elseif ($lat -ge 13.5 -and $lat -lt 16.0 -and $lng -gt 80.05) {
        $inWater = $true; $region = "Andhra south coast (Bay of Bengal)"
    } elseif ($lat -ge 16.0 -and $lat -lt 17.5 -and $lng -gt 82.25) {
        $inWater = $true; $region = "Kakinada / Godavari delta (Bay of Bengal)"
    } elseif ($lat -ge 17.5 -and $lat -le 18.2 -and $lng -gt 83.24) {
        $inWater = $true; $region = "Vizag offshore (Bay of Bengal)"
    } elseif ($lat -ge 18.2 -and $lat -lt 21.0 -and $lng -gt 86.60) {
        $inWater = $true; $region = "Odisha coast (Bay of Bengal)"
    } elseif ($lat -ge 21.0 -and $lat -le 22.2 -and $lng -gt 88.25) {
        $inWater = $true; $region = "Sundarbans water / Bay of Bengal"
    }

    # 3. South of Indian Mainland (Kanyakumari is 8.08 N)
    if ($lat -lt 8.09) {
        $inWater = $true; $region = "Indian Ocean south of Kanyakumari"
    }

    if ($inWater) {
        $coastalIssues += [PSCustomObject]@{
            Id = $id
            Client = $client
            Location = $loc
            Lat = $lat
            Lng = $lng
            Region = $region
        }
    }
}

Write-Output "Total incidents in water: $($coastalIssues.Count)"
$coastalIssues | Group-Object Region | Select-Object Name, Count | Format-Table -AutoSize
$coastalIssues | Select-Object -First 20 | Format-Table -AutoSize
