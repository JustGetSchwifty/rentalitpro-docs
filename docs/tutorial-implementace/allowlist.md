---
sidebar_position: 7
---

# Allowlist

Pokročilé filtrování příchozího XML feedu.

## Účel allowlistu

Pokud se v zasíláném feedu nachází i zboží, které nechcete do systému Rentalit Pro zaslat, je možné feed filtrovat.

K pokročilému filtrování slouží tzv. allowlist.

## Formát allowlistu

Allowlist je ve formátu `CSV` odděleném středníky `;` v kódování `UTF-8` s hlavičkou na prvním řádku a cenami v českém formátu s detinnou čárkou `,`.

### Příklad

```CSV
Zařízení;PN;Cena bez DPH;Cena s DPH
Apple iPhone SE 64GB Midnight (2022);MMXF3CN/A;102029,752,314;123456
Apple iPhone SE 64GB Starlight (2022);MMXG3CN/A;102029,752,314;123456
Apple iPhone SE 64GB (PRODUCT)RED (2022);MMXH3CN/A;102029,752,314;123456
Apple iPhone SE 128GB Midnight (2022);MMXJ3CN/A;102029,752,314;123456
Apple iPhone SE 128GB Starlight (2022);MMXK3CN/A;102029,752,314;123456
Apple iPhone SE 128GB (PRODUCT)RED (2022);MMXL3CN/A;102029,752,314;123456
Apple iPhone SE 256GB Midnight (2022);MMXM3CN/A;102029,752,314;123456
Apple iPhone SE 256GB Starlight (2022);MMXN3CN/A;102029,752,314;123456
Apple iPhone SE 256GB (PRODUCT)RED (2022);MMXP3CN/A;102029,752,314;123456
iPhone 13 mini 128GB Midnight;MLK03CN/A;102029,752,314;123456
iPhone 13 mini 128GB Starlight;MLK13CN/A;102029,752,314;123456
iPhone 13 mini 128GB Pink;MLK23CN/A;102029,752,314;123456
iPhone 13 mini 128GB (PRODUCT)RED;MLK33CN/A;102029,752,314;123456
iPhone 13 mini 128GB Blue;MLK43CN/A;102029,752,314;123456
iPhone 13 mini 256GB Midnight;MLK53CN/A;102029,752,314;123456
iPhone 13 mini 256GB Starlight;MLK63CN/A;102029,752,314;123456
iPhone 13 mini 256GB Pink;MLK73CN/A;102029,752,314;123456
iPhone 13 mini 256GB (PRODUCT)RED;MLK83CN/A;102029,752,314;123456
iPhone 13 mini 256GB Blue;MLK93CN/A;102029,752,314;123456
iPhone 13 mini 512GB Midnight;MLKA3CN/A;102029,752,314;123456
iPhone 13 mini 512GB Starlight;MLKC3CN/A;102029,752,314;123456
iPhone 13 mini 512GB Pink;MLKD3CN/A;102029,752,314;123456
iPhone 13 mini 512GB (PRODUCT)RED;MLKE3CN/A;102029,752,314;123456
```

:::info Poznámka

Cena a Cena s DPH je v allowlistu uvedena jenom kvůli kontrole, že se jedná o shodné zboží s vaším XML feedem. Ceny zaslané v allowlistu se nikam nepropisují.

:::

## Aktualizace allowlistu

Allowlist je možné nám zaslat na e-mail a my jej aktualizujeme.

:::info Poznámka

V budoucnosti bude možné allowlist nahrávat automaticky pomocí FTP napřímo.

:::

## Používání allowlistu

Pokud chcete používat allowlist, nezapomeňte nás na to upozornit, abychom mohli systém připravit.
