< ol >
    <
    li > < button class = "up" > Up! < /button>Taco<button class="down">Down!</button > < /li> <
    li > < button class = "up" > Up! < /button>Pizza<button class="down">Down!</button > < /li> <
    li > < button class = "up" > Up! < /button>Eggs<button class="down">Down!</button > < /li> <
    /ol>


$.fn.moveUp = function() {
    before = $(this).prev();
    $(this).insertBefore(before)
}

$.fn.moveDown = function() {
    after = $(this).next();
    $(this).insertAfter(after)
}

$('.up').click(function() {
    $(this).parent().moveUp()
})

$('.down').click(function() {
    $(this).parent().moveDown()
})

3