import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const companyTemplateId = import.meta.env.VITE_EMAILJS_COMPANY_TEMPLATE_ID;
const clientTemplateId = import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID;

export async function sendContactEmails(formData) {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    service: formData.service,
    message: formData.message,
  };

  await emailjs.send(
    serviceId,
    companyTemplateId,
    templateParams,
    publicKey
  );

  await emailjs.send(
    serviceId,
    clientTemplateId,
    templateParams,
    publicKey
  );
}