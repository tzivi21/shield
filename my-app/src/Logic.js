export function containsWordsIgnoreCase(text) {
    const wordsToCheck = ["Suicide", "Kill myself",
        "End my life","I want to die","Can't go on","Life is pointless","No way out"];
    const persent = [0.1, 0.6,
            0.8, 0.1, 0.1, 0.1, 0.1];
    let suiciedParam = 0;
    let numOfSuicideHard = 0;
    wordsToCheck.map((word, index) => {
        if(new RegExp(`\\b${word}\\b`, "i").test(text)) {
            numOfSuicideHard = numOfSuicideHard + 1;
        }
    });
    if (numOfSuicideHard >= 2) {
        suiciedParam=90;
    }
    return suiciedParam;
  }