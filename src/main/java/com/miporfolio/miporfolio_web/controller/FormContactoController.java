package com.miporfolio.miporfolio_web.controller;

import com.miporfolio.miporfolio_web.model.FormContacto;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;

@RestController
public class FormContactoController {
  @Autowired
  private JavaMailSender mailSender;

  @PostMapping("/api/contacto")
  public ResponseEntity<String> postFormContacto(@RequestBody FormContacto mensaje) throws MessagingException {
    try {
      SimpleMailMessage email = new SimpleMailMessage();
      email.setTo("cristianastullidlc@gmail.com");
      email.setSubject("Nuevo mensaje del porfolio");
      email.setText("Nombre: " + mensaje.getNombre() + "\n" +
          "Email: " + mensaje.getCorreoElectronico() + "\n\n" +
          "Mensaje:\n" + mensaje.getMensaje());
      mailSender.send(email);
      MimeMessage mimeMessage = mailSender.createMimeMessage();
      MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true); // true = multipart

      helper.setTo(mensaje.getCorreoElectronico());
      helper.setSubject("Gracias por tu contacto - CV adjunto");
      helper.setText(
          "<h3>¡Gracias por tu mensaje, " + mensaje.getNombre() + "!</h3>" +
              "<p>Te comparto mi <strong>CV adjunto</strong> para que lo tengas a mano.</p>" +
              "<p>Saludos,<br><b>Cristian Astulli de la Cruz</b></p>",
          true);

      FileSystemResource archivo = new FileSystemResource(new File("src/main/resources/static/CV-CristianAstulliDeLaCruz.pdf"));
      helper.addAttachment("CV-CristianAstulliDeLaCruz.pdf", archivo);

      mailSender.send(mimeMessage);
      return ResponseEntity.ok("Mensaje enviado correctamente");
    } catch (MessagingException e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body("Error al enviar el mensaje");
    }
  }
}
