export const getEditorErrorResult = (message: string) => {
  const textMessage = message.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\n'']/g, ' ');
  const messageArray = textMessage.split(' ');
  const expectedOutputIndex = 15;
  const receivedOutputIndex = 18;
  if (
    messageArray[expectedOutputIndex] &&
    messageArray[receivedOutputIndex] &&
    messageArray[expectedOutputIndex] !== messageArray[receivedOutputIndex]
  ) {
    return {
      Expected: messageArray[15].replace(/^"(.*)"$/, '$1'),
      Received: messageArray[18].replace(/^"(.*)"$/, '$1'),
    };
  }
};
