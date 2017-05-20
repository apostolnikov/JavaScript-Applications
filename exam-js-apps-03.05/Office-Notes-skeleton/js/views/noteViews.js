var app = app || {};

app.noteViews = (function() {
    function NoteViews() {
        this.listNotes = {
            loadNotesView: loadNotesView
        };

        this.addNote = {
            addNoteView: addNoteView
        };

        this.editNote = {
            editNoteView: editNoteView
        };

        this.deleteNote = {
            deleteNoteView: deleteNoteView
        }
    }

    function loadNotesView (selector, data) {
        $.get('templates/myNoteTemplate.html', function (template) {
            var outHtml = Mustache.render(template, data);
            $(selector).html(outHtml);
        });
    }

    function addNoteView (selector) {
        $.get('templates/addNote.html', function (template) {
            var outHtml = Mustache.render(template);
            $(selector).html(outHtml);
        }).then(function() {
            $('#addNoteButton').click(function() {
                var title = $('#title').val();
                var text = $('#text').val();
                var deadline = $('#deadline').val();

                //Triggering an event in the application so that we
                //bypass any dependencies with the controller. We pass
                //data object to the event handler that we call the needed controller
                $.sammy(function() {
                    this.trigger('addNote', {title: title, text: text, deadline: deadline});
                });

                /*Old way of calling the addPhone function
                 * but this method needs a dependency with controller*/
                //return controller.addPhone(person, number);

                //The eventListener returns 'false' in order for our a:href
                //link to work correctly
                return false;
            })
        }).done();
    }

    function editNoteView (selector, data) {
        $.get('templates/editNote.html', function (template) {
            var outHtml = Mustache.render(template, data);
            $(selector).html(outHtml);
        }).then(function() {
            $('#editNoteButton').click(function() {
                var title = $('#title').val();
                var text = $('#text').val();
                var deadline = $('#deadline').val();

                //Triggering an event in the application so that we
                //bypass any dependencies with the controller. We pass
                //data object to the event handler that we call the needed controller
                $.sammy(function() {
                    this.trigger('editNote', {id:data.id, title: title, text: text, deadline: deadline});
                });

                /*Old way of calling the editPhone function
                 * but this method needs a dependency with controller*/
                //return controller.editPhone(data.id, person, number);

                //The eventListener returns 'false' in order for our a:href
                //link to work correctly
                return false;
            })
        }).done();
    }

    function deleteNoteView (selector, data) {
        $.get('templates/deleteNote.html', function (template) {
            var outHtml = Mustache.render(template, data);
            $(selector).html(outHtml);
        }).then(function() {
            $('#deleteNoteButton').click(function() {
                //Triggering an event in the application so that we
                //bypass any dependencies with the controller. We pass
                //data object to the event handler that we call the needed controller
                $.sammy(function() {
                    this.trigger('deleteNote', {id: data.id});
                });

                /*Old way of calling the deletePhone function
                 * but this method needs a dependency with controller*/
                //return controller.deletePhone(data.id);

                //The eventListener returns 'false' in order for our a:href
                //link to work correctly
                return false;
            })
        }).done();
    }

    return {
        load: function() {
            return new NoteViews();
        }
    }
}());