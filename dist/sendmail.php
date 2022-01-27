<?php
// Файлы phpmailer
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$text = $_POST['comment'];
$file = $_FILES['myfile'];

// Формирование самого письма
$title = "Новый пользователь";
$body = "
<h2>Данные пользователя</h2>
<b>Имя:</b>$name<br>
<b>Телефон:</b> $tel<br>
<b>Почта:</b> $email<br><br>
";
// <b>Сообщение:</b><br>$text
// <b>Почта:</b> $email<br><br>
// <b>Сообщение:</b><br>$text

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.rambler.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'disqusend@rambler.ru'; // Логин на почте
    $mail->Password   = 'qaipcxdyfewjsmce'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('disqusend@rambler.ru', 'User'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('disqustest@rambler.ru');
    // $mail->addAddress('youremail@yandex.ru');  // Ещё один, если нужен

    // Прикрипление файлов к письму
if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
        $filename = $file['name'][$ct];
        if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
            $rfile[] = "Файл $filename прикреплён";
        } else {
            $rfile[] = "Не удалось прикрепить файл $filename";
        }
    }
}
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
?>
