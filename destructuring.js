let polstudent = ({name, polytechnic}) => {
// arrow function let plstudents memiliki satu parameters
// parametrs mempunyai 2 properti yaitu name dan polytechnic
    alert(`${name} from ${polytechnic}`);
};

polstudent({
    name: 'ronaldo',
    polytechnic: 'politeknik negeri malang'
});
// Objek di-"destructuring" nilai-nilainya dari properti name dan polytechnic