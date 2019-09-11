const data = require('./data');

Feature('User login Tests');

let accounts = new DataTable(data.users.headers);

data.users.data.forEach(row => accounts.add(row));

Data(accounts).Scenario('Login Check Tests', (I,current,loginPage) => {
	loginPage.login(current.email, current.password);
	loginPage.logout();
});