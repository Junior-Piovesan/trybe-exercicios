const newEmployees = (callBack) => {
  const employees = {
    id1: callBack('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callBack('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callBack('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const emailGenerate = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().replace(' ','_');
    const newEmail = `Nome: ${nomeCompleto}, Email: ${email}@trybe.com`;
    return newEmail;
}
console.log(newEmployees(emailGenerate));