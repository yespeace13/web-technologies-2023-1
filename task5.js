function returnPrefix(prefix, words, prefixes) {
    for (let i = 1; i < words.length; i++) {
        if (!words[i].includes(prefix)) {
            return treePrefix(prefix, words, prefixes)
        }
    }
    prefixes.add(prefix)
    return prefixes
}

function treePrefix(prefix, words, prefixes) {
    if (prefix.length > 2) {
        prefs = new Set(returnPrefix(prefix.substring(1, prefix.length), words, prefixes), prefixes)
        prefs = new Set(returnPrefix(prefix.substring(0, prefix.length - 1), words, prefixes), prefixes)
    }
    return prefixes
}

function findPrefix(words) {
    prefixes = Array.from(returnPrefix(words[0], words, new Set()))
    return prefixes.length != 0 ? prefixes.sort((a, b) => { return b.length - a.length })[0] : ""
}

strs = ["цветок", "поток", "хлопок"] // ок
prefix = findPrefix(strs)
console.log(prefix)

strs = ["собака", "гоночная машина", "машина"] // ""
prefix = findPrefix(strs)
console.log(prefix)


strs = ["коцвето", "копоток", "кохлопок"] // ко
prefix = findPrefix(strs)
console.log(prefix)
