const generatePass = () => {
  let password: string = "";
  const characters: string = "Aa@##@#1231244ASDASFhdfhdfhdfggll";
  const passwordLength: number = 8;

  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

export default generatePass;
