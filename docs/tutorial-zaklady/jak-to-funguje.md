---
sidebar_position: 1
---

# Jak to funguje

Vysvětlení celého procestu Rentalit Pro.

## Pojmy

- `Rentalit`: firma Rentalit s. r. o. [[web](https://rentalit.cz/)] poskytující chytrý operativní leasing zařízení
- `Rentalit Pro`: [portál](https://rentalitpro.cz/) Rentalit sloužící partnerům, kteří chtějí nabízet chytrý leasing Rentalit
- `Embed`: Rentalit Pro vložený do vašeho webu
- `Standalone`: Rentalit Pro v samostatném okně
- `Kalkulačka`: rozhraní Rentalit Pro, ve kterém si zákazník volí zboží a délku splácení a ze kterého pak pokračuje na web Rentalit k dokončení registrace
- `Whitelabel`: přizpůsobení vzhledu vašemu brandu, nastavení fontů, barev a podobně tak, aby řešení zapadalo do vašeho designu
- `Skóring` / `Risk`: návazný systém, který je nedílnou součástí procesu, který prověří schopnost klienta pravidelně platit měsíční pronájem
- `Vstupní parametry`: embed i standalone řešení podporuje vložení konkrétních produktů do kalkulačky při načtení kalkulačky – konkrétní zboží je definováno právě vstupními parametry
- `Hash`: váš unikátní kód, kterým jednoznačně identifikujeme naše partnery
- `Feed`: soubor ve formátu XML, který obsahuje vaše produkty, které chcete zobrazit v prostředí Rentalit Pro
- `Stage`: testovací prostředí, opakem `stage` je `produkce`, tj. reálné produkční prostředí

## Proces z pohledu partnera

Nejprve se domluvíte s naším [obchodním oddělením](/docs/kontakt). S našimi obchodními zástupci si domluvíte smluvní podmínky, druhy pronajímaného zboží, ceník a podobně.

Poté nakonfigurujeme prostředí Rentalit Pro na základě vaší smlouvy a předáme vám váš `unikátní hash`. Ten bude sloužit k jedinečné identifikaci a budete ho potřebovat při implementaci všech typů řešení.

Následně se rozhodnete, které řešení je pro vás nejlepší a za použití [tohoto návodu](../tutorial-implementace/uvod) nasadíte Rentalit Pro na váš web – ať už půjde o standalone řešení, nákupní tlačítko a nebo embedované řešení.

Dodáte nám odkaz na váš [XML feed](../tutorial-implementace/popis-feedu), který budeme periodicky stahovat a aktualizovat tak vaše ceníky a zboží.

## Proces z pohledu klienta

Na základě výběru typu implementace, klient přijde na váš web a zde si přes nákupní tlačítko / vložený embed / odkaz na kalkulačku, zobrazí kalkulačku. V té bude mít předvybrané zboží, které si chce objednat a nebo si ho sám zvolí. Klient si poté zvolí délku splácení a ihned vidí cenu, za kterou si může zboží měsíčně pronajímat.

V další části procesu se klient dostane na web Rentalit, kde si založí účet a vyplní své důležité údaje. Vyplněné údaje předáme skóringovému systému, který rozhodne, zda je klient schopný měsíčně platit pronájem a nebo nikoli.

:::info Poznámka

Některé následující kroky jsou závislé na dohodě mezi Rentalit a vámi. Záleží na smluvních podmínkách a konkrétním nastavení objednávkového procesu mezi Rentalit a vámi.

:::

V případě kladné odpovědi risku je klient poté zpracován naším klientským centrem. Telefonicky je ověřena jeho objednávka, bydliště a identita. Poté jsou klientovi vygenerovány smlouvy, které obdrží na e-mail.

Smlouvy jsou společně s prázdným předávacím protokolem odeslány na vaši pobočku, kde si klient bude vyzvedávat zboží a podepisovat dokumenty.

Dochází také k ověření identity klienta a to buď na vaší pobočce, nebo pomocí našeho kurýra.

Poté zákazník obdrží zboží buď na vaší podobčce, nebo je mu zasláno kurýrní společností.

Následně klient obdrží první fakturu a splátkový kalendář a začíná ihned využívat zboží na operativní leasing.
