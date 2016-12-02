// used in following page
(function () {
    angular
        .module('EmuUser')
        .controller('UserListController', UserListController);

    function UserListController($routeParams, UserService) {
        var vm = this;

        vm.self_uid = $routeParams.self_uid;


        vm.follow = function(f_uid) {
            UserService.followUser(vm.self_uid, f_uid)
                .then(
                    function() {
                        alert("follow success.");
                    },
                    function() {
                        alert("follow failed. try again later");
                    }
                );
        };

        vm.unfollow = function(uf_uid) {
            UserService.unfollowUser(vm.self_uid, uf_uid)
                .then(
                    function() {
                        alert("unfollow success.");
                        // delete User from Users
                        if (vm.mode == SELF_DISPLAY_MODE) {
                            vm.users = vm.users.filter(function(x){return x._id != vm.users._id;});
                        }
                    }
                );
        };
    }
})();
