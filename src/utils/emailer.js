import emailjs from "emailjs-com";

const userID = "user_AEbsI145rVquxhHKepWk3";
// const token = "67b1d1c0f32f1564028e63ee1878265a";
const templateID = "template_6rkzj1p";
const serviceID = "service_nlrs5qf";

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
