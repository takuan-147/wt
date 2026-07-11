<?php
declare(strict_types=1);

header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');

$hexInput = $_GET['n'] ?? '';
if (!is_string($hexInput)) {
    http_response_code(400);
    exit('Invalid color');
}
$hex = strtoupper($hexInput);
if (!preg_match('/\A[0-9A-F]{6}\z/', $hex)) {
    http_response_code(400);
    exit('Invalid color');
}

$pathState = trim((string) ($_SERVER['PATH_INFO'] ?? ''), '/');
$pathState = explode('/', $pathState)[0] ?? '';
$stateInput = $_GET['state'] ?? $pathState;
if (!is_string($stateInput)) {
    http_response_code(400);
    exit('Invalid tab state');
}
$state = strtolower($stateInput);

if ($state === '') {
    $legacyInput = $_GET['unselected'] ?? 'false';
    if (!is_string($legacyInput)) {
        http_response_code(400);
        exit('Invalid tab state');
    }
    $legacy = strtolower($legacyInput);
    if (!in_array($legacy, ['false', 'true', '0', '1'], true)) {
        http_response_code(400);
        exit('Invalid tab state');
    }
    $state = in_array($legacy, ['true', '1'], true) ? 'unselected' : 'selected';
}

if (!in_array($state, ['selected', 'unselected'], true)) {
    http_response_code(400);
    exit('Invalid tab state');
}

if (!function_exists('imagecreatetruecolor')) {
    http_response_code(500);
    exit('GD extension is unavailable');
}

$image = imagecreatetruecolor(32, 32);
if ($image === false) {
    http_response_code(500);
    exit('Unable to create image');
}

[$r, $g, $b] = array_map('hexdec', str_split($hex, 2));
if ($state === 'unselected') {
    $r = (int) round($r * 0.75);
    $g = (int) round($g * 0.75);
    $b = (int) round($b * 0.75);
}

$color = imagecolorallocate($image, $r, $g, $b);
$white = imagecolorallocate($image, 255, 255, 255);

if ($state === 'unselected') {
    imagefilledrectangle($image, 0, 0, 31, 31, $color);
} else {
    imagefilledrectangle($image, 0, 0, 31, 31, $white);
    imagefilledrectangle($image, 4, 4, 27, 27, $color);
}

header('Content-Type: image/png');
imagepng($image);
imagedestroy($image);