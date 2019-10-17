Validation.add('validate-price', 'Only numbers are accepted', function(v) {
    return Validation.get('IsEmpty').test(v) || /^\d+$/i.test(v)
});