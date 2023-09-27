//Binary Agents
//Return an English translated sentence of the passed binary string.
//The binary string will be space separated.


function binaryAgent (arr){

  // Split the binary string into array of binary numbers
  const binaryArr = arr.split(" ");

  // Create an empty string to store the outcome 
  let englishText = " ";

  // Iterate through all binary array using 'for' statment
  for (let i = 0; i < binaryArr.length ; i ++){

    // Convert binary to decimal using parseInt
    const decimal = parseInt(binaryArr[i], 2);

    // Convert decimal to ASCII using String.fromCharCode()
    const char = String.fromCharCode(decimal);

    // Add result to binaryArr
    englishText += char
  }

  return englishText

}

const binaryString = "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111";
const englishText = binaryAgent(binaryString);
console.log(englishText);