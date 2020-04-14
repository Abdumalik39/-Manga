/**
 03
 * Функция Скрывает/Показывает блок
 04
 * @author ox2.ru дизайн студия
 05
 **/
06
function showHide(element_id) {
    07
    //Если элемент с id-шником element_id существует
    08
    if (document.getElementById(element_id)) {
        09
        //Записываем ссылку на элемент в переменную obj
        10
        var obj = document.getElementById(element_id);
        11
        //Если css-свойство display не block, то:
        12
        if (obj.style.display != "block") {
            13
            obj.style.display = "block"; //Показываем элемент
            14
        }
        15
    else obj.style.display = "none"; //Скрываем элемент
        16
    }
    17
    //Если элемент с id-шником element_id не найден, то выводим сообщение
    18
else alert("Элемент с id: " + element_id + " не найден!");
    19
}
