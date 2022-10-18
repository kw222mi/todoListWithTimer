# Testrapport

## Sammanfattning

|Test| Utfall|
|-----|------|
| 1.1 | OK|
| 1.2 | OK|
| 1.3 | OK|
| 1.4 | OK|
| 2.1 | OK*|
| 2.2 | OK*|
| 2.3 | OK*|
| 3.1 | OK|
| 4.1 | OK|

* Testerna gick igenom. Men jag har noterat att det ibland, när man tar bort en todo och sedan uppdaterar, har försvunnit två todos istället för en.
Det händer inte varje gång, så det behöver debuggas ytterligare.

# Tester

## Lägg till todo

### 1.1 Input: 

Todo: Fika

minutes: 15

### Output:

![Output](./todoWithTimer/img_test/1.1_50.png )

### 1.2 Input: 

Todo:    (tomt)

minutes:     (tomt)

### Output:

![Output](./todoWithTimer/img_test/1.2_50.png )

### 1.3 Input: 

Todo: Fika

minutes: femton

### Output:

![Output](./todoWithTimer/img_test/1.3_50.png )

### 1.4 Input: 

Todo: `<div>`

minutes: 15

### Output:

![Output](./todoWithTimer/img_test/1.4_50.png )

## Ta bort todo

### 2.1 Ta bort den översta todon

### Output:

![Output](./todoWithTimer/img_test/2.1_50.png )

### 2.2 Ta bort todon i mitten

### Output:

![Output](./todoWithTimer/img_test/2.2_50.png )

### 2.3 Ta bort den sista todon

### Output:

![Output](./todoWithTimer/img_test/2.3_50.png )

## Starta tid

### 3.1 Lägg till todo Fika, 1 minut och tryck sedan på starta.

### Output:

![Output](./todoWithTimer/img_test/3.1_50.png )

## Completed

### 4.1 Lägg till todo Fika, 1 minut och tryck sedan på completed.

### Output:

![Output](./todoWithTimer/img_test/4.1_1_50.png )
