$(function () {
    const kosarAdatok = new Kosar();

    $(window).on("kosarba", function (event) {
        kosarAdatok.setElemKosarba(event.detail);
        
      });

});

