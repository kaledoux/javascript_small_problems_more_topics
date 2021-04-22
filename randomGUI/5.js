const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

// Outline
// What needs to happen?
// populate filter form
// from submission will dictate the how a function filters cars
//   - function will take an argument that is json obj
//   - form submission action will transfer form data to json and pass to function
// gallery is wiped on form submit
// new gallery built from filtered car array/object passed to buildGallery
// // Event listeners required?
// Dom load
//   build filter list and gallery
//
//   form submit
//     serialize to json
//     delete gallery
//     build gallery with serialized data
//
// How do they fit together?

document.addEventListener('DOMContentLoaded', function(event) {
  const appName = {
    cars: [
      { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: '2005', price: '7000' },
      { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: '2008', price: '11000' },
      { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: '2009', price: '12500' },
      { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: '2016', price: '15000' },
      { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: '2014', price: '9000' },
      { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: '2013', price: '25000' },
      { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: '2013', price: '26000' },
    ],

    main: document.querySelector('main'),

    compileTemplatesAndPartials() {
      this.templates = {};
      document.querySelectorAll("script[type='text/x-handlebars-template']")
        .forEach(template => {
          this.templates[template.getAttribute('id')] = Handlebars.compile(template.innerHTML);
        });
      document.querySelectorAll("[data-type=partial]").forEach(template => {
        Handlebars.registerPartial(template['id'], template['innerHTML']);
      });
    },

    renderCarOptions() {
      let makes = [],
          models = [],
          years = [],
          prices = [];

      this.cars.forEach(carObj => {
        if (!makes.includes(carObj['make'])) {
          makes.push(carObj['make']);
        }
        if (!models.includes(carObj['model'])) {
          models.push(carObj['model']);
        }
        if (!prices.includes(carObj['price'])) {
          prices.push(carObj['price']);
        }
        if (!years.includes(carObj['year'])) {
          years.push(carObj['year']);
        }
      });

      return {makes, models, years, prices};
    },

    buildFilter() {
      let carObj = this.renderCarOptions();
      document.querySelector('header').innerHTML += this.templates["buildFilter"](carObj);
    },

    buildGallery(filteredCars) {
      if (filteredCars) {
        this.main.innerHTML += this.templates["buildCarGallery"]({cars: filteredCars});
      } else {
        this.main.innerHTML += this.templates["buildCarGallery"]({cars: this.cars});
      }
    },

    removeCarGallery() {
      document.querySelector('.gallery').remove();
    },

    // utility functions
    filterCarList(carInfoJSON) {
        let newCarList = this.cars;
      Object.keys(carInfoJSON).forEach(carDetail => {
        newCarList = newCarList.filter(carObj => {
          if (carInfoJSON[carDetail] !== "") {
            return carObj[carDetail] === carInfoJSON[carDetail];
          } else {
            return true;
          }
        });
      });
      return newCarList;
    },

    formDataToJson(formData) {
      const json = {};
      for (const pair of formData.entries()) {
          json[pair[0]] = pair[1];
      }
      return json;
    },

    // event listener specific functions
    activateFilter() {
      let form = document.querySelector('form');
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        let fd = new FormData(form);
        let jsonFormData = this.formDataToJson(fd);
        let filterList = this.filterCarList(jsonFormData);
        this.removeCarGallery();
        this.buildGallery(filterList);
        form.reset();
      })
    },

    // build the init
    init() {
      // build templates and elements
      this.compileTemplatesAndPartials();
      this.buildFilter();
      this.buildGallery();
      this.activateFilter();

      // event listener functions that function on elements

    },
  };

  // create a new instance of the app
  Object.create(appName).init();
});
