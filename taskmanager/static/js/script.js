document.addEventListener('DOMContentLoaded', function() {
    //sidenavbar initalization  
    let sidebar = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidebar);

    //datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, { 
      format: "dd mmmm, yyy",
      i18n: {done: "Select"}
    });

    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

  });