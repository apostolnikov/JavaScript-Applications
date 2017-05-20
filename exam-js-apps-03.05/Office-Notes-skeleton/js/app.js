var app = app || {};

(function() {
    var appId= 'B91OaJKVpY7MWVX7rIs7MZo2pY5lKKRYSQfbjclJ';
    var restAPI = 'iqFiNev8ZBk8wSbftJ1uTonfNeBWBk1Lg8fdkcWl';
    var baseUrl = 'https://api.parse.com/1/';

    var headers = app.headers.load(appId, restAPI);
    var requester = app.requester.load();
    var userModel = app.userModel.load(baseUrl, requester, headers);
    var noteModel = app.noteModel.load(baseUrl, requester, headers);

    var homeViews = app.homeViews.load();
    var userViews = app.userViews.load();
    var noteViews = app.noteViews.load();

    var userController = app.userController.load(userModel, userViews);
    var noteController = app.noteController.load(noteModel, noteViews);
    var homeController = app.homeController.load(homeViews);


    app.router = Sammy(function () {
        var selector = '#wrapper';

        this.before(function() {
            var userId = sessionStorage['userId'];
            if(userId) {
                $('#menu').show();
            } else {
                $('#menu').hide();
            }
        });

        this.before('#/home/', function() {
            var userId = sessionStorage['userId'];
            if(!userId) {
                this.redirect('#/');
                return false;
            }
        });

        this.before('#/notes/(.*)', function() {
            var userId = sessionStorage['userId'];
            if(!userId) {
                this.redirect('#/');
                return false;
            }
        });

        this.before('#/profile/(.*)', function() {
            var userId = sessionStorage['userId'];
            if(!userId) {
                this.redirect('#/');
                return false;
            }
        });

        this.before('#/logout/', function() {
            var userId = sessionStorage['userId'];
            if(!userId) {
                this.redirect('#/');
                return false;
            }
        });

        this.get('#/', function () {
            homeController.welcomeScreen(selector);
        });

        this.get('#/login/', function() {
            userController.loadLoginPage(selector);
        });

        this.get('#/register/', function() {
            userController.loadRegisterPage(selector);
        });

        this.get('#/logout/', function() {
            userController.logout();
        });

        this.get('#/home/', function () {
            homeController.homeScreen(selector);
        });

        this.get('#/notes/', function() {
            noteController.listAllNotes(selector);
        });

        this.get('#/notes/add/', function() {
            noteController.loadAddNoteView(selector);
        });

        this.get('#/notes/edit/:id', function() {
            noteController.loadNoteView(selector, this.params['id'], 'edit');
        });

        this.get('#/notes/delete/:data', function() {
            noteController.loadNoteView(selector, this.params['data'], 'delete');
        });

        this.get('#/profile/edit/', function () {
            userController.loadEditProfileView(selector);
        });

        //Declaring a login event listener that calls
        //the appropriate controller function for login
        this.bind('login', function(e, data) {
            userController.login(data.username, data.password);
        });

        //Declaring a register event listener that calls
        //the appropriate controller function for registration
        this.bind('register', function(e, data) {
            userController.register(data.username, data.password, data.fullName);
        });

        //Declaring an edit profile event listener that calls
        //the appropriate controller function for editing profile
        this.bind('editProfile', function(e, data) {
            userController.editProfile(data.username, data.password, data.fullName);
        });

        //Declaring an add phone event listener that calls
        //the appropriate controller function for adding a new phone entry
        this.bind('addNote', function(e, data) {
            NoteController.addNote(data.title, data.text, data.deadline);
        });

        //Declaring an edit phone event listener that calls
        //the appropriate controller function for editing phone entries
        this.bind('editNote', function(e, data) {
            noteController.editNote(data.id, data.title, data.text, data.deadline);
        });

        //Declaring a delete phone event listener that calls
        //the appropriate controller function for deleting phone entries
        this.bind('deleteNote', function(e, data) {
            noteController.deleteNote(data.id);
        });
    });

    app.router.run('#/');
}());