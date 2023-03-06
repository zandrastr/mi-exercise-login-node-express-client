## Beskrivning
I den här övningen skall du utveckla en inloggningssida.  
Du skall på serversidan ha logiken för att kolla om namn och lösenord stämmer!

 

Du skall utveckla ett API (Med express js) som du kan anropa från front end applikationen (Fetch) som skickar namn och lösenord till en route på servern.

Skapa flera användare till ett object array (global array) på servern så att du kan logga in med olika användare. Varje användare skall ha ett unikt ID.

Servern skall sedan kolla om det är en korrekt inloggning och i så fall svara med användarens ID, spara detta i en variabel på klienten.  
Vid felaktig inloggning skall en error skickas tillbaka, visa på klienten att fel uppgifter skickades.

En global variabel “lever” på servern så länge servern inte startas om eller krachar pga ett fel.

Globala variabler som innehåller data som är klient (knutet till besökaren) bör aldrig hanteras på detta sättet. (Eller viktig data som inte får förloras när servern startar om). Men för övningens skull kan vi hantera användarna på detta sätt nu.

Object arrayen för users skulle kunna se ut som:
```
let users = [
{userId: 1, userName: “Janne”, password: “test”},
{userId: 2, userName: “Kalle”, password: “hepp”},
{userId: 3, userName: “Anna”, password: “hopp”}
] 
```

### BONUS:

Vid lyckad inloggning, spara besökarens ID i localStorage.  
När sidan laddas om så skall ett välkomstmeddelande visas istället för inloggningsformuläret till besökaren samt en logga ut knapp som raderar ID ur localStorage.