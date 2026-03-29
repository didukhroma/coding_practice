function acronymBuster(string) {
  const knownAcronyms = {
    KPI: 'key performance indicators',
    EOD: 'the end of the day',
    TBD: 'to be decided',
    WAH: 'work at home',
    IAM: 'in a meeting',
    OOO: 'out of office',
    NRN: 'no reply necessary',
    CTA: 'call to action',
    SWOT: 'strengths, weaknesses, opportunities and threats',
  };
  const suggestion = string.match(/[A-Z]{3,}/g)?.find(el => !knownAcronyms[el]);
  if (suggestion)
    return `${suggestion} is an acronym. I do not like acronyms. Please remove them from your email.`;
  const res = string
    .replaceAll(/[A-Z]{3,}/g, el => knownAcronyms[el])
    .replaceAll(/\.\s+\w/g, el => el.toUpperCase());

  return res[0].toUpperCase() + res.slice(1);
}

console.log(acronymBuster('BRB I need to go into a KPIs meeting before EOP')); // "BRB is an acronym. I do not like acronyms. Please remove them from your email.");

console.log(acronymBuster('I am IAM so will be OOO until EOD')); //   'I am in a meeting so will be out of office until the end of the day';

console.log(acronymBuster('Going to WAH today. NRN. OOO')); // 'Going to work at home today. No reply necessary. Out of office'
