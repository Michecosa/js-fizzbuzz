# 🧩 Esercizio FizzBuzz (JavaScript)

## 📝 Traccia
> Scrivi un programma che stampi i numeri da **1 a 100**,  
> ma per i multipli di **3** stampi `"Fizz"` al posto del numero e per i multipli di **5** stampi `"Buzz"`.  
> Per i numeri che sono **sia multipli di 3 che di 5**, stampi `"FizzBuzz"`.

🌐 [Check it out!](https://michecosa.github.io/js-fizzbuzz/) 
<br>Ricorda di aprire in console per vedere l'output!
<br>
<br>

## 💡 Descrizione
Questo programma implementa il classico esercizio **FizzBuzz**, molto usato per esercitarsi con i cicli e le condizioni in JavaScript.  
L’obiettivo è stampare in console una sequenza di numeri da 1 a 100, sostituendo quelli divisibili per 3, 5 o entrambi con parole specifiche.

<br>

## ⚙️ Logica del programma
Il codice utilizza un ciclo `for` che va da **1 a 100**.  
Per ogni numero:
1. Verifica se è divisibile per 3 (`i % 3 == 0`).
2. Verifica se è divisibile per 5 (`i % 5 == 0`).
3. In base ai risultati:
   - Se è divisibile **sia per 3 che per 5**, stampa **"FizzBuzz"**.
   - Se è divisibile **solo per 3**, stampa **"Fizz"**.
   - Se è divisibile **solo per 5**, stampa **"Buzz"**.
   - Altrimenti, stampa il **numero stesso**.

<br>

## 🧠 Concetti usati
- **Ciclo `for`** per iterare da 1 a 100.  
- **Operatori di modulo `%`** per controllare la divisibilità.  
- **Struttura condizionale `if...else if...else`** per decidere cosa stampare.  
- **`console.log()`** per stampare i risultati nella console.
