function introduction(name) {
    return `Hi, my name is ${name}.`
}
// passed test 1

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
// passed test 2

function introductionWithLanguageOptional(name, language) {
    switch (language) { 
        case true:
            language = language;
            break;
        default:
            language = "JavaScript";
        }
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
// passing test 3

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
// passing all tests! yay!


