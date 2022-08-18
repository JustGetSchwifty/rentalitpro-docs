---
sidebar_position: 5
---

# Popis XML feedu

Technická specifikace XML feedu produktů a ceníku.

## Feed a jeho účel

Feedem se rozumí soubor ve formátu XML, kterým partner odesílá svůj seznam produktů pro účely Rentalit Pro. Soubor XML bude buď dostupný na veřejné adrese, odkud je možné jej automaticky periodicky stahovat.

:::tip

Pokud nechcete do systému Rentalit Pro vkládat všechny produkty ve feedu a nechcete kvůli Rentalit Pro vytvářet další feed, je možné využít filtrování pomocí tzv. [allowlistu](#filtrování-feedu).

:::

## Standardy feedu

Feed musí být validním XML souborem v kódování UTF-8.

## Jak je feed zpracováván

Položky feedu jsou přiřazeny vašim kategoriím. Vaše kategorie jsou přiřazeny našim kategoriím produktů Rentalit, na základě kterých počítáme výslednou cenu měsíčního nájmu. Zákazník na výsledné faktuře uvidí váš název produktu, váš kód a dopočítanou cenu měsíční splátky.

## Integrace s Rentalit Pro embed

Produktový kód a ID produktu jsou dva parametry, pomocí kterých poté můžete filtrovat [embedované](embedovane-reseni) i [standalone](standalone-reseni) řešení.

:::caution Upozornění

Produktové kódy a ID produktů musí být v rámci vašeho feedu zcela unikátní.

:::

### Co dělat, když produktové kódy nejsou unikátní?

Po dohodě s námi je možné implementovat řešení, které spojí ID produktu a produktový kód dohromady za účelem vytvoření nového unikátního identifikátoru např. takto `produktovyKod_produktoveID`.

:::caution Důležité upozornění

Pokud budete potřebovat zvolit tento systém párování produktového kód spolu s ID, musíte nás na tento fakt předem upozornit, aby došlo ke změně systému párování na straně Rentalit Pro.

:::

:::danger Pozor

Pokud ani tak nevznikne unikátní identifikátor, není možné váš feed integrovat.

:::

## Jaké jsou možnosti feedu

Feed můžete implementovat dle našeho doporučeného formátu Rentalit Pro a nebo pomocí formátu Heuréka.cz.

## Formát Rentalit Pro

Pokud žádný feed nemáte, doporučujeme naši standardní implementaci.

### Příklad Rentalit Pro feedu

```xml
<?xml version="1.0" encoding="utf-8"?>
<rentalit
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	   xsi:schemaLocation='https://rentalitpro.cz/partners https://rentalitpro.cz/feed.xsd'>
    <products>
        <product>
            <id>1</id>
            <name>První produkt s vaším ID 1</name>
            <code>kod-produktu-001</code>
            <category_id>1</category_id>
            <price>10000.00</price>
            <price_vat>12100.00</price_vat>
        </product>
        <product>
            <id>2</id>
            <name>Druhý produkt s vaším ID 2</name>
            <code>kod-produktu-002</code>
            <category_id>2</category_id>
            <price>37000.50</price>
            <price_vat>44770.605</price_vat>
        </product>
    </products>
    <categories>
        <category>
            <id>1</id>
            <name>Telefony</name>
        </category>
        <category>
            <id>2</id>
            <name>Notebooky</name>
        </category>
    </categories>
</rentalit>
```

#### XSD Rentalit Pro feedu

[https://rentalitpro.cz/feed.xsd](https://rentalitpro.cz/feed.xsd)

```xml
<xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="rentalit">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="products">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="product" maxOccurs="unbounded" minOccurs="0">
                <xs:complexType>
                  <xs:sequence>
                    <xs:element type="xs:long" name="id"/>
                    <xs:element type="xs:string" name="name"/>
                    <xs:element type="xs:string" name="code"/>
                    <xs:element type="xs:long" name="category_id"/>
                    <xs:element type="xs:float" name="price"/>
                    <xs:element type="xs:float" name="price_vat"/>
                  </xs:sequence>
                </xs:complexType>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="categories">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="category" maxOccurs="unbounded" minOccurs="0">
                <xs:complexType>
                  <xs:sequence>
                    <xs:element type="xs:long" name="id"/>
                    <xs:element type="xs:string" name="name"/>
                  </xs:sequence>
                </xs:complexType>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

## Heureka feed

Druhou možností je implementace feedu od Heureka dle specifikace zde: [https://sluzby.heureka.cz/napoveda/xml-feed/](https://sluzby.heureka.cz/napoveda/xml-feed/).

### Příklad feedu

```xml
<?xml version="1.0" encoding="utf-8"?>
<SHOP>
  <SHOPITEM>
    <ITEM_ID>AB123</ITEM_ID>
    <PRODUCTNAME>Nokia 5800 XpressMusic</PRODUCTNAME>
    <MANUFACTURER>NOKIA</MANUFACTURER>
    <CATEGORYTEXT>Elektronika | Mobilní telefony</CATEGORYTEXT>
    <EAN>6417182041488</EAN>
    <PRODUCTNO>RM-559394</PRODUCTNO>
    <PRICE_VAT>6000</PRICE_VAT>
  </SHOPITEM>
</SHOP>

```

:::caution Důležité upozornění

Oproti standardnímu feedu Heureka je v případě Rentalit Pro ale nutné zasílat i nepovinné parametry:
`PRODUCTNO`

V tomto parametru je nutné uvést produktový kód.

V rámci lepšího zpracování na straně Rentalit Pro doporučujeme specifikovat i parametr `MANUFACTURER`, ačkoli není vyžadován. Také je možné specifikovat `EAN`, ačkoli také není vyžadován.

:::

## URL vašeho feedu

Váš feed musí být dostupný na veřejné adrese, na kterou lze přistoupit pomocí URL bez autentikace. Soubor musí jít stáhnout automatickým `CURL` skriptem.

## Periodicita importu

Váš feed bude periodicky importován kvůli aktualizaci ceníku a nabídky. K importu dochází 6krát denně v tyto časy dle časového pásma _Europe/Prague_: `7:00, 10:00, 13:00, 17:00, 21:00, 2:00`.

## Filtrování feedu – allowlist

Pokud se v zasíláném feedu nachází i zboží, které nechcete do systému Rentalit Pro zaslat, je možné feed filtrovat.

Základní a nejjednodušší formou filtrování je filtrování pomocí kategorií. Každé zboží musí být zařazeno v nějaké kategorii a na straně Rentalit Pro je možné zpracovávat jen nějaké kategorie a ostatní ignorovat.

Ve chvíli kdy chcete do systému Rentalit Pro zasílat jen určitou část zboží z jedné kategorie, je nutné implementovat allowlist. Více o allowlistu se dočtete v [další části návodu](allowlist).

## Informace o chybách při importu

Systém je plně automatizovaný a je možné, že ne všechny položky z vašeho feedu budou správně spárovány a zpracovány. Pro tyto účely slouží API feedu, o kterém se dočtete v [další části návodu](api-feedu).
