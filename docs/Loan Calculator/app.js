document.getElementById('loan-form').addEventListener('submit', function(e) {

  document.querySelector("#results").style.display = "none";
  document.querySelector("#loading").style.display = "block";
  setTimeout(() => {
    calculateResults();
  }, 1000);
  e.preventDefault();
});

function calculateResults() {
  const amount = document.getElementById('amount');
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPaymant = document.getElementById("monthly-paymant");
  const totalPaymant = document.getElementById("total-paymant");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculaterInterest = parseFloat(interest.value) / 100 / 12;
  const calculaterPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculaterInterest, calculaterPayments);
  const monthly = (principal * x * calculaterInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPaymant.value =  monthly.toFixed(2);
    totalPaymant.value = (monthly *  calculaterPayments).toFixed(2);
    totalInterest.value = ((monthly * calculaterPayments) - principal).toFixed(2);
    document.querySelector("#results").style.display = "block";
    document.querySelector("#loading").style.display = "none";
  } else {
    showError('Please cheak your numbers');
  }

}

function showError(error) {
  document.querySelector("#results").style.display = "block";
  document.querySelector("#loading").style.display = "none";
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv, heading);
  setTimeout(clearError, 3000);
}
function clearError() {
  document.querySelector('.alert').remove();
}