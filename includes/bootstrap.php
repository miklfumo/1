<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$scriptName = $_SERVER['SCRIPT_NAME'] ?? '/index.php';
$basePath = rtrim(str_replace('\\', '/', dirname($scriptName)), '/.');
$basePath = $basePath === '/' ? '' : $basePath;

function site_url(string $path = ''): string
{
    global $basePath;
    $normalized = ltrim($path, '/');
    if ($normalized === '') {
        return $basePath !== '' ? $basePath . '/' : '/';
    }
    return ($basePath !== '' ? $basePath : '') . '/' . $normalized;
}
