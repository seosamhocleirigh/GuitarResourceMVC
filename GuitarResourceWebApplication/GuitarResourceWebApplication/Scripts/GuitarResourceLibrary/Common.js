function GuitarResource() {

};

GuitarResource.prototype.pickRandomItemFromArray = function (array) {
    var itemIndex = Math.floor(Math.random() * array.length);
    return array[itemIndex];
}