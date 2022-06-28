// LISTA DELLA SPESA
/*Rivediamo l’esercizio della lista della spesa visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.*/
/*Lista della spesa (da convertire in array)
Uova
Pane
Latte
Biscotti
Pasta
Affettati
Formaggio
Verdura
Frutta*/
const shoppingList = document.getElementById('shopping-list')
const shoppingItems = ['Uova', 'pane', 'latte', 'biscotti', 'pasta', 'affettati', 'formaggio', 'verdura', 'frutta'];
let i = 0;
let listItem = '';
while (i < shoppingItems.length) {
    listItem += `<li>${shoppingItems[i]}</li>`
    i++;
}
shoppingList.innerHTML = listItem;

