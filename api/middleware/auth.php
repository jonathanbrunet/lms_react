<?php
require_once '../config/jwt_config.php';
require_once '../vendor/firebase/php-jwt/BeforeValidException.php';
require_once '../vendor/firebase/php-jwt/ExpiredException.php';
require_once '../vendor/firebase/php-jwt/SignatureInvalidException.php';
require_once '../vendor/firebase/php-jwt/JWT.php';
// le code protégé vient ensuite
require_once '../middleware/auth.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$headers = getallheaders();
$authHeader = $headers['Authorization'] ?? '';

if (preg_match('/Bearer\s(.*)/', $authHeader, $matches)) {
    $jwt = $matches[1];
    try {
        $decoded = JWT::decode($jwt, new Key(SECRET_KEY, JWT_ALGO));
        // Authentifié avec succès, $decoded contient les infos utilisateur
    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode(["message" => "Token invalide : " . $e->getMessage()]);
        exit;
    }
} else {
    http_response_code(401);
    echo json_encode(["message" => "Token non fourni"]);
    exit;
}
?>
