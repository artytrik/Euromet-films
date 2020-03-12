<?php
  $errors = array();
  $data = array();

  if (empty($_POST['call-name']))
    $errors['call-name'] = 'Name is required';

  if (empty($_POST['call-tel']))
    $errors['call-tel'] = 'Telephone is required';

  if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
  } else {
    $to = "mail@euromet.m-n.agency";;
    $from = "mail@euromet.m-n.agency";

    $first_name = $_POST['call-name'];
    $subject = "Форма отправки сообщений с сайта Euromet Films";
    $message = $first_name . " оставил телефон:" . "\n\n" . $_POST['call-tel'];

    $headers = "From:" . $from;

    mail($to,$subject,$message,$headers);

    $data['success'] = true;
    $data['message'] = 'Success!';
  }
echo json_encode($data);
?>
