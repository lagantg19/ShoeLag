const Analyse = (text) => {
  console.log(text);
  if (text.includes("hi")) {
    return "hey whats up";
  }
  if (text.includes("shoe")) {
    return "This is a exclusive store to get shoe products";
  }
  return "can u rephrase that message";
};

export default Analyse;
