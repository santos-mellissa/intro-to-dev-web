// Adicione as propriedades email, fone, userGithub e linkedIn ao objeto customer utilizando uma função chamada addProperty.

const customer = {
    firstName: 'Mell',
    age: 22,
    job: 'Product Manager',
  };

  function addProperty(object, key, value) {
    if(typeof object[key] === "undefined"){
        object[key] = value;
    }
  };

addProperty(customer, 'email', 'mellissa03santos@gmail.com');
addProperty(customer, 'fone', '31991545909');
addProperty(customer, 'userGithub', 'santos-mellissa');

console.log(customer);