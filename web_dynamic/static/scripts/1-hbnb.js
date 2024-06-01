$(document).ready(function() {
    var selectedAmenities = {};

    $('input[type=checkbox]').change(function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if (this.checked) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        // Update the content of the <ul> with selected amenities
        var amenitiesList = Object.values(selectedAmenities).map(function(name) {
            return '<li>' + name + '</li>';
        }).join('');

        $('#selected-amenities').html(amenitiesList);
    });
});
