export class CapitalizeValueConverter {
    toView(value) {

        if (value === undefined || value === null || value === '') {
            return value;
        }
        return `${value[0].toLocaleUpperCase()}${value.substr(1).toLocaleLowerCase()}`;
    }
}