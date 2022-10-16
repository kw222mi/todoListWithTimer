# Reflektioner

## Kapitel 2

Jag hamnar lätt i fällan att alla namn liknar varandra. Vilket gör att de blir svåra att skilja och svårt att söka på dem. Bland variablerna hittade jag både en timeDiv och en timerDiv, vilket kräver en viss koncentration för att inte göra fel, vilket är onödigt.  

Samtidigt hittar jag dessa tre namn på funktioner som ligger efter varandra och det är högst osäkert vad de egentligen gör om man tittar bara på på namnen.

getInputAndCreateTodo()
doTodo()
createToDo()

Bytte namnen till följande

createTodoAndSaveIt()
createTodoComponent()
createHtmlElements()

## Kapitel 3

Jag har blivit mycket bättre på att göra fler funktioner från början. Istället för som tidigare bara koda på och låta all kod hamna i samma funktion för att sedan städa upp. Jag känner att jag i och med det lättare får överblick över vad jag håller på med. Att funktioner ska göra bara en sak är en bra tanke, men jag är inte helt förtjust när det leder till små funktioner på en eller två rader ( exempel: add(a, b) {return a+b} ). Däremot tycker jag att det är väldigt viktigt att det inte ska finnas sidoeffekter. Vilket jag upptäckte att jag hade flera stycken när jag började analysera koden jag skrivit.

## Kapitel 4

Jag gillar tänket kring kommentarer i boken. Jag har skrivit en del JS-doc kommentarer som bara upprepar det som redan står i koden. Det gör en lite "dum i huvudet", man försöker bara beta av dem istället för att fundera över vad som verkligen behöver kommuniceras. Om man själv tvingas avgöra ifall en kommentar behövs eller inte så tvingas man tänka. Det var också en tankeställare det du sade på föreläsningen om att man kan behöva kommunicera vad koden inte gör också,

## Kapitel 5

Formatteringen av koden gör mycket för läsbarheten. Merparten görs med hjälp av lint, allt från indentering, blankrader till längden på raderna. Kvar till mig blir att försöka ordna kod efter hur den förhåller sig till annan kod. Som att placera funktioner som anropar andra funktioner nära varandra. Helst ska en funktion som anropar en annan funktion vara direkt ovanför denna så att man kan följa anropen. Så jag testade att ordna om Timer modulen efter detta. Innan hade jag odnat funktionerna med de publika funktionerna överst. Nu är det mer formatterat efter respektive funktion, vilket gör det lättare att se vilka delar som skulle kunna brytas ut till egna klasser.

## Kapitel 6

## Kapitel 7

## Kapitel 8

## Kapitel 9

## Kapitel 10

## Kapitel 11

