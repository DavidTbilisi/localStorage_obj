function DB () {
   var items = {};
   var key; 
   var value;

    this.get = function (key) {
        return localStorage[key];
    }
    this.set = function (object) {
       this.items = {};
        if (typeof object == 'object') {
                for(element in object) {
                    localStorage.setItem(element,object[element]);
                    this.key = element;
                    Object.defineProperty(this.items , element, {value:object[element]});
                }
        } else{
            console.error('set argument must be object');
        }
        return this;
    }
    this.rm = function (key) {
        localStorage.removeItem(key);
        return this;
    }
    this.clear = function () {
        localStorage.clear();
        return this;
    }
    this.nth = function (number) {
        return localStorage.key(number);
    }

    this.last = function () {
        return this.items;
    }


    this.getAll = function (keyValue) {
       var keys = Object.keys(localStorage);
       var values = Object.values(localStorage);
        if(keyValue == 1){
                return keys;
        }  else if(keyValue == 2 ) {
                return values;
        } else{ 
            var archive = {},   
                i = keys.length;
            while ( i-- ) {
                archive[ keys[i] ] = localStorage.getItem( keys[i] );
            }
            return archive;
        }
    }
}


var db = new DB;

var query = db.set({'name':"david", 'lname':"chincharashvili"});
console.log( query.last() );