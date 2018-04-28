(function () {
    'use strict';
    angualr
        .module('app.dashboard')
        .controller('Dashboard',Dashboard);
    Dashboard.$inject=['toastr']
    function Dashboard(toastr) {
        var vm = this;
        vm.title = "Dashboard";
        activate();

        function activate() {
            toastr.success('Welcome to RealEstate Application');
        }
    }    
})();