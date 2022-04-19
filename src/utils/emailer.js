import emailjs from "emailjs-com";

const userID = "D45dTpAQ93ZmpTvT_";
const templateID = "template_e3lh8lz";
const serviceID = "service_jz0h5h8";

export const sendEmail = (e, setOpen) => {
  e.preventDefault();

  return emailjs.sendForm(serviceID, templateID, e.target, userID).then(
    (result) => {
      return "true";
    },
    (error) => {
      console.log(error.text);
      return "error";
    }
  );
};
