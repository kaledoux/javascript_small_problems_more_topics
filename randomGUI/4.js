// Outline
// What needs to happen?
// remove delete button from HB template
// create event listener on contextmenu on li
// build content menu in Handlebars
// create dom element for context menu
// change the event listener on the delete button to new context delete button

// Event listeners required?
// context menu li
  // - preventDefault
  // - create new contextMenu from HB template
  // - add context menu to li
  //   - confirmDelete
// How do they fit together?


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

    addConfirmation(e) {
      let dialogue = this.templates['confirmDelete']();
      e.target.innerHTML += dialogue;
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

    addContextMenu(e) {
      let context = this.templates['contextMenu']();
      e.target.innerHTML += context;
    },

    removeContextMenu() {
      document.querySelector('#context_menu').remove();
    },

    confirmDelete(event) {
      document.querySelector('.confirm_delete').addEventListener('click', (evt) => {
        evt.preventDefault();
        if (this.getElementName(evt) === 'yes') {
          let targetID = event.target.getAttribute('data-id');
          this.removeTodo(targetID);
          // this is temp not needed because the item is appened to li which is being removed
          // this.removeConfirmation();
        } else if (this.getElementName(evt) === 'no') {
          this.removeConfirmation();
        }
      });
    },

    activateContextDelete(evt) {
      let deleteOption = document.querySelector("button[name='delete']");
      deleteOption.addEventListener('click', (e) => {
        e.preventDefault();
        this.removeContextMenu();
        this.addConfirmation(evt);
        this.confirmDelete(evt);
      });
    },

    activateContextMenu() {
      document.addEventListener('contextmenu', (event) => {
        if (event.target.nodeName === 'LI') {
          event.preventDefault();
          this.addContextMenu(event);
          this.activateContextDelete(event);
        }
      });
    },

    init() {
      this.compileTemplates();
      this.constructList();
      this.activateContextMenu();
    },
  };

  Object.create(todoApp).init();
});
