import { MailAdapter, SendaMailData } from "../mail.adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "198586e6e15fd1",
      pass: "9cc8f6ea7cf6a9"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail( { subject, body }: SendaMailData) {
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Gabriel Federizzi <gabrielfederizzi@gmail.com>',
        subject: subject,
        html: body,
    });
    };
}