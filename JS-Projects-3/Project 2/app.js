// the purpose of this to be able to quickly add new data

let data = [
    {
        name: 'John',
        age: '25'
    },
    {
        name: 'Mike',
        age: '25'
    },
    {
        name: 'Morgan',
        age: '25'
    },
    {
        name: 'Trevor',
        age: '27'
    },
    {
        name: 'Rab',
        age: '28'
    },
    {
        name: 'Tom',
        age: '26'
    }
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');