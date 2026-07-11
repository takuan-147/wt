<?php
declare(strict_types=1);

header('Content-Type: text/html; charset=UTF-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');
header('X-Content-Type-Options: nosniff');

$colors = [
    'FF5040',
    'FF8F38',
    'FFD32F',
    'D9EC4D',
    '7DE633',
    '2FE137',
    '2CE48D',
    '2AE5C8',
    '23CFFF',
    '3987FE',
    '3F39F7',
    '8A3DFF',
    'E356FE',
    'FC54DC',
    'DD4D74',
];

$rawN = $_GET['n'] ?? null;
if (!is_string($rawN) || !ctype_digit($rawN)) {
    http_response_code(400);
    exit('Invalid color index');
}

$index = (int) $rawN;
if ($index < 1 || $index > count($colors)) {
    http_response_code(400);
    exit('Color index out of range');
}

$unselectedInput = $_GET['unselected'] ?? 'false';
if (!is_string($unselectedInput)) {
    http_response_code(400);
    exit('Invalid tab state');
}
$rawUnselected = strtolower($unselectedInput);
if (!in_array($rawUnselected, ['false', 'true', '0', '1'], true)) {
    http_response_code(400);
    exit('Invalid tab state');
}

$unselected = in_array($rawUnselected, ['true', '1'], true);
$color = $colors[$index - 1];

function darkenHex(string $hex, float $factor): string
{
    $r = (int) round(hexdec(substr($hex, 0, 2)) * $factor);
    $g = (int) round(hexdec(substr($hex, 2, 2)) * $factor);
    $b = (int) round(hexdec(substr($hex, 4, 2)) * $factor);
    return sprintf('%02X%02X%02X', $r, $g, $b);
}

if ($unselected) {
    $iconColor = darkenHex($color, 0.75);
    $svg = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" shape-rendering="crispEdges">'
        . '<rect width="32" height="32" fill="#' . $iconColor . '"/></svg>';
} else {
    $svg = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" shape-rendering="crispEdges">'
        . '<rect width="32" height="32" fill="#FFF"/>'
        . '<rect x="4" y="4" width="24" height="24" fill="#' . $color . '"/></svg>';
}

$favicon = 'data:image/svg+xml;base64,' . base64_encode($svg);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/svg+xml" href="<?= htmlspecialchars($favicon, ENT_QUOTES, 'UTF-8') ?>">
    <title>&#12644;</title>
    <style>
        html,
        body {
            width: 100%;
            height: 100%;
            margin: 0;
        }

        body {
            background-color: #<?= htmlspecialchars($color, ENT_QUOTES, 'UTF-8') ?>;
            overflow: hidden;
        }

        div {
            position: absolute;
            inset: 0;
            background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0));
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>