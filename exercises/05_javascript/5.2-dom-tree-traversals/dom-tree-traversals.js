const li_list = document.getElementsByTagName("li");
console.log(li_list.length);

var li_element;
function count_child(li_element) {
    if (li_element.children.length === 0) {
        return 0;
    }
    var result = li_element.children[0].children.length;
    var child;
    for (child of li_element.children[0].children) {
        result += count_child(child)
    }
    return result;
}

for (li_element of li_list) {
    console.log(count_child(li_element));
}

for (li_element of li_list) {
    if (count_child(li_element) !== 0) {
        li_element.firstChild.nodeValue += ' (' + count_child(li_element) + ')';
    }
}
