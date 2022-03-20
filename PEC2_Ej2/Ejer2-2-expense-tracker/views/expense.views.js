/**
 * @class View
 *
 * Visual representation of the model.
 */
class ExpenseView {
  constructor() {
    this.app = this.getElement("#root");
    this.title = this.createElement("h2");
    this.title.textContent = "Expense tracker";  
    this.div1 = this.createElement("div");
    this.div1.className = "container";
    this.subtitle1 = this.createElement("h4");
    this.subtitle1.textContent = "Your Balance";
    this.subtitle2 = this.createElement("h1");
    this.subtitle2.textContent = "$0.00";
    this.subtitle2.id = "balance";
    this.div2 = this.createElement("div");
    this.div2.className = "inc-exp-container";
    this.div3 = this.createElement("div");
    this.subtitle3 = this.createElement("h4");
    this.subtitle3.textContent = "Income";
    this.text1 = this.createElement("p");
    this.text1.textContent = "+$0.00";
    this.text1.className = "money plus";
    this.text1.id = "money-plus";
    this.div3.append(this.subtitle3, this.text1);
    this.div4 = this.createElement("div");
    this.subtitle4 = this.createElement("h4");
    this.subtitle4.textContent = "Expense";
    this.text2 = this.createElement("p");
    this.text2.textContent = "-$0.00";
    this.text2.className = "money minus";
    this.text2.id = "money-minus";
    this.div4.append(this.subtitle4, this.text2);
    this.div2.append(this.div3, this.div4);
    this.subtitle5 = this.createElement("h3");
    this.subtitle5.textContent = "History";
    this.ExpenseList = this.createElement("ul", "expense-list");
    this.ExpenseList.className = "list";
    this.ExpenseList.id = "list";
    this.subtitle6 = this.createElement("h3");
    this.subtitle6.textContent = "Add new transaction";
    this.form = this.createElement("form");
    this.form.id = "form";
    this.formControl = this.createElement("div");
    this.formControl.className = "form-control";
    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.id = "text";
    this.input.placeholder = "Enter text";
    this.input.name = "expense-text";
    this.formControl.append(this.input);
    this.input2 = this.createElement("input");
    this.input2.type = "number";
    this.input2.id = "amount";
    this.input2.placeholder = "Enter amount";
    this.input2.name = "expense-amount";
    this.formControl.append(this.input2);
    this.submitButton = this.createElement("button");
    this.submitButton.className = "btn";
    this.submitButton.textContent = "Add transaction";
    this.form.append(this.formControl, this.submitButton);  
    this.div1.append(this.subtitle1, this.subtitle2, this.div2, this.subtitle5, this.ExpenseList, this.subtitle6, this.form);
    this.app.append(this.title, this.div1);

    this._temporaryExpenseText = "";
    this._temporaryExpenseAmount = "";
    this._initLocalListeners();
  }

  get _ExpenseText() {
    return this.input.value;
  }
  get _ExpenseAmount() {
    return this.input2.value;
  }

  _resetInput() {
    this.input.value = "";
    this.input2.value = "";
  }

  createElement(tag, className) {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  displayExpenses(expenses) {
    // Delete all nodes
    while (this.ExpenseList.firstChild) {
      this.ExpenseList.removeChild(this.ExpenseList.firstChild);
    }

    // Show default message
    if (expenses.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing added! Add a expense?";
      this.ExpenseList.append(p);
    } else {
      // Create nodes
      expenses.forEach(expense => {
        const li = this.createElement("li");
        li.id = expense.id;

        //const checkbox = this.createElement("input");
        //checkbox.type = "checkbox";
        //checkbox.checked = todo.complete;

        const span = this.createElement("span");
        span.contentEditable = true;
        span.classList.add("editable");

        span.textContent = expense.text + "         " + expense.amount;

        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";
        li.append(span, deleteButton);

        // Append nodes
        this.ExpenseList.append(li);
      });
    }

    // Debugging
    console.log(expenses);
  }

  _initLocalListeners() {
    this.ExpenseList.addEventListener("input", event => {
      if (event.target.className === "editable") {
        this._temporaryExpenseText = event.target.innerText;
      }
    });
    this.ExpenseList.addEventListener("input2", event => {
      if (event.target.className === "editable") {
        this._temporaryExpenseAmount = event.target.value;
      }
    });
  }

  bindAddExpense(handler) {
    this.form.addEventListener("submit", event => {
      event.preventDefault();

      if (this._ExpenseText) {
        handler(this._ExpenseText);
        this._resetInput();
      }
    });
  }

  bindDeleteExpense(handler) {
    this.ExpenseList.addEventListener("click", event => {
      if (event.target.className === "delete") {
        const id = event.target.parentElement.id;

        handler(id);
      }
    });
  }

  bindEditExpense(handler) {
    this.ExpenseList.addEventListener("focusout", event => {
      if (this._temporaryExpenseText) {
        const id = event.target.parentElement.id;

        handler(id, this._temporaryExpenseText);
        this._temporaryExpenseText = "";
      }
    });
  }

}
