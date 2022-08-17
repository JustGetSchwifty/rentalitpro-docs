---
sidebar_position: 2
---

# Rozdíly mezi řešeními

V čem se liší jednotlivé implementace.

## Whitelabel

Obě řešení podporují tzv. whitelabel – přizpůsobení vzhledu vašemu brandu. Po domluvě je možné nastavit barvy, fonty a podobně našeho embedovaného řešení na míru a zajistit tak vzhled podobný vašemu webu. Díky tomu nemusí váš zákazník ani poznat, že se nachází v embedovaném řešení třetí strany.

## Standalone řešení pro zákazníky

Standalone neboli samostatné řešení je vhodné zejména pro ochodníky, kteří nemají vlastní eshop. Jedná se o **okrajové řešení**, které standardně nepřijímá žádné příchozí parametry a zobrazí celou vaši domluvenou nabídku v rozhraní kalkulačky. Z tohoto rozhraní může zákazník vyhledáváním najít v kalkulačce zboží, které si chce objednat, přidat si ho do konfigurace a objednávku odeslat.

:::info

Standalone řešení kalkulačky lze využít přímo pro obchodníky.

:::

### Standalone pro obchodníky

Správné použití standalone režimu je tzv. obchodnický pohled. Ten nabízí i pole pro poznámku a nástroje pro vygenerování nabídky a stažení ve formátu PDF nebo zaslání na email klienta. Tento pohled je vhodný přímo pro obchodníky, kteří např. při osobní návštěvě klienta (např. finanční poradce) chtějí ukázat ceny splátek. Vygenerovaná nabídva v PDF a zaslaný email s nabídkou obsahují přímý odkaz, který klienta odvede na web Rentalit, kde dokončí svou objednávku.

## Embedované řešení

**Preferovaným řešení** je embed. Ten je implementován pomocí chytrého `iframe`, který využívá knihovnu `iframeResizer`, která zajistí, že se embed plně přizpůsobí kontejneru, do kterého jste ho vložili. Embed je vložený do vašeho webu a umí přijímat vstupní parametry.

Vstupními parametry je možné v kalkulačce předvyplnit zboží, které si klient u vás objednává – bez vstupních parametrů si klient musí v kalkulačce zboží najít sám fulltextovým vyhledáváním, což není preferovaným řešením.

## Speciální případy

Pokud to vyše řešení vyžaduje, je možné použít kombinaci obou řešení a otevírat do nového okna "embedované" řešení, které podporuje vstupní parametry.
