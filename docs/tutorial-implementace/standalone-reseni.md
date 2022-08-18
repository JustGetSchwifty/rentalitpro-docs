---
sidebar_position: 3
---

# Standalone řešení

Popis řešení fungujícího nezávisle na vašem webu.

:::caution Upozornění

Standalone řešení není doporučené pro požití zákazníky. Vždy je lepší [implementace pomocí embedu](embedovane-reseni) se vstupními parametry, které systému předá produktů, které chcete v embedu automaticky předvybrat.

:::

## Co je to standalone řešení

Jedná se o **okrajové řešení**, které standardně nepřijímá žádné příchozí parametry a zobrazí celou vaši domluvenou nabídku v rozhraní kalkulačky. Z tohoto rozhraní může zákazník vyhledáváním najít v kalkulačce zboží, které si chce objednat, přidat si ho do konfigurace a objednávku odeslat.

## Jaké jsou možnosti implementace

- Zobrazení samostatné stránky s Rentalit Pro po kliknutí na tlačítko.
- Vložení standalone verze embedu na vlastní web (_speciální řešení_).
- Odeslání odkazu zákazníkovi s předvyplněným zbožím.

## Jak zobrazit standalone kalkulačku?

Jediné, co k tomuto řešení potřebujete, je odkaz. Ten vypadá následovně:

```
https://rentalitpro.cz/calculator/embed?hash=VÁŠ_UNIKÁTNÍ_HASH
```

Tímto odkazem zobrazíte `embed` kalkulačku v samostatném okně.

Toto řešení se **důrazně nedoporučuje**.
<br></br>
Nepatrně lepším řešením je tento odkaz:

```
https://rentalitpro.cz/calculator/embed?hash=VÁŠ_UNIKÁTNÍ_HASH&standalone
```

Tímto odkazem zobrazíte `embed` kalkulačku v samostatném okně, ale přidáte k ní ještě hlavičku Rentalit Pro, pozadí a celý obsah se přizpůsobí standalone zobrazení.

## Konfigurace vstupních parametrů

Embed má následující vstupní `GET` parametry:

### hash `[string]` _(povinné)_

Váš ověřovací hash do Rentalit Pro.

Např. `xZnzAeXHWa6cBvZXtjnJB1EthBPzFrxA3dibZNlcbNENFbWnzPptpI1DC9QHibQa`

### product_code `[array]` / product_id `[array]` (doporučené)

Pomocí pole `GET` parametrů `product_code` a/nebo `product_id` je možné definovat produkty, které chcete v embedu automaticky předvybrat.

Ukázka:

```
https://rentalitpro.cz/calculator/embed?hash=VÁŠ_UNIKÁTNÍ_HASH&standalone&product_id[]=156&product_id[]=157&product_id[]=55&product_id[]=252&product_code[]=D-N-3590-N3-513
```

:::caution Upozornění

Toto řešení sice předvybere produkty v kalkulačce, ale také uživateli jednoduše zpřístupní informace o produktových kódech a ID přímo v URL, což nemusí být žádoucí.

V tomto případě doporučujeme použít spíše [speciální řešení](#speciální-řešení).

:::

### standalone `[boolean]`

Slouží k aktivaci standalone režimu, který přidá kolem embedu pozadí a vaše logo tak, aby šel embed použit na samostatné stránce bez nutnosti dalšího stylování.

## Speciální řešení

Je možné použít kombinaci embedovaného a standalone řešení, která bude fungovat po technické stránce stejně jako [embedované řešení](embedovane-reseni), ale bude vypadat jako [standalone řešení](embedovane-reseni#standalone-boolean). K tomuto způsobu implementace potřebujete jen na svém webu prázdnou stránku, na které zobrazíte v celé její velikosti embed vypadající jako standalone.

Použijte implementaci popsanou v návodu pro [embedované řešení](embedovane-reseni) a použijte parametr [standalone](embedovane-reseni#standalone-boolean).

:::tip

Toto řešení podporuje vstupní parametry a je tak možné předvybrat produkty v kalkulačce bez toho, aby byly kódy a ID produktů v adrese webu.

:::

## Ukázka embedovaného řešení

Pro ukázky se můžete podívat do kategorie [ukázek řešení](../tutorial-zaklady/ukazky-reseni-standalone).

## DEMO

Pro vyzkoušení, jak má integrace vypadat, jsme vytvořili následující dema:

- [Speciální řešení: embed v režimu standalone s whitelabel](https://codepen.io/matousjanda/pen/LYyoKEK?editors=1010)
- [Standardní zobrazení](https://stage.rentalitpro.cz/calculator/embed?hash=xZnzAeXHWa6cBvZXtjnJB1EthBPzFrxA3dibZNlcbNENFbWnzPptpI1DC9QHibQa)
- [Standardní zobrazení s předvybranými produkty](https://stage.rentalitpro.cz/calculator/embed?hash=xZnzAeXHWa6cBvZXtjnJB1EthBPzFrxA3dibZNlcbNENFbWnzPptpI1DC9QHibQa&product_id[]=156&product_id[]=157&product_id[]=55&product_id[]=252&product_code[]=D-N-3590-N3-513)
- [Standalone / whitelabel zobrazení s předvybranými produkty](https://stage.rentalitpro.cz/calculator/embed?hash=xZnzAeXHWa6cBvZXtjnJB1EthBPzFrxA3dibZNlcbNENFbWnzPptpI1DC9QHibQa&product_id[]=156&product_id[]=157&product_id[]=55&product_id[]=252&product_code[]=D-N-3590-N3-513&standalone)
