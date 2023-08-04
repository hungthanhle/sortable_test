import Sortable from 'sortablejs';
const trElements = document.getElementById('sortable-list');
$(document).ready(function() {
  const sortable = new Sortable(document.getElementById('sortable-list'), {
    handle: '.handle',
    animation: 150,
    ghostClass: 'ghost',
    dragClass: 'bg-gradient-primary', //drag
    forceFallback: true,
    onStart: function(evt) {
      
    },
    onEnd: function(evt) {
      
    },

  });
});

// https://github.com/SortableJS/Sortable/issues/1268
