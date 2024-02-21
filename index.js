const getWordDefinition = async function () {
    let word = 'hello';
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const info = await data.json();
    console.log(info[0]);
};
getWordDefinition();