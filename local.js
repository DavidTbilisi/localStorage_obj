function DB () {
    this.key = [];
    this.value = [];

    this.get = function (key) {
        return localStorage[key];
    }
    this.set = function (object) {
        if (typeof object == 'object') {
                for(element in object) {
                    localStorage.setItem(element,object[element]);
                    this.key.push(element);
                    this.value.push(object[element]);
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
}