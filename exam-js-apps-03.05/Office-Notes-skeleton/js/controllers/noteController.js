var app = app || {};

app.noteController = (function () {
    function NoteController(model, views) {
        this.model = model;
        this.viewBag = views;
    }

    NoteController.prototype.loadAddNoteView = function(selector) {
        this.viewBag.addNote.addNoteView(selector);
    };

    NoteController.prototype.loadNoteView = function(selector, urlParams, action) {
        var data = urlParams.split('&');
        var outData = {
            id : data[0].split('id=')[1],
            title: data[1].split('title=')[1],
            text: data[2].split('text=')[1],
            deadline: data[3].split('deadline=')[1]
        };

        if(action === 'delete') {
            this.viewBag.deleteNote.deleteNoteView(selector, outData);
        } else {
            this.viewBag.editNote.editNoteView(selector, outData);
        }
    };

    NoteController.prototype.listAllNotes = function (selector) {
        var _this = this;

        return this.model.listAllNotes()
            .then(function (data) {
                _this.viewBag.listNotes.loadNotesView(selector, data);
            }, function (error) {
                console.log(error);
            })
    };

    NoteController.prototype.addNote = function (title, text, deadline) {
        return this.model.addNote(title, text, deadline)
            .then(function() {
                window.location.replace('#/notes/');
            }, function(error) {
                console.log(error);
            })
    };

    NoteController.prototype.editNote = function (noteId, title, text, deadline) {
        return this.model.editNote(noteId, title, text, deadline)
            .then(function() {
                window.location.replace('#/notes/');
            }, function(error) {
                console.log(error);
            })
    };

    NoteController.prototype.deleteNote = function (noteId) {
        return this.model.deletePhone(phoneId)
                    .then(function() {
                        window.location.replace('#/phones/');
                    }, function(error) {
                        console.log(error);
                    })
    };

    return {
        load: function (model, views) {
            return new NoteController(model, views);
        }
    }
}());