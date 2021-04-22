// think about what needs to happen
//   - What/HowMany event handlers
//     - what do they need to do?
//     - dependencies? Do they need to chain into one another?
//   - What html attributes would be helpful in targeting DOM elements?
//     - class
//     - id
//     - data-***
//
// create a PEDAC plan for the program
//   - id sub processes etc!
//
// add DOM content loaded event
//   create object to hold app data and behaviors
//     create an object to hold the HB templates templates: {}
//       - compile templates
//       - register partials
//     compileTemplatesAndPartials() {
      // this.templates = {};
//       document.querySelectorAll("script[type='text/x-handlebars-template']")
        // .forEach(template => {
//           this.templates[template.getAttribute('id')] = Handlebars.compile(template.innerHTML);
//         });
      // document.querySelectorAll("[data-type=partial]").forEach(template => {
      //   Handlebars.registerPartial(template['id'], template['innerHTML']);
      // });
//       });
//     },
//       - register sub-expressions
//
  // id methods that will be used to generate dynamic content and define as
  //   properties of the object
  //
  // define methods that are used to create listeners and handle interactions
  //
  // review class methods to see what can be refactored and extracted
  //
  // define init method
  //   - build template library
  //   - construct DOM elements
  //   -set event listeners
  //
  // after complete object has been defined
  //   - create new instance of the object with OLOO
  //   Object.create(appName).init();

document.addEventListener('DOMContentLoaded', function(event) {
  const todoApp = {
    itemList: document.querySelector('#todos'),

    compileTemplates() {
      this.templates = {};
      let tempCollection = document.querySelectorAll("script[type='text/x-handlebars-template']");
      tempCollection.forEach(template => {
        this.templates[template.getAttribute('id')] = Handlebars.compile(template.innerHTML);
      });
    },

    constructList() {
      const todo_items = [
        { id: 1, title: 'Homework' },
        { id: 2, title: 'Shopping' },
        { id: 3, title: 'Calling Mom' },
        { id: 4, title: 'Coffee with John '}
      ];
      let list = this.templates['todoItems']({todo_items: todo_items});
      this.itemList.innerHTML += list;
    },

    addConfirmation() {
      let dialogue = this.templates['confirmDelete']();
      this.itemList.innerHTML += dialogue;
    },

    removeConfirmation() {
      document.querySelector('.confirm_delete').remove();
    },

    removeTodo(id) {
      this.itemList.querySelectorAll(`[data-id='${id}']`).forEach(node => {
        node.remove();
      });
    },

    getElementName(e) {
      return e.target.getAttribute('name');
    },

    confirmDelete(event) {
      document.querySelector('.confirm_delete').addEventListener('click', (evt) => {
        evt.preventDefault();
        if (this.getElementName(evt) === 'yes') {
          let targetID = event.target.getAttribute('data-id');
          this.removeTodo(targetID);
          this.removeConfirmation();
        } else if (this.getElementName(evt) === 'no') {
          this.removeConfirmation();
        }
      });
    },

    init() {
      this.compileTemplates();
      this.constructList();
      document.addEventListener('click', (e)=> {
        e.preventDefault();
        if (e.target.classList.contains('delete')) {
          this.addConfirmation();
          this.confirmDelete(e);
        }
      });
    },
  };

  Object.create(todoApp).init();
});
