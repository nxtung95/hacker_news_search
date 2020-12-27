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

const LocalStorage = {
    saveValueSetting,
    getObjectSetting,
}

export default LocalStorage;