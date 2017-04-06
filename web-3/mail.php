<?php 
	//Принимаем постовые данные
	$form=$_POST['whatever'];
	$name=$_POST['user_name'];
	$email=$_POST['user_email'];
	$message=$_POST['user_message'];
	//Тут указываем на какой ящик посылать письмо
	$to = "79991570874-mail@yandex.ru";
	//Далее идет тема письма и само сообщение
	// Тема письма
	$subject = "Заявка с моего первого сайта";
	// Сообщение письма
	$message = "
	Форма, которую заполнил клиент: ".htmlspecialchars($form)."<br />
	Имя пользователя: ".htmlspecialchars($name)."<br />
	E-mail: ".htmlspecialchars($email)."<br />
	Сообщение: ".htmlspecialchars($message)."";
	// Отправляем письмо при помощи функции mail();
	$headers = "From: homework.sl <drug@homework.sl>\r\nContent-type: text/html; charset=UTF-8 \r\n";
	mail ($to, $subject, $message, $headers);
	// Перенаправляем человека на страницу благодарности и завершаем скрипт
	header('Location: thanks.html');
	exit();
 ?>