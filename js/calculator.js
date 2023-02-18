//Объект с математическими операциями!
const OPERATIONS = {
    sum: '+',
    dif: '-',
    multy: '*',
    sep: '/'
};
//основная функиця калькулятора!
function calculator({a,b, operation}) {
    let result = null;
    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a,b);
            break;
        case OPERATIONS.dif:
            result = dif(a,b);
            break;
        case OPERATIONS.multy:
            result = multy(a,b);
            break;
        case OPERATIONS.sep:
            result = sep(a,b);
            break;
        default:
            break;
    }
    return result;
}