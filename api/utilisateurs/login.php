<?php
header("Content-Type: application/json");
require_once '../config/database.php';
require_once '../config/jwt_config.php';
require_once '../vendor/firebase/php-jwt/BeforeValidException.php';
require_once '../vendor/firebase/php-jwt/ExpiredException.php';
require_once '../vendor/firebase/php-jwt/SignatureInvalidException.php';
require_once '../vendor/firebase/php-jwt/JWT.php';

use Firebase\JWT\JWT;

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->email) && !empty($data->mot_de_passe)) {
    $sql = "SELECT * FROM utilisateurs WHERE email = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$data->email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($data->mot_de_passe, $user['mot_de_passe'])) {
        $payload = [
            "iat" => time(),
            "exp" => time() + (60 * 60), // 1 heure
            "data" => [
                "id" => $user['id'],
                "email" => $user['email']
            ]
        ];
        $jwt = JWT::encode($payload, SECRET_KEY, JWT_ALGO);
        echo json_encode(["message" => "Connexion réussie", "token" => $jwt]);
    } else {
        echo json_encode(["message" => "Identifiants incorrects"]);
    }
} else {
    echo json_encode(["message" => "Email et mot de passe requis"]);
}
?>
