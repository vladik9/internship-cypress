class randomGeneratorEmail {
 genMeEmailcode ()  {
   const randomNum1 =
     Math.floor(Math.random() * 2) + Math.floor(Math.random() * 3) + 2;
   const randomNum2 =
     Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + 4;
   const randomNum3 =
     Math.floor(Math.random() * 3) + Math.floor(Math.random() * 6) + 6;
   const randomNum4 =
     Math.floor(Math.random() * 2) + Math.floor(Math.random() * 0) + 2;
     const randomNum5=
       Math.floor(Math.random() * 4) + Math.floor(Math.random() * 2.3) + 2;

   return (`ca${randomNum4}${randomNum5}no${randomNum5}me${randomNum3}I${randomNum1}${randomNum2}@email.com`);
 }
}
export default randomGeneratorEmail;
