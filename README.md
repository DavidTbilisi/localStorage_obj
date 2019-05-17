# localstorage class - Pure Javascript

### available methods
```javascript
// this will be saved to localstorage
db.save({name:'john'.lastname:'doe'});

// get var by key
db.get('name');

// list all vars as array
db.getAll();

// get var key by it's number
db.nth(1);

// clear all vars in localstorage
db.clear();

// removes by key
db.rm('name');
```



