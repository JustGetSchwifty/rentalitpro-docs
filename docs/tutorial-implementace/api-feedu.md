---
sidebar_position: 6
---

# API XML feedu

Rentalit Pro zpracovává XML feed zcela automaticky a periodicky. Je možné, že díky filtrování a / nebo chybnému párování produktů a / nebo duplicitám nebudou do Rentalit Pro přeneseny všechny produkty vašeho XML.

Aby bylo možné zjistit stav posledního importu, existuje k tomuto účelu jednoduché API.

K dispozici je informace v textové podobě, `XML` a `JSON`. Pro některé chyby je k dispozici i `CSV` export.

## Účel API

API slouží zejména jako reportovací médium pro získání informací o produktech, které nebyly zařazeny do katalogu Rentalit Pro z důvodu duplicit a/nebo nespárovaných kategorií.

:::danger Důležité upozornění

API není určeno k častému periodickému zpracovávání. Pro přístup k API jsou implementovány časové limity. V případě automatického zpracovávání výstupů z API je doporučeno činit tak v čase pravidelné aktualizace + pár minut.

:::

### Duplicity

Všechny produkty musí mít zcela unikátní ID a produktový kód. Pokud více produktů má stejné produktový kód a / nebo ID, jsou nespárovány a reportovány tímto API.

### Nespárované kategorie

Každý produkt musí mít uvedenou kategorii. Kategorie musí existovat i na straně Rentalit Pro. Pokud není možné kategorii Rentalit Pro spárovat s kategorií v odeslaném XML, tak dojde k vyřazení produktu a je pak reportován tímto API.

## Připojení k API

API je přístupné na adrese `https://rentalitpro.cz/api/v1/status/`. API je dostupné pouze pro přihlášené uživatele.

### Autentizace

API není veřejné a je nutné se přihlásit. Přihlášení probíhá pomocí parametru GET hash, jehož obsahem je váš partnerský hash, který vám byl přidělen. Bez specifikovaného hash se API nenačte a nenabídne žádné informace.

### Služby

- `json` – status ve formátu **JSON**. Obsahuje informaci o času posledního importu, stavu zpracování, seznamu duplicit, nespárovaných kategoriích a produktech v nespárovaných kategoriích.
- `xml` – status ve formátu **XML**. Obsahuje informaci o času posledního importu, stavu zpracování, seznamu duplicit, nespárovaných kategoriích a produktech v nespárovaných kategoriích.
- `txt` – status ve formátu **TXT**. Obsahuje informaci o času posledního importu, stavu zpracování, seznamu duplicit, nespárovaných kategoriích a produktech v nespárovaných kategoriích..
- `csv/code` – seznam duplicitních kódů produktů ve formátu **CSV**
- `csv/id` – seznam duplicitních kódů produktů ve formátu **CSV**
- `csv/in_xml_not_whitelist` – seznam produktů, které se vyskytují v zaslaném XML souboru, ale nejsou uvedené ve whitelistu ve formátu **CSV**
- `csv/in_whitelist_not_xml` – opak předchozího; seznam produktů, které se vyskytují ve whitelistu, ale nejsou zasílány v XML importu ve formátu **CSV**
- `csv/whitelist_duplicities` – seznam duplicit ve whitelistu vč. počtu výskytů jednotlivých duplicit ve formátu **CSV**

### Příklady

Získání JSON:<br></br>
`http://rentalitpro.cz/api/v1/status/json?hash=[váš přidělený hash]`

Získání CSV s duplicitními kódy produktů:<br></br>
`http://rentalitpro.cz/api/v1/status/csv/code?hash=[váš přidělený hash]`

Získání textové informace:<br></br>
`http://rentalitpro.cz/api/v1/status/txt?hash=[váš přidělený hash]`

## Omezení, rate limiting API

API je limitováno a nelze jej používat neomezeně. Při překročení limitu obdržíte od serveru odpověď `429: Too many requests`. Limity jsou v následující tabulce.

| Služba                    | Limit počet:minut | Jak často lze načítat bez chyby |
| ------------------------- | ----------------- | ------------------------------- |
| txt                       | 30:1              | Jednou za dvě sekundy.          |
| json                      | 6:1               | Jednou za deset sekund.         |
| xml                       | 6:1               | Jednou za deset sekund.         |
| csv/code                  | 1:1               | Jednou za minutu.               |
| csv/id                    | 1:1               | Jednou za minutu.               |
| csv/in_xml_not_whitelist  | 1:1               | Jednou za minutu.               |
| csv/in_whitelist_not_xml  | 1:1               | Jednou za minutu.               |
| csv/whitelist_duplicities | 1:1               | Jednou za minutu.               |
