window.indexedDB = window.indexedDB || window.mozIndexedDB ||
                window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction ||
                window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange ||
                window.webkitIDBKeyRange || window.msIDBKeyRange;

var db = null;

function onerror(e) {
    console.log(e);
}

function open () {
    var version = 4;
    var request = indexedDB.open("todo-list", version);

    request.onupgradeneeded = function(e) {
        db = e.target.result;
        if(db.storeObjectNames.contains('todo-list')) db.deleteObjectStore("todo-list");

        var store = db.createObjectStore("todo-list",
                    { keyPath: "timeStamp"});
    };

    request.onerror = onerror;

    request.onsuccess = function(e) {
        db = e.target.result;
        console.log("DB opened");
    };
}

function add (todoText) {
    var transaction = db.transaction(["todo-list"], "readwrite");
    var store = transaction.objectStore("todo-list");
    var estado = document.getElementById("estado").value;
    var data = {
        "text": todoText,
        "timeStamp": new Date().getTime(),
        "estado": estado
    };

    var request = store.put(data);

    request.onsuccess = function(e) {
        console.log("Sucessful add: "+e);
    };

    request.onerror = function(e) {
        console.log("Error adding: ", e);
    };
}

function getAllTodoItems() {
    var todos = document.getElementById("todoItems");
    todos.innerHTML = "";

    var transaction = db.transaction(["todo-list"]);
    var store = transaction.objectStore("todo-list");

    var cursorRequest = store.openCursor();

    cursorRequest.onsuccess = function(e) {
        var result = e.target.result;
        if(!!result == false) return;

        console.log(result.value);
        result.continue();
    };

    cursorRequest.onerror = onerror;
};

function addTodo() {
    var todo = document.getElementById("todo");
    add(todo.value);
    todo.value = "";
}
function removeTask(){
    var transaction = db.transaction(['todo-list'], 'readwrite');
    var store = transaction.objectStore('todo-list');
    var key = document.getElementById("id_eliminar").value;
    store.delete(parseInt(key));
}
function getTasks(){
    var transaction = db.transaction(['todo-list'], 'readwrite');
    var store = transaction.objectStore('todo-list');
    var singleKeyRange = IDBKeyRange.only("1");
    var request = store.openCursor(singleKeyRange);
}
function init() {
    open();
}

window.addEventListener("DOMContentLoaded", init, false);
