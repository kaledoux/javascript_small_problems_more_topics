// 1 Scope:
//   - view screen
//     - must have two distinct areas:
//       - lower part => entry window that shows the current entry
//       - upper part => operation window that show the operation in progress
//
//   - buttons
//     - All digits: 0-9
//     - +, -, /, *, %, =, NEG, C, CE
//     - The NEG button negates the value in the entry window.
//     - The CE button clears the entry window and replaces it with 0.
//     - The C button clears both the entry and operation windows and leaves a value of 0 in the entry window.
//
//   - operations/function
//     - when the user clicks a digit
//       - if the current entry value is 0, replace 0 with the number
//       - else append the digit to the current entry window value
//     - when the use clicks an operator
//       - copy the current value in the entry window to the operation window with the operator appended
//       - set the entry window value back to 0
//     - when the user clicks the = button
//       - use the current operation and current entry to calc final result
//       - clear operation window and display the result in the entry window
    // - Improvements:
    //   - button layout - present like actual calculator
    //   - multiple negatives will create NaNs
      // -keyboard inputs


//
// 2 Overview
//   - view screen
//     - create container div to hold both sections
//     - each section will then get a separate id to be styled and for DOM update
//     - Screen object will have two main properties (entryScreen & operationScreen)
//     - hold basic strings (this means that converting to and from string/numbers)
//     - property currentOperation that stores the contents of operations screen
//     - integrate both as properties of a Screen class => methods for
//       - class will have method for insertingvalue & exportingValue & clearScreen
//       - the rest of the logic for calculation will be handled by a calculatorApp
//
//   - buttons
//     - div to hold 20 buttons
//       - style each as grid/flex to maintain sizing of each button
//     - build buttons from template
//       - create button array to make templating easier? [1,2,3,4,5,6,7,8,9,0,"+","-","*","/","%","=","NEG","CE","C"]
//     - all buttons handled with event listener in calcApp, they just report a value
//       to be exported/used with the CalculatorLogic & Screen classes
//
//   - operations
//     - calc app
//       - set event listeners on buttons
//       - buttons feed values to methods:
//         -
//     - calculatorLogic
//       - instantiate instance with a reference to the Screen object being used by
//         calculatorApp
//         - addValue(val, this.screen)
//         - getAnswer(screen) - move entry to operation, total, export total, clear operation screen,
//                         clear entry screen, add total to entry screen
//         - clearScreen(screen) - screen reset
//         - negateValue(screen) - screen prepend '-' to entry
//         - clearEntry() - clearScreen(entry)
//         - clearAll() - clear both screens
//         - getTotal() - take totalString from screen export, convert to numerical
//                         expression, solve, return value
//
//         - processButton(val)
//           - switch statement baed on value of button pressed; this will route
//             value to appropriate combination of methods
//             -switch (val) {
//               if val matches digits
//                 this.addValue(val)
//               ...etc
//             }
//
// 3 PEDAC
// ViewScreen
// constructor
//   - properties:
//   entryScreen = '0';
//   operationScreen = '';
//   currentOperation = '';
//   - methods:
//   insertValue(val)
//     append val to entryScreen
//   prependValue(val)
//     prepend val to entryScreen
//   clearScreen(screen)
//     screen = ''
//   zeroScreen(screen)
//     screen = '0'
//   moveEntryToOperations()
//     append value of entryScreen to operationScreen
//
// CalculatorLogic
// constructor()
//   this.screen = new Screen()
//   this.entry = this.screen.entryScreen
//   this.operations = this.screen.operationScreen
//   this.digits = ['0','1','2','3','4','5','6','7','8','9'];
//   this.operators = ["+","-","*","/","%"];
//   this.specials = ["NEG", "CE", "C"];
//   this.total;
//   this.operationTotal
// - methods
//   clearOperations()
//     this.screen.clearScreen(this.operations)
//   clearEntry()
//     this.screen.clearScreen(this.entry);
//   zeroEntry()
//     this.screen.zeroScreen(this.entry);
//   addValueToEntry(val)
//     this.screen.insertValue(value)
//   getOperationsTotal()
//     set this.operationsTotal to eval(this.operations)
//   handleDigit(val)
//     if (this.entry === '0' || this.operations !== '') {
//       this.entry.clearScreen()
//     }
//       this.entry.appendValue(val)
//   handleOperator(op)
//     this.screen.insertValue(op);
//     this.screen.moveEntryToOperations()
//     this.addValueToEntry(this.getOperationsTotal());
//   handleSpecial(val)
//     if (val === 'NEG')
//       this.screen.prependValue('-')
//     if (val === 'C')
//       this.screen.zeroEntry();
//     if (val === 'CE')
//       this.screen.zeroEntry();
//       this.screen.clearScreen(this.operations);
//   handleEqual(val)
//     this.screen.moveEntryToOperations();
//     this.addValueToEntry(this.getOperationsTotal());
//     this.screen.clearScreen(this.operations);
//
//   processValue(val)
//     if (this.digits.includes(val))
//       this.handleDigit(val);
//     if (this.operators.includes(val))
//       this.handleOperator(val);
//     if (this.specials.includes(val))
//       this.handleSpecial(val);
//     if (val === '=')
//       this.handleEqual()
//
// CalculatorApp
// constructor
//   // this can be moved outside to DOm event?
//   new UpdateEngine()
//   this.logic = new CalculatorLogic(this.screen);
//   this.bindListeners()
//
// methods
//   bindListeners()
//     on click of button this.processButton bound to this
//   processButton()
//     let buttonValue = event.target.value**
//     this.logic.processValue(buttonValue)
//     this.updateScreens();
//   updateScreens()
//     UpdateEngine.updateScreenValue(this.logic.entry);
//     UpdateEngine.updateScreenValue(this.logic.operations);
//
//
// UpdateEngine
//   constructor
//     this.buttonList = ['1','2','3','4','5','6','7','8','9','0',"+","-","*","/","%","=","NEG","CE","C"]
//     this.buildTemplates
//     this.templates['buildCalculator'](buttonList);
//   methods-
//   registerHandlebarsTemplates() {
//     this.templates = {};
//     document.querySelectorAll("script[type='text/x-handlebars-template']")
//       .forEach(template => {
//         this.templates[template.getAttribute('id')] = Handlebars.compile(template.innerHTML);
//       });
//     document.querySelectorAll("[data-type=partial]").forEach(template => {
//       Handlebars.registerPartial(template['id'], template['innerHTML']);
//     });
//   }
//   static updateScreenValue(screen, value)
//     screen.innerText = value;
//
// 4 Diagram
// UpdateEngine == builds visual interface and buttons for ==> CalculatorApp
// Screen == tracks values entered on two screen areas, passes values to ==> CalculatorLogic
// CalculatorLogic == processes values from CalculatorApp, interfaces with Screen to render
//
// 5
// Events - button clicks; handled by listeners in CalculatorApp
// App - CalculatorApp orchestrates functions of CalculatorLogic
// Serializer - no intermediary class necessary, string values handled in CalculatorLogic
// API - CalculatorLogic acting as API for Screen values
// DOMUpdater -
class UpdateEngine {
  constructor() {
    this.buttonList = ["NEG","CE","C","%",'7','8','9',"*",'4','5','6',"/",'1','2','3',"+",'0',"=","-"];

    this.registerHandlebarsTemplates();
    this.buildCalculator();
  }

  registerHandlebarsTemplates() {
    this.templates = {};
    document.querySelectorAll("script[type='text/x-handlebars-template']")
      .forEach(template => {
        this.templates[template.getAttribute('id')] = Handlebars.compile(template.innerHTML);
      });
    document.querySelectorAll("[data-type=partial]").forEach(template => {
      Handlebars.registerPartial(template['id'], template['innerHTML']);
    });
  }

  buildCalculator() {
    document.body.innerHTML = this.templates['buildCalculator']({buttons: this.buttonList});
  }

  static updateScreenValue(screen, newVal) {
    document.querySelector(`#${screen}`).innerText = newVal;
  }
}

class Screen {
  constructor() {
    this.entryScreen = '0';
    this.operationScreen = '';
  }

  insertValue(val) {
    this.entryScreen += val;
  }
  prependValue(val) {
    this.entryScreen = val + this.entryScreen;
  }
  clearScreen(screen) {
    if (screen === 'entry') {
      this.entryScreen = '';
    } else if (screen === 'operations') {
      this.operationScreen = '';
    }
  }
  zeroScreen() {
    this.entryScreen = '0';
  }
  moveEntryToOperations() {
    this.operationScreen += this.entryScreen;
  }
}

class CalculatorLogic {
  constructor() {
    this.screen = new Screen();
    this.entry = this.screen.entryScreen;
    this.operations = this.screen.operationScreen;
    this.writingNewNumber = true;
    this.operationTotal;
    this.inputValues = {
      digits: ['0','1','2','3','4','5','6','7','8','9'],
      operators: ["+","-","*","/","%"],
      specials: ["NEG", "CE", "C"],
    };
  }
  updateValues() {
    this.entry = this.screen.entryScreen
    this.operations = this.screen.operationScreen
  }
  clearOperations() {
    this.screen.clearScreen('operations')
  }
  clearEntry() {
    this.screen.clearScreen('entry');
  }
  zeroEntry() {
    this.screen.zeroScreen();
  }
  addValueToEntry(val) {
    this.screen.insertValue(val);
  }
  negateEntry() {
    if (this.screen.entryScreen[0] !== '-') {
      this.screen.prependValue('-');
    } else {
      this.screen.entryScreen = this.screen.entryScreen.slice(1);
    }
  }
  setValueForEntryScreen() {
    if (ExpressionStringHandler.hasOneOperator(this.screen.operationScreen)) {
      let op = ExpressionStringHandler.getFirstOperand(this.screen.operationScreen);
      this.addValueToEntry(op);
    } else {
      this.getOperationsTotal();
      this.addValueToEntry(this.operationTotal);
    }
  }
  moveEntryToOperations() {
    this.screen.moveEntryToOperations();
  }
  getOperationsTotal(equal=false) {
    let valString = this.screen.operationScreen;
    this.operationTotal = ExpressionStringHandler.getValue(valString, equal);
  }
  handleDigit(val) {
    if (this.writingNewNumber) {
      this.clearEntry();
      this.writingNewNumber = false;
    }
    this.screen.insertValue(val);
  }
  handleOperator(op) {
    this.addValueToEntry(op);
    this.moveEntryToOperations();
    this.clearEntry();
    this.setValueForEntryScreen();
    this.writingNewNumber = true;
  }
  handleSpecial(val) {
    switch (val) {
      case 'NEG':
        this.negateEntry();
        break;
      case 'CE':
        this.clearOperations();
      case 'C':
        this.zeroEntry();
        this.writingNewNumber = true;
        break;
    }
  }
  handleEqual() {
    this.moveEntryToOperations();
    this.getOperationsTotal(true);
    this.clearEntry();
    this.clearOperations();
    this.addValueToEntry(this.operationTotal);
    this.writingNewNumber = true;
  }
  processValue(val) {
    if (this.inputValues.digits.includes(val)) {
      this.handleDigit(val);
    } else if (this.inputValues.operators.includes(val)) {
      this.handleOperator(val);
    }else if (this.inputValues.specials.includes(val)) {
      this.handleSpecial(val);
    } else if (val === '=') {
      this.handleEqual()
    }
    this.updateValues();
  }
}

class ExpressionStringHandler {
  static hasOneOperator(expString) {
    return expString.match(/[-+*/%]/g).length === 1;
  }
  static getFirstOperand(expString) {
    return expString.slice(0, expString.length -1);
  }
  static getValue(expString, includeFinalOperator=false) {
    if (includeFinalOperator) {
      return String(eval(expString));
    } else {
      return String(eval(expString.slice(0, expString.length -1)));
    }
  }
}

class CalculatorApp {
  constructor() {
    this.logic = new CalculatorLogic(this.screen);
    this.bindListeners()
  }

  bindListeners() {
    document.body.addEventListener('click', (event) => {
      if (event.target.classList.contains('btn')) {
        this.processButton();
      }
    });
    document.addEventListener('keypress', (event) => {
      this.processKey();
    });
  }
  processButton() {
    let buttonValue = event.target.value;
    this.logic.processValue(buttonValue);
    this.updateScreens();
  }
  processKey() {
    let keyValue = event.key;
    this.logic.processValue(keyValue);
    this.updateScreens();
  }
  updateScreens() {
    UpdateEngine.updateScreenValue('entry', this.logic.entry);
    UpdateEngine.updateScreenValue('operations', this.logic.operations);
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  const updater = new UpdateEngine();
  const calculator = new CalculatorApp();
})
