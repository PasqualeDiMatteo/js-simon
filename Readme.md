# SIMON SAYS

## Traccia

Visualizzare in pagina 5 numeri casuali diversi. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

---

## Bonus

- Mostriamo il countdown dei 30 secondi in pagina;
- Facciamo inserire i numeri all'utente tramite 5 campi di input invece che via prompt;

---

## Steps

1. Prendiamo gli elementi dal DOM
2. Generiamo 5 numeri Random da 1 a 100
3. Avviamo un countdwn di 30s
4. Quando il conto alla rovescia finisce nascondere i numeri e mostrare gli imput
5. Confrontiamo i numeri dell'utente e i numeri generati
