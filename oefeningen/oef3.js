let wagens = [
    {kleur: "geel", merk: "volkswagen", bouwjaar: "2003", prijs: "2 euro"},
    {kleur: "zwart", merk: "peugot", bouwjaar: "2012", prijs: "5 euro"},
    {kleur: "blauw", merk: "bmw", bouwjaar: "2020", prijs: "7 euro"}
]


wagens.forEach(wagen => {
    console.log(wagen.prijs);
});
