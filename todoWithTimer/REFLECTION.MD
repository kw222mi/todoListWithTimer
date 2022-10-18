# Reflektioner

## Kapitel 2

Jag hamnar lätt i fällan att alla namn liknar varandra. Vilket gör att de blir svåra att skilja och svårt att söka på dem. Bland variablerna hittade jag både en timeDiv och en timerDiv, vilket kräver en viss koncentration för att inte göra fel, vilket är onödigt. När alla namn innehåller antingen timer, time eller todo blir det svårare att skilja på dem och det blir brus som står ivägen för förståelsen.

Samtidigt hittar jag dessa tre namn på funktioner som ligger efter varandra och det är högst osäkert vad de egentligen gör om man tittar bara på på namnen.

getInputAndCreateTodo()

doTodo()

createToDo()

Bytte namnen till följande

createNewTodoAndSaveIt()

createTodoComponent()

createHtmlElements()

## Kapitel 3

Jag har blivit mycket bättre på att göra fler funktioner från början. Istället för som tidigare bara koda på och låta all kod hamna i samma funktion för att sedan städa upp. Jag känner att jag i och med det lättare får överblick över vad jag håller på med. Att funktioner ska göra bara en sak är en bra tanke, men jag är inte helt förtjust när det leder till små funktioner på en eller två rader ( exempel: add(a, b) {return a+b} ). Däremot tycker jag att det är väldigt viktigt att det inte ska finnas sidoeffekter. Vilket jag upptäckte att jag hade flera stycken när jag började analysera koden jag skrivit.

## Kapitel 4

Jag gillar tänket kring kommentarer i boken. Jag har skrivit en del JS-doc kommentarer som bara upprepar det som redan står i koden. Det gör en lite "dum i huvudet", man försöker bara beta av dem istället för att fundera över vad som verkligen behöver kommuniceras. Om man själv tvingas avgöra ifall en kommentar behövs eller inte så tvingas man tänka. Det var också en tankeställare det du sade på föreläsningen om att man kan behöva kommunicera vad koden inte gör också,

## Kapitel 5

Formatteringen av koden gör mycket för läsbarheten. Merparten görs med hjälp av lint, allt från indentering, blankrader till längden på raderna. Kvar till mig blir att försöka ordna kod efter hur den förhåller sig till annan kod. Som att placera funktioner som anropar andra funktioner nära varandra. Helst ska en funktion som anropar en annan funktion vara direkt ovanför denna så att man kan följa anropen. Så jag testade att ordna om Timer modulen efter detta. Innan hade jag odnat funktionerna med de publika funktionerna överst. Nu är det formatterat efter respektive funktion, vilket gör det lättare att se vilka delar som skulle kunna brytas ut till egna klasser. (Se mer under Kapitel 10)

## Kapitel 6

Min modul timer tar emot en datastruktur i form av ett objekt. Detta gör det svårare om jag vill ändra någonting i själva strukturen, om jag exempelvis vill ändra från sekunder till millisekunder, eftersom jag då behöver ändra och anpassa flera funktioner. Fördelen är att det går enklare att lägga till nya funktioner i modulen och vilket jag anser är mer användbart. 

I övrigt har jag använt mig av klasser som är objekt, där variablerna är privata, men det finns publika metoder. Jag tycker att det är lättare att abstrahera och kapsla in koden när jag jobbar med appar i javascript och html. Jag antar att det har med event att göra, att man samlar koden som har med eventet att göra och sedan körs den om eventet löser ut. Och därför blir det färre anrop mellan klasserna i och med att många klasser bara "tar hand om sitt eget". Som du sa på föreläsningen att man delar upp koden i småproblem som man löser och sedan får de lösningarna stå för sig själva och man behöver inte ägna sin tankeverksamhet åt dem mer. Jag uppfattar att det är lättare i javascript, men det kan ju också bero på att jag kan det bättre än till exempel java.

## Kapitel 7

En fördel med att få input via formulär i HTML är att man slipper en del av felhanteringen. Jag behöver inte kontrollera att det kommer in ett nummer i fältet för minuter och jag kan i HTML koden sätta ett intervall för vilka nummer jag tillåter (0 - 1000). I UML - kursen bröt vi under en föreläsning ut all validering i egna klasser vilket jag tyckte var en jättebra lösning, då jag tycker att felhantering stör när jag läser kod. 

Jag har inte särskilt mycket felhantering i min app som den är nu. Men om jag fortsätter att utveckla den skulle jag vilja byta ut den lokala lagringen mot exempelvis en databas. Då behöver jag även felhantering för om det exempelvis inte går att koppla upp mot databasen. I boken ges ett förslag på hur man kan "wrappa" ett API, minimera antalet felkoder som kastas, minska beroendet samt göra det lättare att testa.

## Kapitel 8

Boken tar upp problemet med att när man använder en modul så är den anpassad till att passa så många som möjligt och därför får man med mycket på köpet som man inte vill ha och även delar som kan ställa till det i ens eget program. När jag skulle använda min egen modul märkte jag dock motsatsen. Jag hade inte funderat tillräckligt över vad en tänkt användare skulle kunna ha behov av (inte ens min egen användning) och var därför tvungen att bygga på med flera funktioner (att pause och start timern, samt att timern kunde ta bort sog själv när tiden var slut). Och det tänker jag är ett större problem än att det finns för många funktioner.

Bokens beskrivning av learning tests låter som ett utmärkt verktyg att lära sig ett nytt API 

## Kapitel 9

För den här uppgiften har jag bara gjort manuella tester. Så mina reflektioner utifrån boken blir utifrån det. Jag längtar efter att kunna skriva ordentliga tester eftersom jag nu, så snart jag gjort om någonting i koden (det har blivit en hel del refactoring) måste gå till appen och testa så att allt fungerar som det ska. Det är skönt att ha en liten app då. Att kunna köra ett gäng tester efter varje förändring för att med säkerhet få bekräftat att ingenting slutat fungera skulle underlätta. Att skriva testerna efter liknande principer som övrig kod (att bara testa en sak år gången, att tester inte ska vara beroende av varandra osv) låter som en självklarhet, men jag kan tänka mig att det ibland läggs mindre tid där.


## Kapitel 10
 
Genom att formattera om koden efter de funktioner som anropar varandra ser jag bättre, vilka variabler som hör samman med vilka funktioner. 
Och det gör det lättare för mig att bryta ut klasser och skapa större "cohesion". Till exempel vill jag i Timer - modulen bryta ut en klass som är ansvarig för det som händer när tiden är slut. Jag märker att det blir svårt att ha översikt över mer än 200 rader kod och då är de ändå hyfsat väl organiserade. Att bryta upp i fler klasser gör det enklare att hålla koden städad. 

## Kapitel 11

Tidigare skapade jag en instans av klassen SaveAndRead i min todo klass för att kunna hämta det som sparats. Jag ändrade detta till att skicka in SaveAndRead till konstruktorn istället, en dependency injaction, för att minska beroendet mellan todo och saveAndRead. Det gör det enklare för mig att byta till en annan form av lagring senare om jag vill. Jag gjorde samma sak med todoTimer som blev lite som en adapter mellan koden från labb1 och den från labb2.
