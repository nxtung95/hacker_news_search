import _ from 'lodash';
const saveValueSetting = object => {
    localStorage.setItem("itemSetting", JSON.stringify(object));
}

const getObjectSetting = () => {
    const item = localStorage.getItem("itemSetting");
    if (_.isNull(item)) {
        return null;
    }
    return JSON.parse(item);
}

const getItemSetting = itemName => {
    const item = JSON.parse(localStorage.getItem("itemSetting"));
    if (_.isNull(item)) {
        return null;
    }
    if (!Object.prototype.hasOwnProperty.call(item, itemName)) {
        return null;
    }
    return item[itemName];
}

const addValueSetting = (key, value) => {
    const object = {[key] : value};
    const itemSetting = JSON.parse(localStorage.getItem("itemSetting"));
    const newItem = _.assign(itemSetting, object);
    saveValueSetting(newItem);
}

const LocalStorage = {
    saveValueSetting,
    getObjectSetting,
    getItemSetting,
    addValueSetting,
}

export default LocalStorage;