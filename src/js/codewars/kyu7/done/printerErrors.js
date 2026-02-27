console.log('kyu-7-printerErrors');

const printerError = s => `${s.replace(/[a-m]/g, '').length}/${s.length}`;

const s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
console.log(printerError(s), '3/56');
