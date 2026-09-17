let allTransactions = [];
const $ = id => document.getElementById(id);

$('loginForm').addEventListener('submit', async e => {
  e.preventDefault();
  const response = await fetch('/api/login', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email:$('email').value,password:$('password').value}) });
  const data = await response.json();
  if (!response.ok) { $('loginError').textContent = data.error; return; }
  $('loginView').hidden = true; $('dashboard').hidden = false; loadTransactions();
});

$('logout').onclick = () => { $('dashboard').hidden = true; $('loginView').hidden = false; };

async function loadTransactions(){
  const response = await fetch('/api/transactions');
  allTransactions = await response.json();
  render(allTransactions);
}

function render(items){
  $('transactionRows').innerHTML = items.map(t => `<tr><td>${t.description}</td><td>${t.category}</td><td>₦${t.amount.toLocaleString()}</td><td>${t.type}</td></tr>`).join('');
  const income = items.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const expenses = items.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  $('income').textContent = `₦${income.toLocaleString()}`;
  $('expenses').textContent = `₦${expenses.toLocaleString()}`;
  $('balance').textContent = `₦${(income-expenses).toLocaleString()}`;
}

$('search').addEventListener('input', e => {
  const q=e.target.value.toLowerCase();
  render(allTransactions.filter(t=>t.description.toLowerCase().includes(q) || t.category.toLowerCase().includes(q)));
});

$('transactionForm').addEventListener('submit', e => {
  e.preventDefault();
  const amount = Number($('amount').value);
  if (!amount) return;
  allTransactions.push({id:Date.now(),description:$('description').value,category:$('category').value,amount,type:$('type').value});
  render(allTransactions);
  $('formMessage').textContent='Transaction added successfully.';
  e.target.reset();
});
