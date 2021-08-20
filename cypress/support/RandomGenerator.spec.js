class randomGeneratorEmail {
 genMeEmailcode ()  {
    const randomNum1 =
      Math.floor(Math.random() * 2) + Math.floor(Math.random() * 3) + 5;
    const randomNum2 =
      Math.floor(Math.random() * 7) + Math.floor(Math.random() * 2) + 4;
    const randomNum3 =
      Math.floor(Math.random() * 3) + Math.floor(Math.random() * 3) + 2;
    const randomNum4 =
      Math.floor(Math.random() * 8) + Math.floor(Math.random() * 0) + 2;
    return (`ca${randomNum4}nome${randomNum3}I${randomNum1}${randomNum2}@email.com`);
  }
}
export default randomGeneratorEmail;
