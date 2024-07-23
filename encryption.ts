import * as forge from "node-forge";

/** This section contains helper methods for encrypting and decrypting data
 *
 */
export const decrypt = (encryptedText: string) => {
  const key = process.env.NEXT_PUBLIC_APP_SECRET_KEY || "";
  const iv = process.env.NEXT_PUBLIC_APP_IV_KEY || "";
  var response;
  try {
    var keys = decodeKeys(key, iv);
    const decipher = forge.cipher.createDecipher("AES-CBC", keys.key);
    decipher.start({ iv: keys.iv });
    decipher.update(
      forge.util.createBuffer(forge.util.decode64(encryptedText))
    );
    decipher.finish();
    response = JSON.parse(decipher.output.getBytes());
  } catch (error) {
    console.error(error);
    throw new Error("Unable to decrypt your data");
  }
  return response;
};

export const encrypt = (text: string) => {
  var response;
  const key = "fQNl8rV5UkKQUfpJRXxmNJLLvN/mtYv3aUkqFfHrVo4=";
  const iv = "9HtrYCzJOhdGYB8NIfkzCA==";
  try {
    var keys = decodeKeys(key, iv);
    var cipher = forge.cipher.createCipher("AES-CBC", keys.key);
    cipher.start({ iv: keys.iv });
    cipher.update(forge.util.createBuffer(text));
    cipher.finish();
    var encrypted = cipher.output.getBytes();
    response = forge.util.encode64(encrypted);
  } catch (error) {
    console.error(error);
    throw new Error("Unable to encrypt your data");
  }
  return response;
};

export const decodeKeys = (key: string, iv: string) => {
  return {
    key: forge.util.decode64(key),
    iv: forge.util.decode64(iv),
  };
};
