const TITLE_CASE_CAPITALIZATION_EXCLUDES = new Set
(
    [
        "a",
        "an",
        "and",
        "as",
        "at",
        "be",
        "by",
        "for",
        "in",
        "of",
        "or",
        "the",
        "to",
        "vs",
        "vs."
    ]
);

const toTitleCaseWord = (word: string, index: number) => {
    if (index === 0 || !TITLE_CASE_CAPITALIZATION_EXCLUDES.has(word)) {
        return word.charAt(0).toUpperCase() + word.substring(1, word.length);
    } else {
        return word;
    }
}

const toTitleCase = (str?: string) => {
    if (typeof str === 'string') {
        return str
            .split(' ')
            .map(toTitleCaseWord)
            .join(' ')
            .split('-')
            .map(toTitleCaseWord)
            .join('-');
    } else {
        return str;
    }
}

export {toTitleCase}