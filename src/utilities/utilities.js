const removeSpecialCharactersAndCapitaliseFirstLetter = str => {
  let newStr = str.replace(/[^\w]/g, "");
  return newStr.charAt(0).toLowerCase() + newStr.slice(1);
};

// export { removeSpecialCharactersAndCapitaliseFirstLetter };
module.exports = removeSpecialCharactersAndCapitaliseFirstLetter;
